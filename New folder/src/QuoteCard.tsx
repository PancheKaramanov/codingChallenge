import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC, useEffect, useState } from 'react';
import { AnimeQuote } from './AnimeQuote';

interface Props {
  quote: AnimeQuote | null
}

const BasicCard: FC<Props> = ({quote}) => {

  return quote ? (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {quote.quote}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Anime: {quote.anime}
      </Typography>
      <Typography variant="body2">
      Character: {quote.character}
        <br />
      </Typography>
    </CardContent>
  </Card>
  ) : (<h2>Loading...</h2>);
}

export default BasicCard;