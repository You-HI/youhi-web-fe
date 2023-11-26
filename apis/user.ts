/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { UseQueryOptions, useQuery } from 'react-query';

import request, { getResults } from './config';
import { URLs } from './urls';

// TODO
export const getUser = () => {
  return getResults(request.get(URLs.USER));
};

/**
 * 테스트용 쿼리
 */
export const useGetUserQuery = (options?: UseQueryOptions<any, AxiosError>) => {
  return useQuery<any, AxiosError>(['GET_USER_QUERY'], getUser, options);
};
