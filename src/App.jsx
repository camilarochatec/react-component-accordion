import Accordion from "./components/Accordion";
// Não precisamos mais importar os SVGs para uma variável, 
// pois o Tailwind vai encontrá-los diretamente pelo caminho no className.

const App = () => {
  return (
    // AQUI ESTÁ A VERSÃO CORRETA E MAIS LIMPA
    <div
      className="h-dvh xl:h-screen flex justify-center items-center bg-[#F9F0FF] px-4
                 bg-no-repeat bg-top bg-[length:100%_auto]
                 bg-[url('./assets/background-pattern-mobile.svg')] 
                 lg:bg-[url('./assets/background-pattern-desktop.svg')]"
    >
      
      {/* O componente do Acordeão (o card branco) continua na frente */}
      <div className="z-10">
        <Accordion />
      </div>
      
    </div>
  );
}

export default App;