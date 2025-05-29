//importaciones
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);
const pool = require(`../config/db`);

//registro del usuario
exports.register = async (req, res) =>{

const {username, email, password} = req.body;

if (!username || !email || !password) {
return res.status(400).json({message: `Todos los campos son obligatorios`});
}

//verifico si existe el usuario registrado
try{
const [existing] = await pool.query(
`SELECT id FROM users WHERE email =? OR username =?`,
[email, username]
);

if (existing.lenght > 0) {
return res.status(409).json({message: `Usuario o Mail ya registrado`})    
};

//encriptar la contraseña
const hashedPassword = await bcrypt.hash(password, 10);

//insertar nuevo usuario
const [userResult] = await pool.query(
`INSERT INTO users(username, email, password) VALUES
(?,?,?)`
);
res.status(201).json({message: `Usuario registrado`, userId: result.insertId});
}
catch (err){
res.status(500).json({error: 'Error al registrar usuario', details: err})
};
};

//login del usuario, generamos el jwt
exports.login = async (req, res) =>{

const {email, password} = req.body;

//validación basica
if (!email || !password) {
return res.status(400).json({message: `Email y contraseña son requeridos`})
};

}
