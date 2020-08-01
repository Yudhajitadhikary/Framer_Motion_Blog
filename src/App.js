import React, { useState } from 'react';
import { Route, Switch,useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Author from './components/Author';
import Books from './components/Books';
import Order from './components/Order';
import {AnimatePresence} from 'framer-motion';
import Modal from './components/Modal';
function App() {
  const location=useLocation();
  const [books, setBooks] = useState({ author: "", Books: [] });
  const [showModal,setShowModal]=useState(false);
  console.log(books)
  const addAuthor = (base) => {
    setBooks({ ...books, author:base })
  }
  
  const addBooks = (topping) => {
    let newToppings;
    if(!books.Books.includes(topping)){
      newToppings = [...books.Books, topping];
    } else {
      newToppings = books.Books.filter(item => item !== topping);
    }
    setBooks({ ...books, Books: newToppings });
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <AnimatePresence exitBeforeEnter onExitComplete={()=>setShowModal(false)}>
      <Switch location={location} key={location.key}>
        <Route path="/authors">
          <Author addAuthor={addAuthor} books={books} />
        </Route>
        <Route path="/books">
          <Books addBooks={addBooks} books={books} />
        </Route>
        <Route path="/order">
          <Order books={books} setShowModal={setShowModal}/> 
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;