import React, { useEffect } from 'react';
import {
  Dashboard,
  Auth
} from '../components/index'
import { useCookies } from 'react-cookie';
import { useQuery, useReactiveVar } from '@apollo/client';
import { currentUser } from '../apollo/client';
export default function Home() {
  const [cookies, setCookie] = useCookies(['user']);

  const user = useReactiveVar(currentUser);
  useEffect(() => {
    if (cookies.user) {
      currentUser({ ...cookies.user });
    }
  }, []);
  return (
    <div>
      {user && user.userName ? <Dashboard /> : <Auth />}
      {/* <Dashboard /> */}
      {/* <Auth /> */}
      {user && user.userName && !cookies.user ? setCookie('user', JSON.stringify(user)): null}
    </div>
  )
}
