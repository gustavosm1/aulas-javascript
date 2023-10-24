let fila = []
let opcao = ""

do {
  let paciente = ""
  for(i=0; i< fila.length; i++){
    paciente += (i+1) + "° - " + fila[i] + "\n"
  }
  opcao = prompt(
    "Paciente: \n" + paciente +
    "1.Novo Paciente\n" +
    "2.Consultar Paciente\n" +
    "3.Sair"
  )
  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual o nome do paciente?")
      fila.push(novoPaciente)
      break;
    case "2":
      const pacienteConsultado = fila.shift()
      if(pacienteConsultado){
        alert(pacienteConsultado + " foi removido da fila")
      }else{
        alert("Não há pacientes na fila")

      }
      break;
    case "3":
      alert("Saindo...")
      break;
    default:
      ("Opçao Invalida")
  }
} while (opcao !== "3");
