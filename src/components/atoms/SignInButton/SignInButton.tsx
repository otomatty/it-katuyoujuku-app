import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNotificationStore } from '../../../store/notificationStore';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { auth } from '../../../firebase/firebaseApp';
import { saveUserToFirestore, userExists } from '../../../services/userService';

const SignInButton: React.FC = () => {
  const setMessage = useNotificationStore((state) => state.setMessage);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        // ユーザー情報が存在するか確認
        const exists = await userExists(user.uid);
        if (!exists) {
          // ユーザー情報をFirestoreに保存
          await saveUserToFirestore(user);
        }
        setMessage('User signed in successfully', 'success');
        navigate('/dashboard');
      } else {
        setMessage('新規登録をしてください', 'error');
      }
    } catch (error) {
      console.error('Error signing in: ', error);
      setMessage('Error signing in', 'error');
    }
  };

  return <Button onClick={handleSignIn}>Sign In with Google</Button>;
};

export default SignInButton;
