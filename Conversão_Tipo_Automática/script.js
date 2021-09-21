/*
Em determinadas operações o JS converte silenciosamente (não aparecendo nenhum erro) o tipo de resultado final da operação, como nos exemplos abaixo.
*/
console.log(5 * null); //Retorna 0
console.log("5" - 3); //Retorna 2
console.log("5" + 1); //Retorna 51
console.log("dois" + "três"); //Retorna NaN (Not a Number)