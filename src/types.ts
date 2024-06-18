export interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
  location?: string;
  attendees?: Array<{
    email: string;
    displayName?: string;
  }>;
  source?: string; // 追加
}
