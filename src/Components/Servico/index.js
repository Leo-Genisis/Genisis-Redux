import './Produto.css'
export default function Servico(props){
    function show_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility= "initial";
    }
    
    function hide_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility= "hidden";
    }

    return(
        <figure className={props.categoria + "servico col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"}
         onMouseOver={show_info} onMouseOut={hide_info}>
           <img src={require(`./img/${props.img}`).default} alt="Imagem do servico"/>
            <figcaption>
                <p className="nome-serv">
                    {props.nome}
                </p>
                <p className="preco-serv">
                 R$   {props.preco}
                </p>
                <button>Comprar</button>
            </figcaption>
        </figure>
    );
}
