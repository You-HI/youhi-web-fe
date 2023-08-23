import { MockData } from 'src/types/mock';

// 모킹 샘플
const getUser: MockData = {
  url: '/user',
  method: 'get',
  status: 200,
  response: {
    success: {
      total: 2,
      list: ['John', 'Tom'],
    },
    failure: {
      error_code: 'error_code',
      error_message: 'error_message',
    },
  },
};

export { getUser };
