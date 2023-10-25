import { AppProps } from 'next/app';

export interface GlobalStoreState {
  test: boolean; // TODO: 테스트 용도. 추후 제거 필요
}

export interface CustomAppProps extends AppProps {
  globalStoreProps: GlobalStoreState;
}
