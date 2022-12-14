import {AsyncStorageStatic} from '@react-native-async-storage/async-storage';

export interface ReduxPersist {
  key: string;
  storage: AsyncStorageStatic;
  timeout: any;
  whitelist?: string[];
  blacklist?: string[];
}
