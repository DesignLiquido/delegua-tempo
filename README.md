# Biblioteca para manipulação de tempo para Delégua e JavaScript

Assim como Delégua é uma variação da linguagem Égua, esta biblioteca é uma variação da biblioteca `tempo` de Égua, com capacidades adicionais de manipulação de segundos, minutos, horas, dias, semanas, meses e anos.

Diferente de Égua, que possui a implementação da respectiva biblioteca de tempo como uma coleção de métodos internos, essa biblioteca é distribuída independentemente da linguagem Delégua. Isso possibilita importar a biblioteca tanto para Delégua quanto para JavaScript. Basta para isso instalar a biblioteca usando o NPM. 

Além disso, [a solução Delégua (linguagem + bibliotecas)](https://github.com/DesignLiquido/delegua-completo) já inclui esta biblioteca. Para importar, basta usar:

```js
var tempo = importar('tempo')
```

## Arquitetura interna

`delegua-tempo` utiliza [Day.js](https://day.js.org) para implementação de recursos internos. O objeto de datas da Day.js é bem mais robusto que o objeto `Date` correspondente do JavaScript, com capacidades para trabalhar com fusos horários, conversão de datas, semanas, e assim por diante.

Esta biblioteca expõe um objeto especial chamado `ObjetoData`. Este objeto encapsula certas propriedades e funções de objetos da Day.js, e pode também ser utilizada para entender como fazer determinadas operações, principalmente em operações de data e usos com fusos horários.

## Modo de uso

Usando [a solução Delégua com todas as bibliotecas](https://github.com/DesignLiquido/delegua-completo), ou ainda usando [Delégua Web](https://designliquido.github.io/delegua-web), importe a biblioteca e use-a da seguinte forma:

```js
var tempo = importar('tempo')
var agora = tempo.agora()
escreva(agora) // Escreve algo como: <objeto-data dia=... mês=... >
```

Neste exemplo, a variável `agora` é um objeto de data com as seguintes propriedades:

```js
escreva(agora.dia) // Escreve o dia na saída padrão
escreva(agora.mes) // Escreve o mês na saída padrão
escreva(agora.ano) // Escreve o ano na saída padrão
escreva(agora.hora) // Escreve a hora na saída padrão
escreva(agora.minuto) // Escreve o minuto na saída padrão
escreva(agora.segundo) // Escreve o segundo na saída padrão
escreva(agora.milissegundo) // Escreve o milissegundo na saída padrão
escreva(agora.diaDaSemana) // Escreve o dia da semana na saída padrão
escreva(agora.semanaDoAno) // Escreve a semana do ano na saída padrão
```