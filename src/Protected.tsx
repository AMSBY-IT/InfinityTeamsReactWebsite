import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

interface ProtectedProps {
  children: ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {


  const isAuth = localStorage.getItem('token');

  return isAuth ? children : <Navigate to='/login' />;
};

export default Protected;
