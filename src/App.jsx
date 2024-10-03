import './App.css';
import'./index.css';
import Navbar from './components/Navbar';
import Section from './components/section';
import Footer from './components/footer';
import Settings from './components/settings';
function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Section/>
      <Footer/>
      <Settings/>
    </div>
  );
}

export default App;
