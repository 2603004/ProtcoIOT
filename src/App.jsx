import './App.css';
import'./index.css';
import Navbar from './components/Navbar';
import Section from './components/section';
import Footer from './components/footer';
function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
