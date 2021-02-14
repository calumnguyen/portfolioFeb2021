import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ConnectScreen from './screens/ConnectScreen';
import { Container } from 'react-bootstrap';
import Particles from 'react-particles-js';
import {
  homeParticlesConfig,
  connectParticlesConfig,
} from './config/particlesConfig';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className='App' style={{ position: 'relative' }}>
          <div style={{ position: 'absolute' }}>
            <Particles
              height='100vh'
              width='100vw'
              params={homeParticlesConfig}
            />
          </div>
          <Header />
          <main className='p-3'>
            <Container>
              <Route path='/' exact component={HomeScreen} />
              <Route path='/connect' exact component={ConnectScreen} />
            </Container>
          </main>

          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
