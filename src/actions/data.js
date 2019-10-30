// import 'regenerator-runtime/runtime';

export const addData = data => ({
  type: 'ADD_DATA',
  data
});
export const addDataToState = values => {
  return {
    type: 'USER_ADDED',
    payload: values
  };
};
export const addToDatabase = async values => {
  try {
    const body = JSON.stringify(values);
    const config = {
      headers: { 'Content-Type': 'application/json' },
      METHOD: 'POST',
      body
    };
    const response = await fetch(
      'https://us-central1-form-adder.cloudfunctions.net/users',
      config
    );
    return response.data;
  } catch (error) {
    return {
      type: 'FETCH_ERROR',
      data: error.toString()
    };
  }
};
