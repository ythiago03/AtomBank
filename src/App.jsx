import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Products from './components/Products/Products';
import BankApp from './components/BankApp/BankApp';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
 
  return (
    <>
      <Header />
      <Main />
       <Products />
      <BankApp />
      <Newsletter />
      <Footer /> 
    </>
  );
}

export default App;
