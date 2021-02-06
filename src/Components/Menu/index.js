import {Navbar,Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

function BaseMenu(props){
    const {location} = props
    return(
        <Navbar className="navbar-dark" bg="dark" expand="lg" fixed="top">
          <Navbar.Brand>
             Genisis
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="item-menu"/>
          <Navbar.Collapse id="item-menu">
            <Nav activeKey={location.pathname}>
            <Nav.Item>
                <Nav.Link as={Link} href="/" to="/"> 
                  Pagina Inicial 
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link as={Link} href="/produtos" to="/produtos">
                  Produtos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="/servicos" to="/servicos"> 
                  Servicos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="/sobrenos" to="/sobrenos">
                  Sobre Nós
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} href="/contato" to="/contato">
                  Contato
                </Nav.Link>
              </Nav.Item>             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

const Menu = withRouter(BaseMenu);

export default Menu;
