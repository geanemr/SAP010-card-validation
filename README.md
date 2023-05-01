# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)

***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Neste projeto, foi criado um aplicativo da Web que permite ao usuário
validar o número de um cartão de crédito.  Uma das funcionalidades do site é que ele oculta os dígitos do cartão digitado, exceto os quatro últimos.

O tema ecolhido foi um site de meditações que oferece músicas, histórias para dormir, ASMR e conteúdos para 
praticantes de YOGA. O site possui uma assinatura mensal e oferece um teste gratuito de 7 dias. Para começar
o teste, o usuário deve inserir o número do seu cartão de crédito. Caso os dígitos inseridos pelo usuário
sejam correspondentes ao de um cartão de crédito válido, segundo o Algorítmo de Luhn, o site informará o usuário que trata-se de um cartão válido. Caso contrário, informará que trata-se de um cartão inválido. Caso o usuário não informe nenhum número de cartão de crédito e tente iniciar sua assinatura gratuita clicando no botão "Iniciar período de avaliação",será solicitada a inserção do número do cartão;

Para criação deste projetos, foram trabalhados os fundamentos do JavaScript, incluindo conceitos como variáveis, condicionais e funções, bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS.

### Os objetivos gerais deste projeto foram os seguintes

* Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
* Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
* Aprender sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
* Implementar controle de versão com git (e a plataforma github)

O _boilerplate_ contém esta estrutura:

  * [Site oficial do GitHub Pages](https://pages.github.com/)
