# ignite-shop
Desafio proposto pela trilha React do curso Ignite para complementar um carrinho no e-commerce desenvolvido nas aulas para o checkout no Stripe.
Desenvolvido com Next + React + Typescript.

# Sobre o desafio
Com a aplicação que já desenvolvemos na trilha implementei um carrinho que utilizará os dados da API do Stripe para buscar os itens existentes, e controlará, através da sua aplicação, o número de itens que a pessoa deseja comprar.

- Utilizei a listagem já criada pela aplicação, mas adicionei a possibilidade de adicionar aquele item ao carrinho na página do produto.
- Salvar todos os itens selecionados em sua aplicação, e exibir o número de itens no carrinho
- Enviar o carrinho que você armazenou na aplicação para a rota de checkout, onde irá gerar a sessão de checkout com os ``line_items`` necessários.

Para completar esse desafio precisei realizar algumas pesquisas para entender sobre a API do Stripe.

# Desenvolvendo

Para armazenar os itens no carrinho, utilizei a biblioteca *use-shopping-cart* que já possui diversas facilitações para essa lógica.
