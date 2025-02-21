# Credit Card Validation

## Index

- [1. Introduction](#1-introduction)
- [2. Project Summary](#2-project-summary)
- [3. Unit Tests](#3-unit-tests)
- [4. Achieved Goals](#4-achieved-goals)
- [5. Technologies Used](#5-technologies-used)
- [6. Developer](#6-developer)

---

## 1. Introduction

The [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm), also known as the mod 10 algorithm, is a checksum formula used to validate identification numbers such as mobile phone IMEIs, credit card numbers, etc.

This algorithm is simple. We take the reverse of the number to be verified (which contains only digits [0-9]); all numbers in even positions must be multiplied by two; if the resulting number is 10 or greater, we must sum its digits; the number will be valid if the final sum of its digits is a multiple of 10.

![Luhn algorithm diagram](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Project Summary

In this project, a web application was created that allows users to validate a credit card number. One of the site's features is that it hides the entered card digits when the card is valid, except for the last four digits:

![Website screenshot](src/img/card%20validation.png)

The chosen theme was a meditation website called MediTerapia, which offers music, bedtime stories, ASMR, and content for yoga practitioners. The site has a monthly subscription and offers a 7-day free trial. To start validation, the user must enter their credit card number. If the entered digits correspond to a valid credit card according to the Luhn Algorithm, the site will inform the user that it is a valid card. Otherwise, it will indicate that it is an invalid card. If the user does not enter a credit card number and tries to start their free trial by clicking the "Iniciar período de avaliação"(Start Trial Period) button, they will be prompted to enter their card number:

![Website screenshot - enter number](src/img/card%20validation%20-%20insira%20n%C3%BAmero.png)

For this project, JavaScript fundamentals were explored, including concepts such as variables, conditionals, and functions, as well as events and basic DOM manipulation, along with HTML and CSS fundamentals.

## 3. Unit Tests

- [x] Successfully completed tests:
      ![Alt text](src/img/testes%20unit%C3%A1rios.png)

## 4. Achieved Goals

- [x] Provides an interface that allows the user to validate a credit card number and mask all but the last four digits;
- [x] Project delivered with unit tests;
- [x] Project free of eslint errors;
- [x] Code available on GitHub;
- [x] Interface deployed using GitHub Pages;
- [x] README contains a product definition.

To access the project site, [click here](https://geanemr.github.io/SAP010-card-validation/)

## 5. Technologies Used

- [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&link=https)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

- [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&link=https)](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)

- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black&link=https)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [![GIT](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white&link=https)](https://git-scm.com/)

- [![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&link=https)](https://github.com/)

## 6. Developer

Geane Ramos

[![Github](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https)](https://github.com/geanemr) [![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://linkedin.com/in/geane-moraes-ramos)](https://www.linkedin.com/in/geane-moraes-ramos/)
