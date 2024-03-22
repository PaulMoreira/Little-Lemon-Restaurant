import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
