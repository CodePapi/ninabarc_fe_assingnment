import { useState, KeyboardEvent, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Favorites from '../Utilities/Favourites';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavorites } from '../../hooks/useFavourite';

type Anchor = 'right';

export default function TemporaryDrawer() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleHome = () => {
    navigate('/');
    setState({ ...state, ['right']: false });
  };
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Favorites />
    </Box>
  );

  return (
    <section className="sticky top-0 z-50 bg-white shadow-md mb-10">
      <div className="flex flex-row items-center justify-between w-full h-16 bg-gray-900">
        <div className="flex flex-row items-center justify-end w-1/2 h-full">
          <Button onClick={handleHome}>Home</Button>
          <Button onClick={toggleDrawer('right', true)}>
            Favs {favorites.length}{' '}
            <FavoriteBorderIcon fontSize="small" color="warning" />
          </Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </div>
      </div>
    </section>
  );
}
