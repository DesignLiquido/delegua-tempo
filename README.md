# Biblioteca para manipulação de tempo para Delégua e JavaScript

Assim como Delégua é uma variação da linguagem Égua, esta biblioteca é uma variação da biblioteca `tempo` de Égua, com capacidades adicionais de manipulação de segundos, minutos, horas, dias, semanas, meses e anos.

Diferente de Égua, que possui a implementação da respectiva biblioteca de tempo como uma coleção de métodos internos, essa biblioteca é distribuída independentemente da linguagem Delégua. Isso possibilita importar a biblioteca tanto para Delégua quanto para JavaScript. Basta para isso instalar a biblioteca usando o NPM. 

Além disso, [a solução Delégua (linguagem + bibliotecas)](https://github.com/DesignLiquido/delegua-completo) já inclui esta biblioteca. Para importar, basta usar:

```js
var tempo = importar('tempo')
```

## Arquitetura interna

`delegua-tempo` utiliza [Day.js](https://day.js.org) para implementação de recursos internos. O objeto de datas da Day.js é bem mais robusto que o objeto `Date` correspondente do JavaScript, com capacidades para trabalhar com fusos horários, conversão de datas, semanas, e assim por diante.