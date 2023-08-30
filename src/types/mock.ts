import { DefaultBodyType } from 'msw';

export interface MockData {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  status: number;
  response: {
    success: DefaultBodyType;
    failure: DefaultBodyType;
  };
}
