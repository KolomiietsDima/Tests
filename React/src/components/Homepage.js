
import { React} from 'react';
import './Homepage.css';
import HomepageAuth from './HomepageAuth';
import TestPage from './TestPage';
import { Route, Routes } from 'react-router';
import Auth from './Auth';
export default function Homepage(props) {



  return (
    
      <Routes >
        <Route path={'/'} element={<Auth />} />
        <Route path={'/Home'} element={<HomepageAuth />} />
        <Route path={'/Home/Test'} element={<TestPage />} />
      </Routes>

   
  )
}