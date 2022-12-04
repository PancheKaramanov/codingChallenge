import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect, FC} from 'react'
import { AnimeQuote } from './AnimeQuote';

interface Props {
  quotes: AnimeQuote[] | null
}

const QuotesTable: FC<Props> = ({quotes}) => {

  const [age, setAge] = useState<any>([])

  useEffect(() => {
    getAge()
  })

  function getAge() {
    quotes?.forEach(quote => {
      fetch(`https://api.agify.io/?name=${quote.character.split(' ')[0]}`)
      .then((res) => res.json())
      .then((data: any) => {
        age.push(data.age)
      });
    });
  }

    return (
      <div className='table-wrapper'>
        <TableContainer className='table' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Quote</TableCell>
              <TableCell align="left">Anime</TableCell>
              <TableCell align="left">Character</TableCell>
              <TableCell align="left">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotes?.map((row: AnimeQuote, index: number) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index+1}
                </TableCell>
                <TableCell align="left">{row.anime}</TableCell>
                <TableCell align="left">{row.character}</TableCell>
                <TableCell align="left">{row.quote}</TableCell>
                <TableCell align="left">{age[index] > 50 ? '🧒' : '🧓'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
  }

  export default QuotesTable;