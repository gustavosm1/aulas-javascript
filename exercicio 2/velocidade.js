const v1 = prompt("Nome do veiculo 1: ");
const velo1 = parseFloat(prompt("Digite a velocidade do veiculo 1:"));

const v2 = prompt("Nome do veiculo 2: ");
const velo2 = parseFloat(prompt("Digite a velocidade do veiculo 2:"));

if (v2 > v1) {
  prompt(v1 + " é mais rapido do que " + v2);
} else if (v1 > v2) {
  prompt(v2 + " é mais rapido do que " + v1);
} else {
  alert("As velocidades sao iguais");
}
