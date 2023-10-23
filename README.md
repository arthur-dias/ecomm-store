# E-commerce Store

Frontend de uma loja de roupas. Feito com [Next.js](https://nextjs.org/), com [Tailwind](https://tailwindcss.com/) e [Shadcn/ui](https://ui.shadcn.com/). Também utiliza [Zustand](https://github.com/pmndrs/zustand) para gerenciamento de estado.

Na loja é possível adicionar e demover items do carrinho e filtrar dentro de cada categoria. Também é possível proceder e finalizar o pagamento via [Stripe](https://stripe.com/).

Frontend para o dashboard feito em https://github.com/arthur-dias/ecomm-admin

---

## Rodando o projeto

- Clonar este repositório
- Na pasta raiz do projeto, no terminal, rodar `npm install`
- Na pasta raiz do projeto, criar um arquivo `.env` e adicionar as seguintes chaves:

```
NEXT_PUBLIC_API_URL=dominio/api/iddasualoja
```

- Com o [dashboard](https://github.com/arthur-dias/ecomm-admin) rodando:
- No terminal do projeto da store, rodar `npm run dev`
- Acessar por http://localhost:3001/

---

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
