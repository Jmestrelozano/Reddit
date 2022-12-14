import {createAsyncThunk} from '@reduxjs/toolkit';
import {BaseURL} from '../../presentation/global/global';

export const publicationService = createAsyncThunk(
  'publications/publicationService',
  async (name: string = 'new') => {
    const url = `${BaseURL}/${name}`;
    const response = await fetch(url);
    const result = await response.json();

    return result.data;
  },
);
