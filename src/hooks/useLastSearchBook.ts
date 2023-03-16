import { useDispatch, useSelector } from 'react-redux';
import { addBookToLastSearched } from '../store/actions/lastSearchedBook';

export const useLastSearchBook = () => {
    const dispatch = useDispatch();
    const lastSearchState = useSelector(
        (state: { lastSearchedBook: any }) => state.lastSearchedBook
    );
    const addBookToLastSearcheds = (book: any) => {
        dispatch(addBookToLastSearched(book));
    };
    const lastSearched = lastSearchState?.data ?? "";
    return { addBookToLastSearcheds, lastSearched };
    };

