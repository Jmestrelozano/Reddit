import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchService} from './PublicationService';

export const thunkAsyncService = createAsyncThunk(
  'publications/publicationService',
  (name: string = 'new') => fetchService(name),
);
