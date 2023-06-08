[Live Site](https://brunooborges.github.io/github-search)

# Questões Teóricas

## 1. O que é autocomplete, autofocus e required nos campos de input?

- O autocomplete, autofocus e required são atributos comumente usados nos campos de input do HTML,
  e que também podem ser usados em aplicações React.

  O atributo autocomplete especifica se um form ou campo de input devem ter a funcionalidade de autocomplete que
  permite que o browser lembre de valores digitados anteriormente e os sugira enquanto o usuário digita.

  O atributo autofocus especifica que um campo de input deverá automaticamente ser focado assim que a página carregar,
  permitindo que o usuário possa digitar sem que ele precise clicar no campo.

  O atributo required especifica que um campo de input precisa ser preenchido antes de enviar um formulário, caso o
  usuário tente enviar sem preenchê-lo o browser exibirá uma mensagem de erro instruindo-o a preencher o campo.

## 2. Qual keyCode do botão ENTER no evento de teclado?

- O keyCode do botão ENTER no evento de teclado é o 13, e é geralmente usado para idenfiticar quando um usurário
  pressionou o botão ENTER.

## 3. Qual a lógica no React para, enquanto estiver carregando algo, bloquear alterações em campos?

- Podemos utilizar o hook **useState** para controlar o estado de loading e adicionamos o atributo **disabled**
  passando o estado de carregamento para ele. Assim ao enviar o formulário, definimos o estado **loading** como
  true que desabilitará o campo através do atributo **disabled**, e uma vez que a ação assíncrona estiver concluída,
  podemos definir o estado **loading** como falso para habilitar novamente o campo.

## 4. Para integração com Github, o que é necessário?

- Para a integração com o Github utilizamos a seguinte URL: 'https://api.github.com' + o endpoint '/search/users'.
  A pesquisa no Github é feita utilizando query parameters.

  Podemos usar a API REST para pesquisar o item específico que desejamos localizar. Por exemplo, podemos encontrar
  um usuário ou um arquivo específico em um repositório. A API REST do GitHub pode fornecer até mil resultados para
  cada pesquisa dependendo das configurações de pesquisa.

  A API REST tem um limite de taxa personalizado para pesquisa. Para solicitações autenticadas, podemos fazer até
  30 solicitações por minuto para os pontos de endpoints de pesquisa, com algumas exceções. Para solicitações
  não autenticadas, o limite de taxa permite que a gente faça até dez solicitações por minuto.

  Para a autenticação devemos gerar um **access token** e incluir o header **Authorization** com o valor
  'Bearer ${accessToken}' na requisição, substituindo o 'accessToken' com o token gerado no Github. Para gerarmos
  um **access token** bastar acessar as configurações da nossa conta no Github e depois acessar as configurações de
  desenvolvedor e seguir as instruções fornecidas lá.

  O Github também recomenda que a gente inclua o header **Accept** com o valor 'application/vnd.github+json'.
