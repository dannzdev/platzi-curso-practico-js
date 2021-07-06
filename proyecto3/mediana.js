function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [
    1500,
    300,
    800,
    10,
    5,
    100,
    200,
    500,
    400000000,
  ];

  function calcularMediana(lista) {
    lista.sort(function(a, b) {
        return a - b;
      });
    const mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
      
        const promedioElemento1y2 = calcularMediaAritmetica([
          elemento1,
          elemento2,
        ]);
        
        mediana = promedioElemento1y2;
      } else {
        mediana = lista[mitadLista];
      }
      return mediana;
  }
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  
  