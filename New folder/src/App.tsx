import { useEffect, useState } from 'react';
import './App.css';
import QuotesTable from './QuotesTable';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import RandomQuote from './RandomQuote';
import Header from './Header';

function App() {

  const [animes, setAnimes] = useState<any>([]);

  function getQuote () {
    fetch("https://animechan.vercel.app/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data);
      });
  };

  useEffect(() => {
    getQuote()
    
  }, [])

  return (
        <Router>
           <Header></Header>
           <Routes>
                 <Route path='/quotes' element={<div className='wrapper'><QuotesTable quotes={animes} /></div>}></Route>
                 <Route path='/random-quote' element={<div className='wrapper'><RandomQuote /></div>}></Route>
          </Routes>
       </Router>
  );
}

export default App;
