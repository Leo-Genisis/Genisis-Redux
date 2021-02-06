import './categoria.css' 
export default function Categorias() {
    return (
        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 mr-auto">
            <h4>Categorias</h4>
            <ul className="categorias">
                <li >Todos</li>
                <li >Desenvolvimento</li>
                <li >Manutenção</li>
            </ul>
        </div>
    );
}