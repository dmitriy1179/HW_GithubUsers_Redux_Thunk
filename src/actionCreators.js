export const increment = (delay = 1000) => {
  return (dispatch) => {
    dispatch({ type: "counter/request" });
    setTimeout(() => {
      dispatch({ type: "counter/increment" });
    }, delay);
  };
};

export const decrement = (delay = 1000) => {
  return (dispatch) => {
    dispatch({ type: "counter/request" });
    setTimeout(() => {
      dispatch({ type: "counter/decrement" });
    }, delay);
  };
};

export const reset = (delay = 1000) => {
  return (dispatch) => {
    dispatch({ type: "counter/request" });
    setTimeout(() => {
      dispatch({ type: "counter/reset" });
    }, delay);
  };
};

export const githubUsersFetch = () => {
  return async (dispatch) => {
    dispatch({ type: "request/pending" });
    try {
      const usersJson =  await fetch("https://api.github.com/users");
      if (!usersJson.ok) {
        throw new Error ()
      }
      const usersData = await usersJson.json();
      dispatch({ type: "request/resolved",  payload: usersData })
    }
    catch (error) {
      dispatch({ type: "request/rejected" })
    }
  }
}

export const addUserTop = (user, delay = 3000) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "add_user/top",  payload: user });
    }, delay);
  }
};

export const addUserBottom = (user, delay = 2000) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "add_user/bottom",  payload: user })
    }, delay);
  }
};


