import './App.css';
import Signout from './components/signout/signout';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions={
  particles: {
    number: {
        value: 320,
        density: {
            enable: false
        }
    },
    size: {
        value: 10,
        random: true
    },
    move: {
        direction: "bottom",
        out_mode: "out"
    },
    line_linked: {
        enable: false
    }
},
interactivity: {
    events: {
        onclick: {
            enable: true,
            mode: "remove"
        }
    },
    modes: {
        remove: {
            particles_nb: 10
        }
    }
}
   }

function App() {
  return (
    <div className="App">
    <Particles params={particlesOptions} className='particles'/>
    <Signout/>
    <Logo/>
    <Rank/>
    <ImageLinkForm/>
    
    </div>
  );
}

export default App;
