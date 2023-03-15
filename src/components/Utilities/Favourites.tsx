import { useFavorites } from '../../hooks/useFavourite';
import BooksCard from './BooksCard';

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="flex flex-col items-center justify-center">
      {favorites.map(
        (book: {
          coverImage: string;
          id: string;
          title: string;

          author_name: string[];
        }) => (
          <div
            className="flex flex-col items-center justify-center"
            key={book.id}
          >
            <div className="m-2">
              <BooksCard
                title={book.title}
                author_name={book?.author_name}
                coverImage={book.coverImage}
                key={book.id}
                id={book.id}
                cover_i={undefined}
                seed={[]}
                deleteFav={true}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Favorites;
