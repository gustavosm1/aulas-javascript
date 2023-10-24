const vagas = []

function listarVagas(){
  const vagasEmTexto = vagas.reduce(function(textofinal, vaga, indice){
    textofinal+=indice + ". "
    textofinal+=vaga.nome
    textofinal+= " (" + vaga.candidatos.length + " candidatos)"
  }, "")
  alert(vagasEmTexto)
}

function novaVaga(){
  const nome = prompt("Informe uma nova vaga")
  const descricao = prompt("Informe uma nova descricao")
  const datalimite = prompt("Informe uma nova data limite para a vaga")

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n"+
    "Nome: " + nome + "\nDescriçao: " + descricao + "\nData limite: " + datalimite
  )
  if(confirmacao){
    const novaVaga = {nome, descricao, datalimite, candidatos: []}
    vagas.push(novaVaga)
    alert("Vaga criada!")
  }
}

function exibirVaga(){
  const indice = prompt("Informe o indice da vaga que deseja exibir: ")
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function(textofinal, candidato){
    return textofinal + "\n - " + candidato
  }, "")

  alert("Vaga n° " + indice + 
        "\nNome: " + vaga.nome + 
        "\nDescriçao: " + vaga.descricao +
        "\nData limite" + vaga.datalimite + 
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos na vaga: "+ candidatosEmTexto
  )
}

function inscreverCandidato(){
  const candidato = prompt("Informe nome do candidato:")
  const indice = prompt("Informe o indice da vaga que o candidato quer se inscrever:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga" + indice + "?\n"+
    "Nome: "+ vaga.nome + "\nDescricao: " + vaga.descricao + "\nData limite: " +vaga.datalimite
  )
  if(confirmacao){
    vaga.candidato.push(candidato)
    alert("Inscricao realizada ")
  }
}

function excluirVaga(){
  const indice = prompt("Informe o indice da vaga: ")
  const vaga= vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: "+ vaga.nome + "\nDescricao: " + vaga.descricao + "\nData limite: " +vaga.datalimite
  )
  if(confirmacao){
    vagas.splice(indice, 1)
    alert("Vaga excluida")
  }
}

function exibirMenu(){
  const opcao = prompt(
    "Cadastro de vagas de Emprego"+
    "\n\nEscolha uma das opçoes abaixo:" + 
    "\n1.Listar vagas disponiveis" + 
    "\n2.Criar nova vaga" +
    "\n3.Visualizar uma vaga" +
    "\n4.Inscrever um candidato" +
    "\n5.Excluir uma vaga" + 
    "\n6.Sair"
  )
  return opcao
}

function executar(){
  let opcao = ""
  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break;
      case "2":
        novaVaga()
        break;
      case "3":
        exibirVaga()
        break;
      case "4":
        inscreverCandidato()
        break;
      case "5":
        excluirVaga()
        break;        
      case "6":
        alert("Saindo...")
        break;
      default:
        alert("Opção invalida")
        break;
    }
  } while (opcao!==6);
}

executar()