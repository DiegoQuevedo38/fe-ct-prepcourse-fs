/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let obj = {};
   array = string.split("").sort();

   for (let i=0; i<array.length; i++){
      if (obj[array[i]]){
         obj[array[i]] += 1;
      } else { obj[array[i]] = 1;
      }
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let uppercase = [];
  let lowercase = ''; // crea igual un arreglo
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      uppercase += string[i];
    } else {
      lowercase += string[i];
    }
  }
  return uppercase + lowercase;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let palabra = frase.split(" ");
   let resultado = '';
   for (i=0; i<palabra.length; i++){
      var separado = palabra[i].split("");
      var invertido = separado.reverse();
      resultado = resultado + " " + invertido.join("");
   }
   return resultado.slice(1);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let num = numero.toString().split("").reverse().join("");
   numero = numero.toString();
   if (num === numero){
      return "Es capicua";
   } else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   array = string.split("");
   for (let i=0; i<array.length; i++){
      if (array[i] === "a"){
         array.splice(i, 1);
      } if (array[i] === "b"){
         array.splice(i, 1);
      } if (array[i] == "c"){
         array.splice(i, 1);
      } 
   } string = array.join("");
   return string;
} 


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for (let i=0; i<arrayOfStrings.length - 1; i++){
      for (let j = i + 1; j < arrayOfStrings.length; j++){
         if (arrayOfStrings[j].length < arrayOfStrings[i].length){
            let stringCorto = arrayOfStrings[j]
            arrayOfStrings[j] = arrayOfStrings[i]
            arrayOfStrings[i] = stringCorto
         }
      }
   } return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   array3 = [];
   for (let i=0; i<array1.length; i++){
      if (array2.includes(array1[i])){
         array3.push(array1[i]);
      } 
   } return array3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
