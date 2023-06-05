/* [==] símbolo de igual -> exemplo: 5 == 5 true ,e, 5 == '5' true(com o símbolo de igualdade o JS não vê diferença no tipo)
[===] símbolo de identicos, mesmo valor e tipo -> exemplo: 5 === '5' false ,e, 5 === 5 true
[!==] desigual restrito -> tipos diferentes e o valor interno é o mesmo (NÃO confundir com != que significa diferente)
*/

let numero1 = 1;
let string1 = '1';
let numero30 = 30;
let string30 = '30';
let numero10 = 10;
let string10 = '10';

if (numero1 == string1) {
    console.log('A variáveis ' + numero1 + ' e ' + string1 + ' tem o mesmo valor, mas tipos diferentes');
} else {
    console.log('As variáveis ' + numero1 + ' e ' + string1 + ' não tem o mesmo valor');
}

if (numero30 === string30) {
    console.log("As variáveis " + numero30 + ' e ' + string30 + " tem o mesmo valor e mesmo tipo");
} else {
    console.log('As variáveis ' + numero30 + ' e ' + string30 + ' não tem o mesmo tipo');
}

if (numero10 !== string10) {
    console.log('As variáveis ' + numero10 + ' e ' + string10 + ' tem o mesmo valor, mas tipos diferentes');
} else {
    console.log("As variáveis " + numero10 + ' e ' + string10 + " não tem o mesmo valor");
}
