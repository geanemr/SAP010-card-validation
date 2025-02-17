# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Testes unitários](#3-testes-unitários)
* [4. Objetivos alcançados](#4-objetivos-alcançados)
* [5. Tecnologias utilizadas](#5-tecnologias-utilizadas)
* [6. Desenvolvedora](#6-desenvolvedora)

***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]);todos os números que ocupam uma posição ímpar (considerando que a contagem começa em 1) devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)


## 2. Resumo do projeto

Neste projeto, foi criado um aplicativo da Web que permite ao usuário validar o número de um cartão de crédito.  Uma das funcionalidades do site é que ele oculta os dígitos do cartão digitado quando se trata de um cartão válido, exceto os quatro últimos dígitos:

![captura de tela do site](src/img/card%20validation.png)

O tema ecolhido foi um site de meditações que oferece músicas, histórias para dormir, ASMR e conteúdos para 
praticantes de YOGA, chamado MediTerapia. O site possui uma assinatura mensal e oferece um teste gratuito de 7 dias. Para começar a validação, o usuário deve inserir o número do seu cartão de crédito. Caso os dígitos inseridos pelo usuário
sejam correspondentes ao de um cartão de crédito válido, segundo o Algorítmo de Luhn, o site informará o usuário que trata-se de um cartão válido. Caso contrário, informará que trata-se de um cartão inválido. Caso o usuário não informe nenhum número de cartão de crédito e tente iniciar sua assinatura gratuita clicando no botão "Iniciar período de avaliação",será solicitada a inserção do número do cartão:

 ![captura de tela do site - insira número](src/img/card%20validation%20-%20insira%20n%C3%BAmero.png) 

Para criação deste projetos, foram trabalhados os fundamentos do JavaScript, incluindo conceitos como variáveis, condicionais e funções, bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS.


## 3. Testes unitários
[✔] Testes realizados com sucesso:
![Alt text](src/img/testes%20unit%C3%A1rios.png)


## 4. Objetivos alcançados

 [✔] Possui uma interface que permite ao usuário validar o número de um cartão de crédito e ocultar o número até os 4 últimos dígitos;

 [✔] Projeto entregue incluindo testes unitários;

 [✔] Projeto entregue livre de erros de eslint;

 [✔] Código entregue no GitHub;

 [✔] Interface implantada usando o GitHub Pages;

 [✔] O README contém uma definição de produto. 
 
 Para acessar o site do projeto, [clique aqui](https://geanemr.github.io/SAP010-card-validation/)


## 5. Tecnologias utilizadas

* [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&link=https)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) 

* [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&link=https)](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps) 

* [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black&link=https)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 

* [![GIT](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white&link=https)](https://git-scm.com/)

* [![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&link=https)](https://github.com/)


## 6. Desenvolvedora

Geane Ramos

[![Github](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https)](https://github.com/geanemr)  [![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://linkedin.com/in/geane-moraes-ramos)](https://www.linkedin.com/in/geane-moraes-ramos/)


