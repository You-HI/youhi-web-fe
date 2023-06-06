import request, { getResults } from './config';
import { URLs } from './urls';

// TODO
export const getUser = () => {
  return getResults(request.get(URLs.USER));
};
