import axios from 'axios';
import { URL } from '../../config';

export const getSearchDoseManager = async (
  search,
  condition,
  rdOpen,
  rdClose
) => {
  const response = await axios.get(URL + 'dose/getSearchDoseManager', {
    params: {
      txtSearch: search || '',
      showDataFunc: condition,
      rdOpen: rdOpen,
      rdClose: rdClose,
    },
  });
  return response.data;
};
export const getDoseById = async (drugId) => {
  const response = await axios.get(URL + 'dose/getDrugById', {
    params: {
      drugId: drugId,
    },
  });
  return response.data[0];
};
