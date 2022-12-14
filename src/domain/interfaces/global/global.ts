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

export type RootStackParamList = {
  Publications: undefined;
  WebViewDetails: {url: string};
};

export type RootStackTabParamList = {
  New: undefined;
  Top: undefined;
  Hot: undefined;
  Controversial: undefined;
};
