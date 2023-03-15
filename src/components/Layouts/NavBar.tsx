import { useState } from 'react';
// components
import { Box, Button, Drawer } from '@mui/material';
import Favorites from '../Utilities/Favourites';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { HomeWorkTwoTone, ClearAll } from '@mui/icons-material';
// hooks
import { useFavorites } from '../../hooks/useFavourite';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const { favorites, clearFavs } = useFavorites();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor: 'right', open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };
  const handleHome = () => {
    navigate('/');
    setState({ ...state, ['right']: false });
  };

  return (
    <section className="sticky top-0 z-50 bg-white shadow-md mb-10">
      <div className="flex flex-row items-center justify-between w-full h-16 bg-gray-900">
        <div className="flex flex-row items-center justify-end  h-full">
          <Button onClick={handleHome}>
            {' '}
            <h3 className="font-black">
              Home <HomeWorkTwoTone fontSize="small" color="warning" />
            </h3>
          </Button>
          <Button onClick={toggleDrawer('right', true)}>
            <h3 className="font-black"> Favs {favorites.length} </h3>
            <FavoriteBorderIcon fontSize="small" color="warning" />
          </Button>
          <Button onClick={clearFavs}>
            <h3 className="font-black">
              {' '}
              Clear Favs <ClearAll fontSize="small" color="warning" />
            </h3>
          </Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer('right', false)}
              onKeyDown={toggleDrawer('right', false)}
            >
              <Favorites />
            </Box>
          </Drawer>
        </div>
      </div>
    </section>
  );
}
