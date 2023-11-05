/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { UseQueryOptions, useQuery } from 'react-query';

import { getUser } from '@/apis/user';

/**
 * 테스트용 쿼리
 */

export const GET_USER_QUERY = 'GET_USER_QUERY';

export const useGetUserQuery = (options?: UseQueryOptions<any, AxiosError>) => {
  return useQuery<any, AxiosError>([GET_USER_QUERY], getUser, options);
};
