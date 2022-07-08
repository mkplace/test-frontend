# Teste técnico para Frontend Developer MKPlace

Neste repositório você encontra o teste técnico utilizado para as nossas vagas de Desenvolvedor(a) Frontend.

Esta avaliação é aplicada para as vagas em todos os níveis - júnior a sênior - mudando os critérios de análise.
Se você for júnior e não conseguir completar o teste, não tem problema. Gostaríamos de avaliar até onde você conseguiu chegar e a lógica que aplicou.

## Instruções

Para realizar este teste, você deverá fazer um fork do repositório.

O protótipo do projeto, bem como os assets, podem ser encontrados neste link: https://www.figma.com/file/neYyxwxoy3mzqjHXJjfif6/Teste-T%C3%A9cnico-Frontend?node-id=51%3A318

## Desafio

Você deverá desenvolver uma aplicação para criar e visualizar listas de compras, contendo as informações básicas e imagens dos produtos selecionados.

## Descrição geral

- Ao abrir a tela, o usuário deverá encontrar um botão para adicionar uma lista de compras.
  Caso já exista alguma lista criada, a mesma deverá aparecer na tela, constando informações de título, quantidade de categorias e quantidade de itens.

  <center><img src="public/img/tela_inicial.png" alt="tela inicial"/></center>

- Ao clicar em _criar uma lista de compras_, o usuário deverá encontrar um formulário de cadastro, contendo os campos:

  - Selecionar uma categoria - traz um select input onde o usuário pode visualizar as categorias existentes e selecionar uma.
  - Selecionar uma sub-categoria - traz um select input onde o usuário pode visualizar as sub-categorias existentes e selecionar uma. _Habilitado apenas se a categoria estiver selecionada_.
  - Nome do produto - input com _autocomplete_. O usuário deve digitar o nome do produto e o input deverá trazer sugestões para o que está sendo escrito.
  - Preço - traz um input onde o usuário deve poder inserir valor do produto.
  - Tipo - traz um select input onde o usuário pode visualizar as unidades de medida do produto e selecionar uma.
  - Quantidade - traz um input onde o usuário deve poder inserir a quantidade de itens que quer adicionar.
  - Campo para upload de imagens - traz um input de _file upload_, onde o usuário poderá inserir uma imagem do produto. _A imagem deverá ter no máximo 1MB_.
  - Botão de submit - o usuário poderá adicionar o item criado.

  _Observação: no mobile, se o usuário estiver na página de criação da lista e clicar em voltar sem ter selecionado a opção de **concluir lista**, um modal deverá ser aberto para que o mesmo confirme a ação._

  <center><img src="public/img/mobile_modal.png" alt="Modal mobile"/></center>

  Assim que o item for cadastrado, este deverá ser listado ao lado esquerdo do formulário - abaixo do card descritivo com título, quantidade de categorias e quantidade de itens existentes - apresentando os detalhes de imagem (se existir), nome, preço e tipo de unidade de medida para o mesmo, bem como o botão de _delete_ alinhado ao lado direito do card.

  ![formulário de criação](public/img/criando_lista.png)

- Ao clicar em _concluir lista_, o usuário deverá visualizar uma tela contendo:
  - Lista dos itens criados, separados de acordo com a categoria.
  - Cada item deverá conter um input do tipo _checkbox_, onde o usuário poderá marcar o item que já adquiriu.
  - Cada item deverá conter um seletor de quantidade, onde o usuário poderá escolher quantos itens gostaria de levar.
  - Cada item deverá conter o valor total para aquele item, de acordo com a quantidade selecionada pelo usuário.
  - Valor total do carrinho, que deverá ser atualizado a cada mudança nas quantidades dos itens na lista.

## Requisitos técnicos para o teste

- O projeto utiliza o React Js como biblioteca para construção das interfaces e Next Js como framework.
- Para o gerenciamento de estados globais você deverá utilizar Context API.
- O uso de Typescript é obrigatório.
- Deixamos a definição e metodologia do CSS a ser utilizada a seu critério, mas por aqui utilizamos o Tailwind como framework.

## Critérios de avaliação

- Arquitetura utilizada.
- Organização do código - legibilidade, usabilidade e manutenibilidade.
- Componentização de código.
- Clean code.
- Histórico de commits.
- Layout responsivo - de acordo com o mockup para mobile.
- Alcance dos objetivos que foram propostos.

## O que seria um diferencial

- Utilização de teste.
- Small commits.
- Ver seu código hospedado na Vercel.

## Submissão do teste

O link do seu repositório deverá ser enviado ao seguinte e-mail:

- amanda.tavares@mkplace.com.br
