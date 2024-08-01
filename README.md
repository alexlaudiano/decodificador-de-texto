# Decodificador de Texto

Aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

## Prévia do Projeto

![image](https://github.com/user-attachments/assets/6bc88a6c-7991-4502-8919-57195b33202a)

## Descrição do Projeto

Este projeto consiste em uma aplicação web que permite a criptografia e descriptografia de textos usando chaves de substituição específicas. As chaves de criptografia utilizadas são as seguintes:

- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

### Exemplo de Conversão

- "gato" => "gaitober"
- "gaitober" => "gato"

## Requisitos

- Deve funcionar apenas com letras minúsculas.
- Não devem ser utilizados letras com acentos nem caracteres especiais.
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

## Funcionalidades

- Campo de inserção de texto para criptografia.
- Campo de inserção de texto para descriptografia.
- Botão para escolher entre criptografar e descriptografar.
- Exibição do resultado na tela.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Executar o Projeto

1. Clone este repositório:
    ```bash
    git clone https://github.com/alexlaudiano/decodificador-de-texto.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd decodificador-de-texto
    ```
3. Abra o arquivo `index.html` no seu navegador.
