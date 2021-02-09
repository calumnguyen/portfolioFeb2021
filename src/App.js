import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';

function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <div style={{ position: 'absolute' }}>
        <Particles height='100vh' width='100vw' params={particlesConfig} />
      </div>
      <Header />
      <main className='p-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
