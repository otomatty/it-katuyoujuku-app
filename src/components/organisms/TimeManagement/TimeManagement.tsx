import React, { useState } from 'react';
import {
  Container,
  TrackerContainer,
  CalendarContainer,
} from './TimeManagement.styles';
import TimeTracker from '../../molecules/TimeTracker/TimeTracker';
import WeeklyTaskRecord from '../../molecules/WeeklyTaskRecord/WeeklyTaskRecord'; // WeeklyTaskRecord added
import { Task } from '../../../types';

interface TimeManagementProps {
  tasks: Task[];
}

const TimeManagement: React.FC<TimeManagementProps> = ({
  tasks: initialTasks,
}) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Container>
      <TrackerContainer>
        <TimeTracker onAddTask={handleAddTask} />
      </TrackerContainer>
      <CalendarContainer>
        <WeeklyTaskRecord tasks={tasks} />{' '}
        {/* WeeklyTaskRecord component added */}
      </CalendarContainer>
    </Container>
  );
};

export default TimeManagement;
