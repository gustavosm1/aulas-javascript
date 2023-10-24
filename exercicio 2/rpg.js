const p1 = prompt("Digite o nome do 1° personagem");
const atq = parseFloat(prompt("Digite o poder de ataque do 1° personagem"));

const p2 = prompt("Digite o nome do 2° personagem");
const def = parseFloat(prompt("Digite o poder de defesa do 2° personagem"));
const pontosDeVida = parseFloat(
  prompt("Digite a vida de defesa do 2° personagem")
);
const escudo = prompt("O personagem possui escudo?");

let dano = 0;

if (atq > def && escudo === "N") {
  dano = atq - def;
} else if (atq > def && escudo === "S") {
  dano = (atq - def) / 2;
} else {
  dano = 0;
}
pontosDeVida -= dano;

alert(p1 + " causou " + dano + " pontos de dano em " + p2);
