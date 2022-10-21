# Exercício 3

Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

Exemplo:

```jsx
const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false*/


Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:
```
a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

- Janeiro: R$ 5.784,50
- Fevereiro: R$ 3.418,41
- Março: R$ 4.124,10
- Abril: R$ 1.874,00
- Maio: R$ 7.000,00
- Junho: R$ 9.450,00
d)  Desconto do INSS 5% do salário

Calcule:
O salário fixo mais o auxílio creche

Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)