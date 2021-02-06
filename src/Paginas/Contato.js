import {Row, Form} from 'react-bootstrap';
export default function Contato(){

    

    return(

        <Row>

            <div className="col-lg-6 col-md-6 mx-auto">
                <h1>Contato</h1>
                <Form>
                    <Form.Group>
                        <Form.Label >Nome: </Form.Label>
                        <Form.Control id="nome" type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label >Telefone: </Form.Label>
                        <Form.Control id="tel" type="number"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label >Mensagem: </Form.Label><br></br>
                        <textarea id="mensagem" type="text-area"cols="37" rows="10" ></textarea>
                        
                    </Form.Group>
                    
                    <input className="btn bg-dark text-white" type="submit"></input>

                </Form>
    

            </div> 

        </Row>
    
      
    );
}