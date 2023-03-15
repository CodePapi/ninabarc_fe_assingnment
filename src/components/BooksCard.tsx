import { Button, Card, CardActions, CardHeader } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavourite';

type Book = {
  title: string;
  author_name: string[];
  coverImage: string;
  key?: string;
  id: string;
};

function BooksCard({ title, author_name, coverImage, key, id }: Book) {
  const { addBookToFavs } = useFavorites();
  return (
    <Card sx={{ maxWidth: 400, height: 250 }}>
      <img src={coverImage} alt={title} className="object-fill h-24 w-96 ." />
      <CardHeader
        className="text-sm font-black"
        title={<span className="text-sm">{title}</span>}
        subheader={<span className="text-xs">{author_name}</span>}
      />
      <CardActions>
        <Link to={`${id}`} state={{ coverImage }}>
          <Button size="small">View</Button>
        </Link>
        <Button
          onClick={() =>
            addBookToFavs({ title, author_name, coverImage, key, id })
          }
          size="small"
        >
          <FavoriteBorderIcon color="warning" />
        </Button>
      </CardActions>
    </Card>
  );
}

export default BooksCard;
