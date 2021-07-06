console.log("Hello world");

// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}






function calcularAlturaTrianguloIso() {
  const input1 = document.getElementById("ladoa");
  const input2 = document.getElementById("ladob");
  const input3 = document.getElementById("ladoc");

  const ladoa = input1.value;
  const ladob = input2.value;
  const ladoc = input3.value;

  const alturaTriangulo = AlturaTrianguloIso(ladoa, ladob, ladoc);
  if ( alturaTriangulo != 0) {
    alert("La altura del triangulo es: "+ alturaTriangulo);
  } else {
    alert("Lo sentimos, pero solo calculamos Triangulos Isosceles, algun lado debe andar mal :D");
  }
  
}

function AlturaTrianguloIso(ladoa, ladob, ladoc) {
  switch(true) {
    case (ladoa == ladob):
      let alturaA = Math.sqrt((ladoa * ladoa) - ((ladob * ladob) / 4));
      return alturaA;
    case (ladoa == ladoc):
      let alturaB = Math.sqrt((ladoa * ladoa) - ((ladoc * ladoc) / 4));
      return alturaB;
    case (ladob == ladoc):
      let alturaC = Math.sqrt((ladob * ladob) - ((ladoc * ladoc) / 4));
      return alturaC;
      default:
      let  altura = 0;
      return altura;
  }
}
