// import logo from './logo.svg';
import './App.scss';
import Footer from './components/Footer';
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"

export default function App() {
  return (
    <div className="app">
       <Header/>
      <h1 className="header header-h1 app-header">Precision Agriculture: A framework for developing an Automated Agriculture Decision Support System</h1>
       
        <LandingPage/>
        <Footer/>
       
    </div>
  );
}

