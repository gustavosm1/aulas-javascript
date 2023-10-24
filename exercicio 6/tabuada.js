const num = prompt("Informe um numero: ");
let res = "";

for (let i = 1; i <= 4; i++) {
  res += " -> " + num + " * " + i + " = " + num * i + "\n";
}

alert("Resultado da tabuada de: " + num + ":\n\n" + res);
