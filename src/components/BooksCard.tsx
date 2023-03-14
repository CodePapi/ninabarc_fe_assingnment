import { Button, Card, CardActions, CardHeader } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type Book = {
  title: string;
  author_name: string[];
  coverImage: string;
  key?: string;
};

function BooksCard({ title, author_name, coverImage, key }: Book) {
  return (
    <Card sx={{ maxWidth: 400, height: 250 }}>
      <img src={coverImage} alt={title} className="object-fill h-24 w-96 ." />
      <CardHeader
        className="text-sm font-black"
        title={<span className="text-sm">{title}</span>}
        subheader={<span className="text-xs">{author_name}</span>}
      />
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">
          <FavoriteBorderIcon color="warning" />
        </Button>
      </CardActions>
    </Card>
  );
}

export default BooksCard;
