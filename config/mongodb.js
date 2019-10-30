const mongoose = require('mongoose');

function conectaAoMongoDB () {
    mongoose.connect(
        'mongodb://webuser:web12345@ds135128.mlab.com:35128/aula-web',
        { useUnifiedTopology: true, useNewUrlParser: true}
    );

    const db = mongoose.connection;
    db.on('erro', (error)=>console.error('error:',erro));
    db.once('open',()=>consele.info('mongDB conectado'));
    module.exports = conecta;
}