
const { cors } = require('../config')

module.exports = (req, res, next) => {
    const origin = req.headers.origin;
    const allowedOrigins = [
        cors.origin,
        'http://localhost:5173'
    ];

    const cleanOrigin = origin?.replace(/\/$/, '');
    const isAllowed = allowedOrigins.some(o => o?.replace(/\/$/, '') === cleanOrigin);

    if (isAllowed) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS') //Métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization') //Headers permitiidos desde frontend (JSON en body y token de autenticación)
    res.setHeader('Access-Control-Allow-Credentials', 'true') //Permite enviar cookies o tokens en peticiones cross-origin
    
    if (req.method === 'OPTIONS') { //Detecta peticiones OPTIONS (preflight) y responde OK para para que la petición real continúe
        return res.sendStatus(200)
    }
    
    next()
}
