import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNotificationStore } from '../../../store/notificationStore';
import { useNavigate } from 'react-router-dom';
import { Button } from './LogoutButton.styles';

const LogoutButton: React.FC = () => {
  const setMessage = useNotificationStore((state) => state.setMessage);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage('User signed out successfully', 'success');
      navigate('/');
    } catch (error) {
      console.error('Error signing out: ', error);
      setMessage('Error signing out', 'error');
    }
  };

  return <Button onClick={handleLogout}>ログアウト</Button>;
};

export default LogoutButton;
