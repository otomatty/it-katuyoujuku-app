import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebaseApp';
import { setInitialRoles, setCommunityRole } from './roleService';

export const saveUserToFirestore = async (user: any) => {
  const userRef = doc(db, 'users', user.uid);

  const userData = {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    createdAt: new Date(),
  };

  await setDoc(userRef, userData, { merge: true });

  // グローバルロールを設定
  await setInitialRoles(user.uid);

  // コミュニティロールを設定
  const defaultCommunityId = 'defaultCommunity';
  await setCommunityRole(user.uid, defaultCommunityId, 'Guest');
};

export const getUserGlobalRole = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();
    return userData.roles?.globalRole || 'Unknown';
  } else {
    return 'Unknown';
  }
};

export const userExists = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);
  return userDoc.exists();
};
