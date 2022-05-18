export const fetchPhoto = async () => {
  try {
    const res = await fetch('https://api.unsplash.com/photos/random', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Client-ID SZMpmllSqXwekaJb0MR0VZKpJfbuig-y41zoJrJoIWU',
      },
    });
    const jsonResult = await res.json();
    if (!res.ok) {
      const err = new Error(jsonResult.errors[0]);
      err.response = res;
      err.status = res.status;
      throw err;
    }
    return jsonResult;
  } catch (err) {
    console.log('Error', err);
  }
};

export const addToLocalStorage = (key, value) => {
  try {
    const stringVal = JSON.stringify(value);
    window.localStorage.setItem(key, stringVal);
  } catch (err) {
    console.log('Error:', err);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const stringVal = window.localStorage.getItem(key);
    return JSON.parse(stringVal);
  } catch (err) {
    console.log('Error:', err);
  }
};
