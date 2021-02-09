import {lazy, Suspense } from 'react';
import {Row} from 'react-bootstrap';


const Slogan = lazy(() => import('../Components/Home/Slogan'));
const Footer = lazy(() => import ('../Components/Footer/footer'));

export default function Home(){
    return(
        <div>
          <Row>
            <Suspense fallback={<p>Cerregando... </p>}>
              <Slogan />
            </Suspense>
          </Row>
          <Row>
            <Suspense fallback={<p>Carregando... </p>}>
              <Footer />
            </Suspense>
            
          </Row>

        </div>
        
       
    );
}