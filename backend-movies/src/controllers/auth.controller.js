//importaciones
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);
const pool = require(`../config/db`);

//registro del usuario
exports.register = async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: `Todos los campos son obligatorios` });
    }

    //verifico si existe el usuario registrado
    try {
        const [existing] = await pool.query(
            `SELECT id FROM users WHERE email =? OR username =?`,
            [email, username]
        );

        if (existing.lenght > 0) {
            return res.status(409).json({ message: `Usuario o Mail ya registrado` })
        };

        //encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        //insertar nuevo usuario
        const [userResult] = await pool.query(
            `INSERT INTO users(username, email, password) VALUES(?,?,?)`,
            [username, email, hashedPassword]
        );
        res.status(201).json({ message: `Usuario registrado`, userId: userResult.insertId });
    }
    catch (err) {
        res.status(500).json({ error: 'Error al registrar usuario', details: err })
    };
};

//login del usuario, generamos el jwt
exports.login = async (req, res) => {

    const { email, password } = req.body;

    //validación basica
    if (!email || !password) {
        return res.status(400).json({ message: `Email y contraseña son requeridos` })
    };

    try {
        //ejecutar un query/consulta para traernos los users + roles con un JOIN
        const [rows] = pool.query(
            `SELECT users.id, users.username, users.password, roles.name AS role FROM users
             LEFT JOIN user_roles ur ON users.id = user_roles.user_id LEFT JOIN roles ON user_roles.role_id = role.id WHERE users.email =?`, [email])

        if (rows.length === 0) {
            return res.status(401).json({ error: `Credenciales inválidas` });

        }
        //extraigo los datos del usuario 
        const { id, username, email, password: hashedPassword } = rows[0]; //<= se extrae la contraseña y lo guarda en una password ya hasheada


        //verifico si la contraseña deja de ser plana y fue hasheada con la función compare de brcypt
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (!passwordMatch) {
            return res.status(401).json({ error: `Credenciales inválidas` })
        }

        //genera el token JWT
        const token = jwt.sign(

            { id, username},//payload dentro del token que se codifica
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || `1d` }
        );

        //devolver el token al Frontend
        res.status(200).json({ message: `Login exitoso!`, token })
    }
    catch (err) {
    console.error('Error en login:', err);
        res.status(500).json({ message: 'Error del servidor.' });
    }

}
