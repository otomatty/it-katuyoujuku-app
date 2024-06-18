import React, { useEffect, useState } from "react";
import { listUpcomingEvents, initClient } from "../../../api/googleCalendarApi";
import { CalendarEvent } from "../../../types";
import {
  Container,
  Title,
  EventList,
  EventItem,
} from "./CalendarEvents.styles";
import { useNotificationStore } from "../../../store/notificationStore";

const CalendarEvents: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const setMessage = useNotificationStore((state) => state.setMessage);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        await initClient();
        const googleEvents = await listUpcomingEvents();
        setEvents(googleEvents);
      } catch (error) {
        console.error("Error fetching events: ", error);
        setMessage("Error fetching events", "error");
      }
    };

    fetchEvents();
  }, [setMessage]);

  return (
    <Container>
      <Title>Upcoming Events</Title>
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
