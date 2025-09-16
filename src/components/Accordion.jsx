import { useState, useEffect } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const Accordion = () => {
  const [fecharTodos, setfecharTodos] = useState(0);

  const botaoFechaTodos = () => {
    setfecharTodos(estadoAnterior => estadoAnterior + 1);
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <FaStar className="text-3xl text-purple-700" />
        <h1 className="text-4xl font-bold text-slate-800">FAQs</h1>
      </div>

      <div>
        {/* Passamos as informações por meio de props, e passamos o 'fecharTodos' para cada Option, É isso que as conecta ao botão. */}
        <Option
          titulo={"What is Frontend Mentor, and how will it help me?"}
          mensagem={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."}
          fecharTodos={fecharTodos}
        />
        <Option
          titulo={"Is Frontend Mentor free?"}
          mensagem={"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing enough content to improve your skills and build a portfolio."}
          fecharTodos={fecharTodos}
        />
        <Option
          titulo={"Can I use Frontend Mentor projects in my portfolio?"}
          mensagem={"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"}
          fecharTodos={fecharTodos}
        />
        <Option
          titulo={"How can I get help if I'm stuck on a challenge?"}
          mensagem={"The best place to get help is inside Frontend Mentor's Discord community. There's a helpful community of developers ready to assist you at any time."}
          fecharTodos={fecharTodos}
        />
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={botaoFechaTodos}
          className="bg-purple-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-900 transition-colors"
        >
          Fechar Todos
        </button>
      </div>
    </div>
  );
};


// O COMPONENTE OPTION.

const Option = ({ titulo, mensagem, fecharTodos }) => {
  const [show, setShow] = useState(false);

  function mostrar() {
    setShow(true);
  }

  function ocultar() {
    setShow(false);
  }

  // O useEffect que "escuta" o sinal do pai para a função "Fechar Todos".
  useEffect(() => {
    if (fecharTodos > 0) {
      ocultar(); // Chamamos sua função original 'ocultar'.
    }
  }, [fecharTodos]);

  // O retorno JSX do componente Option.
  return (
    <div className="py-4 border-b border-gray-200 last:border-b-0">
      <h2 className="flex justify-between items-center text-lg font-semibold text-slate-700">
        {titulo}
        {show ? (
          <BiMinusCircle
            onClick={ocultar}
            className="text-2xl text-purple-700 flex-shrink-0 cursor-pointer"
          />
        ) : (
          <BiPlusCircle
            onClick={mostrar}
            className="text-2xl text-purple-700 flex-shrink-0 cursor-pointer"
          />
        )}
      </h2>
       <div className={`grid transition-all duration-500 ease-in-out ${show ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
            <p className="pt-2 text-slate-500">
                {mensagem}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;