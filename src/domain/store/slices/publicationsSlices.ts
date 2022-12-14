import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Children} from 'react';
import {createdAddaptedPublication} from '../../../adapters/createAddaptedPublication';
import {publicationService} from '../../../data/PublicationsServices/PublicationService';
import {TypeStatus} from '../../interfaces/global/global';
import {
  Publication,
  RedditData,
  StatePublicationsSlice,
} from '../../interfaces/slices/publicationsInterface';

const initialState: StatePublicationsSlice = {
  newPublications: [],
  hotPublications: [],
  popularPublications: [],
  topPublication: [],
  statusPublications: TypeStatus.NONE,
};
export const publicationsSlice = createSlice({
  name: 'publications',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(publicationService.pending, state => {
      state.statusPublications = TypeStatus.LOADING;
    });
    builder.addCase(
      publicationService.fulfilled,
      (state, action: PayloadAction<RedditData>) => {
        if (action.payload !== undefined) {
          const publications = action.payload.children.map(child => child.data);

          const newPublications = publications.map(publication => {
            return createdAddaptedPublication(publication);
          });

          state.newPublications = newPublications;
          state.statusPublications = TypeStatus.SUCCESS;
        }
      },
    );
    builder.addCase(publicationService.rejected, state => {
      state.statusPublications = TypeStatus.FAILED;
    });
  },
});
