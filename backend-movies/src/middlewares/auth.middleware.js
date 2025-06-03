const jwt = require(`jsonwebtoken`);
//Middleware: Verifica que el token JWT sea válido
exports.auntheticateToken = (req, res, next) => {
    const authHeader = req.headers[`authorization`];
    const token = authHeader?.split(` `)[1];

    if (!token) {
        return res.status(401).json({ message: `Token no proporciado` })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, userData) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido o expirado.' });
        }

        req.user = userData;
        next();
    });
};

//Middleware: Verifica que el usuario tenga al menos uno de los roles requeridos 

exports.authorizeRole = (...allowedRoles) => {

    return (req, res, next) => {
        const userRoles = req.user?.roles || [];

        //Verifica si al menos uno de los roles del usuario está en los roles permitidos
        const hashRole = userRoles.some((role) => allowedRoles.includes(role))

        if (!hashRole) {
            return res.status(403).json({ message: `No tenes los permisos necesarios.` })
        }

        next();
    }
}