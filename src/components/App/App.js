import React from 'react';

import './App.css';
import TopNav from '../topNav/TopNav';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import RowBody from '../RowBody/RowBody';
import Client from '../Client/Client';
import Footer from '../Footer/Footer';
import Coppyright from '../Coppyright/Coppyright';
function App() {
  return (
    <div className="App">
      <TopNav/>
      <div className="container">
        <div id="gototop">
        </div>
        <Header/>
        
Navigation Bar Section 
        <Navbar/>
       
        
Body Section 

        <RowBody/>
        
Clients 

       <Client/>
        
Footer

        <Footer/>
      </div>
       
      <Coppyright/>
    </div>
  );
}

export default App;
