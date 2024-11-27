import {combineReducers} from 'redux';
import counter from 'reducer/counter';
import {configureStore, createSelector} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;

export const store = configureStore({
    reducer: rootReducer
});

//useSelector 로 스토어에 접근할 때 필요
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const selectorCount = createSelector(
    [(state: RootState, id: string) => state.counter[id]?.count],
    (count) => count > 0 ? count : 1
);