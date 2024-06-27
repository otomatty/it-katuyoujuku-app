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

export interface Task {
  id: number;
  date: string;
  description: string;
  startTime: string; // 開始時間
  endTime: string; // 終了時間
  notes: string;
  tags: string[];
}
