import { combineReducers } from "redux";
const initialCounterState = {
  value: 0,
  isCalculating: false
};

function counterReducer(state = initialCounterState, action) {
  if (action.type === "counter/request") {
    return {
      ...state,
      isCalculating: true
    };
  }
  if (action.type === "counter/increment") {
    return {
      ...state,
      value: state.value + 1,
      isCalculating: false
    };
  }
  if (action.type === "counter/decrement") {
    return {
      ...state,
      value: state.value - 1,
      isCalculating: false
    };
  }
  if (action.type === "counter/reset") {
    return initialCounterState
  }

  return state;
}

const initialGithubUsersState = {
  githubUsersData: null,
  status: "pending"
};

function githubUsersReducer(state = initialGithubUsersState, action) {
  if (action.type === "request/pending") {
    return {
      ...state,
      status: "pending"
    };
  }
  if (action.type === "request/resolved") {
    return {
      ...state,
      githubUsersData: action.payload,
      status: "resolved"
    };
  }
  if (action.type === "request/rejected") {
    return {
      ...state,
      status: "rejected"
    };
  }
  return state;
}

const users = [
  {
    name: "Alex",
    id: 1
  },
  {
    name: "John",
    id: 2
  },
  {
    name: "Bob",
    id: 3
  }
];

const initialUserListState = {
  users: users,
  selectedUser: null
};

function userListReducer (state = initialUserListState, action) {
  if (action.type === "add_user/top") {
    return {
      ...state,
      users: [action.payload].concat(state.users)
    };
  }
  if (action.type === "add_user/bottom") {
    return {
      ...state,
      users: state.users.concat([action.payload])
    };
  }
  if (action.type === "user_list/remove_user") {
    return {
      ...state,
      users: state.users.filter((user) => user.id !== action.payload)
    };
  }
  if (action.type === "user_list/selected_user") {
    return {
      ...state,
      selectedUser: action.payload
    };
  }
  return state
}

export default combineReducers({
  counter: counterReducer,
  githubUsers: githubUsersReducer,
  userlist: userListReducer
});
 