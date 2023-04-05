import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { latestApi } from '../../../apis/movieApi';

const useLatestMovie = () => {
  return useQuery('latestMovie', latestApi);
};

export default useLatestMovie;
