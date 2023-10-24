import mongoose  from 'mongoose'
import { Schema } from "mongoose"

const DoacaoDao = new Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    instituicao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instituicao',
        required: true
    },
    nome: {
        type: String
    },
    cpf: {
        type: String
    },
    valor: {
        type: Number
    },
    tipoPagamento: {
        type: String
    },
    numeroDoCartao: {
      type: String
    },
    coigoSeguranca: {
        type: Number
    },
    status: {
        typeof: String
     }

});

export default  mongoose.model("Doacao", DoacaoDao);