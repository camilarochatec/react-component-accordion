import { useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

const Accordion = () => {
    return (
        <div className="w-[500px] bg-white rounded-3xl p-10 shadow-2xl">
            <h1 className="text-3xl font-bold mb-5 text-indigo-600">FAQs</h1>
            <Option
                titulo={"titulo1"}
                mensagem={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."} />
            <Option
                titulo={"titulo2"}
                mensagem={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."} />
            <Option
                titulo={"titulo3"}
                mensagem={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."} />
        </div>
    );
}

const Option = ({ titulo, mensagem }) => {
    const [show, Setshow] = useState(false);
    function mostrar() {
        Setshow(true);
    }
    function ocultar() {
        Setshow(false);
    }
    return (
        <div>
            <h2 className="flex justify-between items-center text-2xl font-bold">
                {titulo}
                {
                    show ? (<BiMinusCircle onClick={ocultar} />
                    ) : (
                        <BiPlusCircle onClick={mostrar} />
                    )
                }
            </h2>
            <p className={show ? "" : "hidden"}>{mensagem}</p>
        </div>);
}

export default Accordion;