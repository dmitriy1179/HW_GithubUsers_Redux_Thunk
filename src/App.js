import React from 'react';
import './App.css';
import Counter from "./Counter"
import GithubUsers from "./GithubUsers"
import UserList from"./UserList"


function App() {
  return (
    <div className="App">
      <Counter />
      <GithubUsers />
      <div className="mb-4">
        <UserList />
      </div>
    </div>
  );
}

export default App;
