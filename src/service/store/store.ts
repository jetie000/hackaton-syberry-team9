import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { reducer as userReducer } from './slices/user.slice'
import { reducer as favoritesReducer } from './slices/favorites.slice'
import { reducer as watchedReducer } from './slices/watched.slice'

const reducers = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userReducer,
  favorites: favoritesReducer,
  watched: watchedReducer
})

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV === "development",
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
