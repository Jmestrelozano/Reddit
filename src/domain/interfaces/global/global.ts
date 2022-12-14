import {StatePublicationsSlice} from '../slices/publicationsInterface';

export enum TypeStatus {
  NONE = 'NONE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export interface AppStore {
  publications: StatePublicationsSlice;
}
