import React, { Component } from 'react';
import './App.css';
import Signout from './components/signout/signout';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn  from './components/Signin/Signin';
import Register from './components/Register/Register';
import Clarifai from 'clarifai';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
        'Red Hat Display',
        'Nunito'
    ].join(','),
  },});

 
const app = new Clarifai.App({
    apiKey: '064a3d1a69ea49ef963d2b4446f4854d'
   });

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

class App extends  Component{

    constructor(){

        super();

        this.state = {

            input: '',
            imageUrl: '',
            box: {},
            page: 'signin',
            isSignedIn: false
        }
    }

     onInputChange = (event)=>{

        this.setState({
            input: event.target.value
        });
    }

    calculateFaceBox =(data) =>{
        const clarifai = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('face-image');

        const width = Number(image.width);
        const height = Number(image.height);

        console.log(width)
        console.log(height);

        return{
            bottom_row: height-(clarifai.bottom_row * height),
            left_col : clarifai.left_col * width,
            right_col : width- (clarifai.right_col * width),
            top_row : clarifai.top_row * height
        }

    }



    displayFaceBox =(box) =>{

        console.log(box);
        this.setState({box:box});
    }

    onButtonSubmit = () =>{

        this.setState({imageUrl:this.state.input});

        app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
        .then((res) => this.displayFaceBox(this.calculateFaceBox(res)))
        .catch(err => console.log(err));
    }

    onPageChange = (param) =>{
        if(param === 'signout'){
            this.setState({isSignedIn: false})    
        }
        else if (param === 'home') {
            this.setState({isSignedIn: true})
        }
        this.setState({page: param})
    }

    render(){

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Particles params={particlesOptions} className='particles'/>
    <Signout onPageChange={this.onPageChange} isSignedIn={this.state.isSignedIn}/>
    <Logo/>
    {this.state.page === 'home' ?
    <div>
    <Rank/>
    <ImageLinkForm value={this.state.input} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
    <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
    </div> 
    
     :

    (this.state.page === 'signin' ? 
    
    <SignIn onPageChange={this.onPageChange}/> : <Register  onPageChange={this.onPageChange}/>)

    
}
   
    </div>
    </ThemeProvider>
  );
    }
}

export default App;
