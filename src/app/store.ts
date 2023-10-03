import { configureStore } from '@reduxjs/toolkit';
import learningPathReducer from '../features/learning-path/learning-path-slice';
import { apiSlice } from '../features/learning-path/learning-path-api-slice';

export const store = configureStore({
    reducer: {
        learningPath: learningPathReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
