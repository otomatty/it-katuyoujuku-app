import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../../../store/authStore';
import { Container, Avatar, Name, Role, Info } from './UserInfo.styles';
import { getUserGlobalRole } from '../../../services/userService';

const UserInfo: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [globalRole, setGlobalRole] = useState<string>('');

  useEffect(() => {
    const fetchGlobalRole = async () => {
      if (user) {
        const role = await getUserGlobalRole(user.uid);
        setGlobalRole(role);
      }
    };

    fetchGlobalRole();
  }, [user]);

  if (!user) return null;

  console.log('User Info:', user); // Added this line to log the user object to the console

  return (
    <Container>
      <Avatar src={user.photoURL || ''} alt={user.displayName || 'User'} />
      <Info>
        <Name>{user.displayName}</Name>
        <Role>{globalRole}</Role>
      </Info>
    </Container>
  );
};

export default UserInfo;
