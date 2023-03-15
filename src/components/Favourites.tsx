import { Button } from '@mui/material';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';
import { useFavorites } from '../hooks/useFavourite';

function Favorites() {
  const { favorites, removeFromFavs } = useFavorites();

  return (
    <div className="flex flex-col items-center justify-center">
      {favorites.map(
        (book: {
          coverImage: string;
          id: Key | null | undefined;
          title:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
          author_name:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        }) => (
          <div
            className="flex flex-col items-center justify-center"
            key={book.id}
          >
            <h6 className="text-lg font-bold">{book.title}</h6>
            <p className="text-sm">{book.author_name}</p>
            <img src={book.coverImage} alt="book cover" className="w-30 h-20" />
            <Button
              onClick={() => removeFromFavs(book.id as string)}
              variant="contained"
              color="primary"
            >
              Remove from Favorites
            </Button>
          </div>
        )
      )}
    </div>
  );
}

export default Favorites;
