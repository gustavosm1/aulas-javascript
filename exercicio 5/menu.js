let op;

do {
  op = prompt(
    "Escolha uma opção: \n" + "1.\n" + "2.\n" + "3.\n" + "4.\n" + "5."
  );
  switch (op) {
    case "1":
      alert("Voce escolheu a opção " + op);
      break;
    case "1":
      alert("Voce escolheu a opção " + op);
      break;
    case "2":
      alert("Voce escolheu a opção " + op);
      break;
    case "3":
      alert("Voce escolheu a opção " + op);
      break;
    case "4":
      alert("Voce escolheu a opção " + op);
      break;
    case "5":
      alert("Voce escolheu a opção " + op + "encerrar");
      break;
    default:
      alert("Opçao invalida");
      break;
  }
} while (op !== "5");
