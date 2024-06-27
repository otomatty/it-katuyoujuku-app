import React, { useState } from 'react';
import {
  Container,
  Label,
  Select,
  Button,
} from './CommunityRoleSettings.styles';
import { getAuth } from 'firebase/auth';
import { setCommunityRole } from '../../../services/roleService';
import { CommunityRole } from '../../../types/roleTypes';
import { useNotificationStore } from '../../../store/notificationStore';

const CommunityRoleSettings: React.FC = () => {
  const [communityId, setCommunityId] = useState<string>('');
  const [role, setRole] = useState<CommunityRole>('Learner');
  const [userId, setUserId] = useState<string>('');
  const setMessage = useNotificationStore((state) => state.setMessage);
  const auth = getAuth();

  const handleSave = async () => {
    if (auth.currentUser) {
      try {
        await setCommunityRole(userId, communityId, role);
        setMessage('コミュニティロールが設定されました', 'success');
      } catch (error) {
        console.error('Error setting community role: ', error);
        setMessage('コミュニティロールの設定に失敗しました', 'error');
      }
    }
  };

  return (
    <Container>
      <Label>ユーザーID</Label>
      <Select value={userId} onChange={(e) => setUserId(e.target.value)}>
        <option value="">選択してください</option>
        {/* ユーザーIDのオプションを追加 */}
      </Select>
      <Label>コミュニティID</Label>
      <Select
        value={communityId}
        onChange={(e) => setCommunityId(e.target.value)}
      >
        <option value="">選択してください</option>
        <option value="community1">コミュニティ1</option>
        <option value="community2">コミュニティ2</option>
        {/* 他のコミュニティIDを追加 */}
      </Select>
      <Label>ロール</Label>
      <Select
        value={role}
        onChange={(e) => setRole(e.target.value as CommunityRole)}
      >
        <option value="Administrator">管理者</option>
        <option value="Instructor">インストラクター</option>
        <option value="Moderator">モデレーター</option>
        <option value="Learner">ラーナー</option>
      </Select>
      <Button onClick={handleSave}>保存</Button>
    </Container>
  );
};

export default CommunityRoleSettings;
