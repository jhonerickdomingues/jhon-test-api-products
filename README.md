# Aplicação teste de produtos

Back-end da [Loja de produtos](http://jhon-test-app-products.jhonerick.me).

## Exemplos:

- [Aplicação Front online](http://jhon-test-app-products.jhonerick.me)
- [Aplicação Back online](http://jhon-test-api-products.jhonerick.me)
- [Storybook components](http://jhon-test-design-system.jhonerick.me/?path=/docs/ds-layout--docs)

## Instalação

Instale as dependencias

```bash
  npm install
```

Crie um arquivo chamado ".env" com conteudo de ".env.example" e coloque suas configurações do MariaDB:

```bash
  cp .env.example .env
```

Após configurar o ".env" com suas variaveis, rode as migrations e o seed

```bash
  npm run run:migrations
  npm run run:seed
```

Rode o projeto

```bash
  npm run dev
```

#### Abaixo segue uma imagem da arquitetura:

![App Screenshot](https://uploaddeimagens.com.br/images/004/649/952/original/Diagrama_sem_nome.drawio.png?1698444190)
