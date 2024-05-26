//import logo from './logo.svg';
import { ToastContainer } from "react-toastify";

import './App.css';

import "font-awesome/css/font-awesome.css";
// import { MeunavBar } from './componentes/MeunavBar';
import "react-toastify/dist/ReactToastify.css";
import { RouteApp } from "./route";
import CarrinhoContextProvider from "./hooks/CarrinhoContext";

//import { Button } from 'bootstrap';
// function App() {
//     return (
//       <div className="App">
//           <MeunavBar />
//       </div>
//     );
//   }

// utilizar contexto provider 

function App() {
    return (
      
    <>
      <CarrinhoContextProvider>
        <ToastContainer />
        <RouteApp />
      </CarrinhoContextProvider>
    </>
    )
}

export default App;


