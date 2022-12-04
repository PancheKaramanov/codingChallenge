import {
    Link
  } from 'react-router-dom';
import {useState, useEffect} from 'react'
import { AnimeQuote } from './AnimeQuote';
import QuoteCard from './QuoteCard';
import Button from '@mui/material/Button'

const RandomQuote = () => {

    const [anime, setAnime] = useState<AnimeQuote | null>(null);
  
    useEffect(() => {
      fetch("https://animechan.vercel.app/api/random")
        .then((res) => res.json())
        .then((data) => {
            setAnime(data);
        });
    }, [])

  return (
    <div className='random-quote'>
      <QuoteCard quote={anime}></QuoteCard>
      <div className='back-link'>
      <Link to="/quotes" className='back-link'>
        <Button variant='contained'>Back</Button>
      </Link>
      </div>
    </div>
  );
};

export default RandomQuote;
