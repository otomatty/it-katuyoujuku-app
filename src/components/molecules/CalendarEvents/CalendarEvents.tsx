import React, { useEffect, useState } from 'react';
import {
  listUpcomingEvents,
  initClient,
  signInWithGoogle,
  checkIfSignedIn,
} from '../../../api/googleCalendarApi';
import { CalendarEvent } from '../../../types';
import {
  Container,
  Title,
  EventList,
  EventItem,
} from './CalendarEvents.styles';
import { useNotificationStore } from '../../../store/notificationStore';
import Button from '../../atoms/Button/Button'; // ボタンコンポーネントをインポート

const CalendarEvents: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const setMessage = useNotificationStore((state) => state.setMessage);

  const handleFetchEvents = async () => {
    try {
      console.log('Initializing GAPI client...');
      await initClient();
      if (!checkIfSignedIn()) {
        console.log('Signing in with Google...');
        await signInWithGoogle();
      }
      console.log('Fetching events...');
      const googleEvents = await listUpcomingEvents();
      console.log('Events fetched:', googleEvents);
      setEvents(googleEvents);
    } catch (error) {
      console.error('Error fetching events: ', error);
      setMessage('Error fetching events', 'error');
    }
  };

  useEffect(() => {
    handleFetchEvents();
  }, []);

  return (
    <Container>
      <Title>Upcoming Events</Title>
      <Button onClick={handleFetchEvents}>Fetch Events</Button>{' '}
      {/* ボタンを追加 */}
      <EventList>
        {events.map((event) => (
          <EventItem key={event.id}>
            {event.summary} - {event.start.dateTime}
          </EventItem>
        ))}
      </EventList>
    </Container>
  );
};

export default CalendarEvents;
