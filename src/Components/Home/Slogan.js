import {Row,} from 'react-bootstrap';
import './home.css'
function Slogan (){
    return(
        <div>
          <Row>
            <div className="col-lg-10 col-sm-12  mx-auto">
              <h1>Bem vindo a nova central de desenvolvimento tecnológico !!</h1>
            </div>
            <div className="text-center pt-40 mx-auto">
              <p>Aqui você encontrará a aplicações Web, Redes, Banco de dados e muito mais.</p>
              <p>Contando com os melhores desenvolvedores do Brasil</p>   
            </div>
            
          </Row>
          <Row >
            <img  class="displayed" src={require('./logo/logo.png').default} alt="logo"/>
          </Row>
        </div>
    )
}

    

export default Slogan;