export default class InstituicaoSelecionada {
    constructor(idInstituicao, areaInterese, modalidadeServicoVoluntario, duracaoServico){
        this.instituicao = idInstituicao
        this.areaInterese = areaInterese
        this.modalidadeServicoVoluntario = modalidadeServicoVoluntario
        this.duracaoServico = duracaoServico
        this.status = 'Esperando confirmação'
    
    }
}