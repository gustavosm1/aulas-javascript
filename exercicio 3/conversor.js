const medida = prompt("Digite uma medida: ");
const unidade = prompt(
  "Deseja converter para qual medida? " +
    "\n1.milimetros(mm)" +
    "\n2.centímetro(cm)" +
    "\n3.decímetro(dm)" +
    "\n4.decâmetro(dam)" +
    "\n5.hectômetro(hm)" +
    "\n6.kilômetro(km)"
);

switch (unidade) {
  case "1":
    alert("Resultado: " + medida * 1000);
    break;
  case "2":
    alert("Resultado: " + medida * 100);
    break;
  case "3":
    alert("Resultado: " + medida * 10);
    break;
  case "4":
    alert("Resultado: " + medida / 10);
    break;
  case "5":
    alert("Resultado: " + medida / 100);
    break;
  case "6":
    alert("Resultado: " + medida / 1000);
    break;
  default:
    alert("Opção Invalida");
}
