import mongoose  from 'mongoose'
import { Schema } from "mongoose"

const InstituicaoSelecionadaDao = new Schema({

   instituicao: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instituicao',
      required: true
  },
   areaInterese :{
    type: String
   },
   modalidadeServicoVoluntario:{
    type: String
   },
   duracaoServico: {
    type: String
   },
   status: {
      typeof: String
   }
});

export default  mongoose.model("InstituicaoSelecionada", InstituicaoSelecionadaDao);