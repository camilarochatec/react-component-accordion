# Componente Acordeão de FAQ ✨
## 📖 Sobre o Projeto
Olá, td bem? Vamos dar uma olhadinha no meu projeto?
Este projeto é uma solução para o desafio ["FAQ accordion"](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz) da plataforma Frontend Mentor. O objetivo foi construir um componente de perguntas frequentes (FAQ) que fosse interativo, responsivo e visualmente idêntico ao design proposto, utilizando as melhores práticas do ecossistema React.

O resultado é um componente React limpo, reutilizável e totalmente estilizado com Tailwind CSS, demonstrando uma abordagem moderna para o desenvolvimento frontend.

-----

### Screenshot do Projeto

![Image](https://github.com/user-attachments/assets/dfd29fe4-e9b6-41aa-a572-d4b888fb636a)

-----

## 🚀 Veja o Projeto Ao Vivo

### **[Clique aqui para ver a demonstração](react-component-accordion.vercel.app)**

-----

## 💻 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

  * **React.js:** Para a construção da interface de usuário baseada em componentes.
  * **Vite:** Como ferramenta de build, proporcionando um ambiente de desenvolvimento extremamente rápido e otimizado.
  * **Tailwind CSS:** Para a estilização, utilizando uma abordagem *utility-first* que permite criar designs complexos e responsivos diretamente no JSX.
  * **React Icons:** Para a utilização de ícones vetoriais de forma simples e eficiente.

-----

## ✨ Funcionalidades

  * **Acordeão Interativo:** Os usuários podem clicar em uma pergunta para expandir e ver a resposta, e clicar novamente para recolhê-la.
  * **Múltiplas Abas Abertas:** Permite que várias perguntas estejam abertas simultaneamente.
  * **Botão "Fechar Todos":** Uma funcionalidade adicional que permite ao usuário recolher todas as respostas abertas com um único clique.
  * **Layout Totalmente Responsivo:** O componente se adapta perfeitamente a qualquer tamanho de tela, desde smartphones pequenos até desktops largos.

-----

## 🧠 Desafios e Aprendizados

Este projeto, embora pareça simples, ofereceu excelentes oportunidades de aprendizado e reforço de conceitos-chave do React:

1.  **Gestão de Estado e Comunicação entre Componentes:**
    O maior desafio foi implementar a funcionalidade "Fechar Todos". A lógica inicial, onde cada item do acordeão (`Option`) controlava seu próprio estado (`useState`), impedia que o componente pai (`Accordion`) os controlasse. A solução foi "elevar o estado" de forma inteligente: cada `Option` manteve seu estado local, mas passou a "escutar" um "sinal" enviado pelo pai através de `props` e do hook `useEffect`. Isso me permitiu forçar o fechamento de todos os filhos a partir de uma ação no pai, aprofundando meu entendimento sobre fluxo de dados e comunicação entre componentes em React.

2.  **Estilização Responsiva e Mobile-First:**
    Garantir a fidelidade ao design em telas pequenas foi um foco crucial. O desafio era evitar que o cabeçalho (com título e ícone grandes) "estourasse" o layout em viewports estreitas.

3.  **Debugging de Layout em CSS:**
    Durante o desenvolvimento, enfrentei um bug de centralização em dispositivos móveis. Utilizando uma técnica de debug visual (adicionando bordas coloridas temporárias aos contêineres), identifiquei que um conflito entre `w-full` e uma margem (`mx-4`) no componente filho estava causando um *overflow*. Este processo reforçou a importância de entender como as propriedades de layout do CSS (padding, margin, width) interagem e como depurar problemas de forma metódica.

-----

## ⚡ Como Executar

Para rodar este projeto localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/camilarochatec/react-component-accordion.git

# 2. Navegue até a pasta do projeto
cd react-component-accordion

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) (ou a porta indicada no seu terminal) para ver o projeto em execução.

-----

## 📬 Contato

**Camila Rocha**

  * **LinkedIn:** (https://www.linkedin.com/in/camilarochatec/)

Obrigado pela visita! 👋
-----



