import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { app } from './firebaseApp';
import { CalendarEvent } from '../types';

export const db = getFirestore(app);

export const eventsCollection = collection(db, 'events');

export const fetchEventsFromFirestore = async (): Promise<CalendarEvent[]> => {
  const querySnapshot = await getDocs(eventsCollection);
  return querySnapshot.docs.map((doc) => doc.data() as CalendarEvent);
};

export const addEventToFirestore = async (event: CalendarEvent) => {
  await addDoc(eventsCollection, event);
};
