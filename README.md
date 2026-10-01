# Conecta Tech — Loja de Eletrônicos e Acessórios

Projeto acadêmico de comércio desenvolvido com HTML, CSS, JavaScript e preparado para PostgreSQL/Supabase.

## Como testar
Abra `index.html` no navegador. A versão entregue funciona em modo demonstração usando dados fictícios e localStorage.

## Estrutura
- `index.html` — página inicial
- `produtos.html` — catálogo, pesquisa e filtros
- `carrinho.html` — carrinho de compras
- `checkout.html` — cadastro do pedido
- `admin.html` — dashboard
- `css/` — estilos
- `js/` — funcionalidades
- `sql/` — banco PostgreSQL
- `docs/` — documentação do modelo e regras

## Supabase
Execute primeiro `sql/schema.sql` e depois `sql/inserts.sql` no SQL Editor do Supabase.

A aplicação também possui `js/supabase.js` como ponto de configuração. A chave `service_role` nunca deve ser colocada no frontend.

## Funcionalidades
- Catálogo de produtos
- Pesquisa
- Filtro por categoria
- Ordenação por preço
- Carrinho com alteração de quantidade
- Checkout
- Registro de pedidos em modo demonstração
- Dashboard com indicadores
- SQL com SELECT, WHERE, JOIN, GROUP BY, HAVING, VIEW, FUNCTION e TRIGGER

Todos os dados de demonstração são fictícios.