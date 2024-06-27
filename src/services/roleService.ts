import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseApp';
import { GlobalRole, CommunityRole } from '../types/roleTypes';

export const setInitialRoles = async (userId: string) => {
  const userRef = doc(db, 'users', userId);

  const roles = {
    globalRole: 'Learner',
    communityRoles: {
      defaultCommunity: 'Learner',
    },
  };

  await setDoc(userRef, { roles }, { merge: true });
};

export const setCommunityRole = async (
  userId: string,
  communityId: string,
  role: CommunityRole
) => {
  const communityRef = doc(
    collection(db, 'users', userId, 'communities'),
    communityId
  );

  const communityRole = {
    role: role,
    communityId: communityId,
  };

  await setDoc(communityRef, communityRole, { merge: true });
};

export const createRolesCollection = async () => {
  const rolesRef = collection(db, 'roles');

  const globalRoles: GlobalRole[] = [
    'Administrator',
    'Instractor',
    'moderator',
    'Learner',
  ];
  const communityRoles: CommunityRole[] = [
    'Administrator',
    'Instractor',
    'moderator',
    'Learner',
    'Guest',
  ];

  await setDoc(doc(rolesRef, 'globalRoles'), { roles: globalRoles });
  await setDoc(doc(rolesRef, 'communityRoles'), { roles: communityRoles });
};
