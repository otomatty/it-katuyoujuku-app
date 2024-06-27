import React, { useState } from 'react';
import {
  Container,
  CalendarHeader,
  CalendarBody,
  Day,
  Task,
  TimeColumn,
  TimeSlot,
  DayHeader,
  IntervalSelector,
  TimeCell,
} from './TaskCalendar.styles';

interface Task {
  id: number;
  date: string;
  description: string;
  time: string; // タスクの時間を追加
}

interface TaskCalendarProps {
  tasks: Task[];
}

const TaskCalendar: React.FC<TaskCalendarProps> = ({ tasks }) => {
  const [interval, setInterval] = useState(60); // デフォルトは1時間ごと

  const handleIntervalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInterval(parseInt(event.target.value, 10));
  };

  const renderTimeSlots = () => {
    const timeSlots = [];
    const totalSlots = 24 * (60 / interval);
    for (let i = 1; i < totalSlots + 1; i++) {
      let hours = Math.floor((i * interval) / 60);
      const minutes = (i * interval) % 60;
      const period = hours >= 13 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // 0を12に変換
      timeSlots.push(
        <TimeSlot key={i}>
          <span>
            {period} {hours}:{minutes.toString().padStart(2, '0')}
          </span>
        </TimeSlot>
      );
    }
    return timeSlots;
  };

  const renderDays = () => {
    const days = [];
    const currentDate = new Date();
    const startOfWeek = currentDate.getDate() - currentDate.getDay();
    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(currentDate.setDate(startOfWeek + i));
      const dayTasks = tasks.filter(
        (task) => new Date(task.date).toDateString() === dayDate.toDateString()
      );
      days.push(
        <Day key={i}>
          {Array.from({ length: 24 * (60 / interval) - 1 }).map((_, index) => (
            <TimeCell key={index}></TimeCell>
          ))}
          {dayTasks.map((task) => (
            <Task
              key={task.id}
              style={{
                top: `${((parseInt(task.time.split(':')[0], 10) * 60 + parseInt(task.time.split(':')[1], 10)) / interval) * 4}rem`,
              }}
            >
              {task.description}
            </Task>
          ))}
        </Day>
      );
    }
    return days;
  };

  const renderDayHeaders = () => {
    const headers = [];
    const currentDate = new Date();
    const startOfWeek = currentDate.getDate() - currentDate.getDay();
    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(currentDate.setDate(startOfWeek + i));
      const isSunday = dayDate.getDay() === 0;
      const isSaturday = dayDate.getDay() === 6;
      const isToday = dayDate.toDateString() === new Date().toDateString();
      headers.push(
        <DayHeader
          key={i}
          isSunday={isSunday}
          isSaturday={isSaturday}
          isToday={isToday}
        >
          <div>{dayDate.getDate()}</div>
          <div>{dayDate.toLocaleDateString('ja-JP', { weekday: 'short' })}</div>
        </DayHeader>
      );
    }
    return headers;
  };

  return (
    <Container>
      <IntervalSelector value={interval} onChange={handleIntervalChange}>
        <option value={120}>2時間ごと</option>
        <option value={60}>1時間ごと</option>
        <option value={30}>30分ごと</option>
        <option value={15}>15分ごと</option>
        <option value={5}>5分ごと</option>
      </IntervalSelector>
      <CalendarHeader>
        <div>時間</div>
        {renderDayHeaders()}
      </CalendarHeader>
      <CalendarBody>
        <TimeColumn>{renderTimeSlots()}</TimeColumn>
        {renderDays()}
      </CalendarBody>
    </Container>
  );
};

export default TaskCalendar;
