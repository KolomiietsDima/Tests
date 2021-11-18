import './App.css';
import { React, useState, useEffect } from 'react';
import Auth from './components/Auth';
//import AuthApi from './components/AuthApi';
//import { state } from './components/Authorization';
import Authorization from './components/Authorization';
import Registration from './components/Registration';
import Homepage from './components/Homepage';
export const AuthHeader = () => {

  return { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }

}


export default function App() {

  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setCurrentUser(true);
    }
    else {
      setCurrentUser(false);
    }
  }, []);

  return (
    <div>
      {currentUser ? <Homepage/> : < Auth />}
      <Authorization />
      <Registration />

    </div>
  );
}


