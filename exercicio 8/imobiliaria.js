const imoveis = []
let opcao = ""

do {
  opcao = prompt("Total de imóveis: " + imoveis.length + "\n1.Salvar imóvel\n2.Exibir imóveis\n3.Sair")
  switch(opcao){
    case "1":
      const imovel = {}
      imovel.proprietario = prompt("Informe o nome do prorpietario:")
      imovel.quatos = prompt("Quantos quartos possuem o imovel:")
      imovel.banheiro = prompt("Quantos banheiros tem o imovel:")
      imovel.garagem = prompt("O imovel possui garagem?(Sim/Não)")

      const confirmacao = confirm(
        "Salvar este imovel?\n" + 
        "\nProprietário:" + imovel.proprietario+
        "\nQuartos:" + imovel.quatos + 
        "\nBanheiros:" + imovel.banheiro + 
        "\nGaragem:" + imovel.garagem 
      )
      if(confirmacao){
        imoveis.push(imovel)
      }
      break

    case "2":
      
      for(let i=0; i<imoveis.length; i++){
        alert(
          "Imóvel: "+ (i+1) +
          "\nProprietário: " + imoveis[i].proprietario + 
          "\nQuartos:" + imoveis[i].quatos +
          "\nBanheiros: " + imoveis[i].banheiro +
          "\nPossui garagem? " + imoveis[i].garagem 
        )
      }
      break
     
    case "3":
      alert("Encerrando")
      break
    default:
      alert("Opção Inválida")    
  }
} while (opcao !== 3);