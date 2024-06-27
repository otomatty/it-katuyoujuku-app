import React, { useState } from 'react';
import {
  Container,
  Title,
  Form,
  Input,
  Button,
  Label,
} from './InitialSetupPage.styles';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { signInWithGoogle } from '../../api/googleCalendarApi';

const InitialSetupPage: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleGoogleCalendarAuth = async () => {
    await signInWithGoogle();
  };

  const handleGoogleChatAuth = async () => {
    // Google Chat API認証のロジックをここに追加
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: profileImage ? URL.createObjectURL(profileImage) : undefined,
      });
    }
    // コミュニティ設定の保存ロジックをここに追加
    navigate('/dashboard');
  };

  return (
    <Container>
      <Title>初期設定</Title>
      <Form onSubmit={handleSubmit}>
        <Label>ユーザー名</Label>
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <Label>プロフィール画像</Label>
        <Input
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
        />
        <Button type="button" onClick={handleGoogleCalendarAuth}>
          GoogleカレンダーとのAPI認証
        </Button>
        <Button type="button" onClick={handleGoogleChatAuth}>
          GoogleチャットとのAPI認証
        </Button>
        <Label>参加するコミュニティの設定</Label>
        <Input type="text" placeholder="コミュニティ名を入力" required />
        <Button type="submit">保存</Button>
      </Form>
    </Container>
  );
};

export default InitialSetupPage;
