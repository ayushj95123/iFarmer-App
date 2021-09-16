// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"

export default function App() {
  return (
    <div className="app">
        <Header/>
        <LandingPage/>
        <Footer/>
    </div>
  );
}

