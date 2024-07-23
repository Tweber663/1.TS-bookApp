import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';

//Action creator
export const useAppDispatch: () => AppDispatch = useDispatch;
//Selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;