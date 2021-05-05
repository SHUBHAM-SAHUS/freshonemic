import axios from 'axios';

export function signUpRequestUser(payload) {
  console.log('---payload---', payload);
  return (dispatch) => {
    return axios.post('/users/register', { payload }).then((response) => {
      console.log(response);
      dispatch({
        type: 'REGISTER_USER',
        payload: response.data,
      }).catch((err) => {
        console.log(err);
      });
    });
  };
}
