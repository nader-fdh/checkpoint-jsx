import logo from './logo.svg';
import './App.css';
import img from './image.jpg' ;

function App() {
  return (
    <div className="container">
      <div style={{border:'solid 1px black',maxwidth:'100vw'}}>

      <h1 className='title red'>Your name here</h1>

      <br/>


  <img src="téléchargement.jpg" alt="aa" />

  <br/>

  <img src={img} alt="aa" />

  </div>

  <video width="320" height="240" controls>

  <source src="myVideo.mp4" type="video/mp4"/> 

  </video>
</div>
  );
}

export default App;
