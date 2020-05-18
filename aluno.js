let cursos=
{
  psicologia: { codigo: 33901, nome: "PSICOLOGIA (FORMACAO DE PSICOLOGO)" }
};

let fones=
{
  tracos: "----",
  fixo,
  movel,
  // tipos
  Residencial,
  Comercial,
  Recado
};

//let tiposLogradouro=

let alunos=
{
  leticiaC2104J5: {
    // pessoais
    nome: "LETICIA CUSTODIO CAVALCANTI",
    pai: "ARISTEU FILGUEIRAS CAVALCANTI",
    mae: "SONIA REGINA C CAVALCANTI",
    sexo: "FEMININO",
    dataNascimento: "03/10/91",
    ufNascimento: "SP",
    naturalidade: '',
    
    documentos: {
      rg: {
        numero: "479147747  SP",
        digito: '',
        orgaoEmissor: '',
        ufOrgaoEmissor: '',
      },
      cpf: "374.134.898-80",
      tituloEleitor: "3855464501-91-0411-0285",
      certMilitar: '',
    }

    // pessoais mutaveis
    telefones: [
      {
        movelOuFixo: "Móvel",
        tipo: "----",
        ddd: 12,
        numero: 987079155,
      },
      {
        movelOuFixo: "Móvel",
        tipo: "----",
        ddd: 12,
        numero: 87079155,
      }
    ],
    email: "leticia_cavalcanty@hotmail.com",
    endereco: {
      cep: "12226-160",
      pais: "Brasil",
      estado: "SÃO PAULO",
      cidade: "São José dos Campos",
      bairro: "NOVA ESPERANÇA",
      tipoLogradouro: "Rua",
      endereco: "R JOSE CASTRIOTO 147 CS 32",
      numero: '',
      complemento: '',
    },

    // academico
    ra: "C2104J5",
    senha: 0310,
    anoConclusãoEnsinoMedio: '',
    cursos: {
      psicologia: {
        codCurso: cursos.psicologia.codigo,
        nomeCurso: cursos.psicologia.nome,
        dataMatricula: "10/01/20",
        situacao: "ATIVO",
        campus: "S J CAMPOS-DUTRA",
        ingresso: "CONCURSO VESTIBULAR",
        periodo: 10,
        turma: "TT0Q48",
        vestibular: "14/1",
      },
    },
  },
};