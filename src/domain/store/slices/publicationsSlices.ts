import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Children} from 'react';
import {createdAddaptedPublication} from '../../../adapters/createAddaptedPublication';
import {publicationService} from '../../../data/PublicationsServices/PublicationService';
import {TypeStatus} from '../../interfaces/global/global';
import {
  RedditData,
  StatePublicationsSlice,
} from '../../interfaces/slices/publicationsInterface';

const initialState: StatePublicationsSlice = {
  newPublications: [],
  allPublications: [
    {
      type: 'new',
      data: [],
    },
    {
      type: 'top',
      data: [],
    },
    {
      type: 'hot',
      data: [],
    },
    {
      type: 'controversial',
      data: [],
    },
  ],
  statusPublications: TypeStatus.NONE,
};
export const publicationsSlice = createSlice({
  name: 'publications',
  initialState,
  reducers: {
    setResetDataPublication: state => {
      state.newPublications = [];
    },
    setLoading: (state, action: PayloadAction<TypeStatus>) => {
      state.statusPublications = action.payload;
    },
    setDataPublication: (state, action: PayloadAction<string>) => {
      state.statusPublications = TypeStatus.LOADING;

      state.allPublications.map(p => {
        if (p.type === action.payload.toLowerCase()) {
          console.log(p.data);
          state.newPublications = p.data;
        }
      });
      state.statusPublications = TypeStatus.SUCCESS;
    },
  },
  extraReducers: builder => {
    builder.addCase(publicationService.pending, state => {
      state.statusPublications = TypeStatus.LOADING;
    });
    builder.addCase(
      publicationService.fulfilled,
      (state, action: PayloadAction<{data: RedditData; type: string}>) => {
        if (action.payload.data !== undefined) {
          const publications = action.payload.data.children.map(
            child => child.data,
          );

          const newPublications = publications.map(publication => {
            return createdAddaptedPublication(publication);
          });

          state.newPublications = newPublications;

          state.allPublications.map(p => {
            if (p.type === action.payload.type.toLowerCase()) {
              p.data = newPublications;
            }
          });
          state.statusPublications = TypeStatus.SUCCESS;
        }
      },
    );
    builder.addCase(publicationService.rejected, state => {
      state.statusPublications = TypeStatus.FAILED;
    });
  },
});

export const {setDataPublication, setResetDataPublication, setLoading} =
  publicationsSlice.actions;
