import { Button, Card, CardActions, CardHeader } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { DeleteTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks';
import { SearchedBooksType } from '../../Types.d';
import { truncate } from '../../utils/helpers';

function BooksCard({
  title,
  author_name,
  coverImage,
  id,
  deleteFav,
}: SearchedBooksType & { deleteFav?: boolean }) {
  const { addBookToFavs, removeFromFavs } = useFavorites();
  return (
    <Card className="rounded-md shadow-md" sx={{ maxWidth: 600, height: 250 }}>
      <Link to={`${id}`} state={{ coverImage }}>
        <img src={coverImage} alt={title} className="object-fill h-24 w-96 ." />
      </Link>

      <CardActions className="m-0">
        <Link to={`${id}`} state={{ coverImage }}>
          <Button size="small">View</Button>
        </Link>
        {deleteFav ? (
          <Button onClick={() => removeFromFavs(id as string)}>
            <DeleteTwoTone />
          </Button>
        ) : (
          <Button
            onClick={() =>
              addBookToFavs({
                title,
                author_name,
                coverImage,
                id,
                cover_i: undefined,
                seed: [],
              })
            }
            size="small"
          >
            <FavoriteBorderIcon color="warning" />
          </Button>
        )}
      </CardActions>
      <CardHeader
        className="text-sm font-black"
        title={
          <span className="text-sm font-black text-black">
            {truncate(author_name?.toString() ?? '', 10)}
          </span>
        }
        subheader={<span className="text-xs">{truncate(title, 30)}</span>}
      />
    </Card>
  );
}

export default BooksCard;
