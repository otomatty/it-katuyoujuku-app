import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase/firebaseConfig';
import { createRolesCollection } from '../services/roleService';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const createRoles = async () => {
  try {
    await createRolesCollection();
    console.log('Roles collection created successfully');
  } catch (error) {
    console.error('Error creating roles collection: ', error);
  }
};

createRoles();
