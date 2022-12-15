import {
  AnyAction,
  combineReducers,
  configureStore,
  MiddlewareArray,
  StoreEnhancer,
  ThunkMiddleware,
} from '@reduxjs/toolkit';
import {CurriedGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {publicationsSlice} from './slices/publicationsSlices';
import {ReduxPersist} from '../interfaces/store/storeInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootPersistConfig: ReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['publications'],
  timeout: null,
};
const redditPersistConfig: ReduxPersist = {
  key: 'reddit',
  storage: AsyncStorage,
  timeout: null,
  whitelist: ['allPublications'],
  blacklist: [''],
};

const rootReducer = combineReducers({
  publications: persistReducer(redditPersistConfig, publicationsSlice.reducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
