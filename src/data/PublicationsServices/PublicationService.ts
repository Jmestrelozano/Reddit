import {createAsyncThunk} from '@reduxjs/toolkit';
import {BaseURL} from '../../presentation/global/global';

export const publicationService = createAsyncThunk(
  'publications/publicationService',
  (name: string = 'new') => fetchService(name),
);

export const fetchService = async (name: string) => {
  const url = `${BaseURL}/${name.toLowerCase()}`;
  const response = await fetch(url);
  const result = await response.json();

  return {data: result.data, type: name};
};
