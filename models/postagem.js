const mongosse = require('mongoose');
const schema = new mangoose.Schema({
    titulo: {
        type: String,
    },
    texto:{
        type: String,
    },
    dataAlteracao:{
        type: Date,
        default:Date.now()
    },
    autor:{
        type: String
    }
});
const Postagem = mongoose.model('Postagem', schema);
module.exports = Postagem;