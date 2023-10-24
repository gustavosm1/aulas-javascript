const nome = prompt("Digite seu nome");
let cidades = "";
let qntd = 0;
let aux = prompt("Visitou alguma cidade?");

while (aux === "S") {
  let cidade = prompt("Qual o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  qntd++;
  aux = prompt("Visitou outra cidade? (S/N)");
}

alert(
  "Nome: " +
    nome +
    "\nCidade(s) visitadas: " +
    cidades +
    "\nNumero de cidades visitadas: " +
    qntd
);
