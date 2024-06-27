import React, { useState } from 'react';
import { Container } from './WeeklyTaskRecord.styles';
import Timeline from './Timeline';
import TaskCard from './TaskCard';
import { Task } from '../../../types';

interface WeeklyTaskRecordProps {
  tasks: Task[];
}

const WeeklyTaskRecord: React.FC<WeeklyTaskRecordProps> = ({ tasks }) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

  // タスクを時系列順にソート
  const sortedTasks = tasks.sort(
    (a, b) =>
      new Date(a.date + 'T' + a.startTime).getTime() -
      new Date(b.date + 'T' + b.startTime).getTime()
  );

  return (
    <Container>
      <Timeline tasks={tasks} onDayClick={handleDayClick} />
      <TaskCard tasks={sortedTasks} />
    </Container>
  );
};

export default WeeklyTaskRecord;
