import React from 'react';
import {
  TimelineContainer,
  DayBarContainer,
  DayBar,
  DayLabelContainer,
  DayLabel,
} from './Timeline.styles';
import { Task } from '../../../types'; // Task型をインポート
import { calculateTotalTime } from '../../../utils/timeUtils'; // 関数をインポート

interface TimelineProps {
  tasks: Task[];
  onDayClick: (day: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({ tasks, onDayClick }) => {
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

  const groupTasksByDay = () => {
    const groupedTasks: { [key: string]: Task[] } = {};
    tasks.forEach((task) => {
      const date = new Date(task.date);
      const day = daysOfWeek[date.getDay()];
      if (!groupedTasks[day]) {
        groupedTasks[day] = [];
      }
      groupedTasks[day].push(task);
    });
    console.log(groupedTasks); // デバッグ用
    return groupedTasks;
  };

  const groupedTasks = groupTasksByDay();

  const renderDayLabels = () => {
    const labels = [];
    const currentDate = new Date();
    const startOfWeek = currentDate.getDate() - currentDate.getDay();
    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(currentDate.setDate(startOfWeek + i));
      const isSunday = dayDate.getDay() === 0;
      const isSaturday = dayDate.getDay() === 6;
      const isToday = dayDate.toDateString() === new Date().toDateString();
      labels.push(
        <DayLabel
          key={i}
          $isSunday={isSunday}
          $isSaturday={isSaturday}
          $isToday={isToday}
          onClick={() => onDayClick(daysOfWeek[dayDate.getDay()])} // Added click event
        >
          <div>{dayDate.getDate()}</div>
          <div>{dayDate.toLocaleDateString('ja-JP', { weekday: 'short' })}</div>
        </DayLabel>
      );
    }
    return labels;
  };

  return (
    <TimelineContainer>
      <DayBarContainer>
        {daysOfWeek.map((day) => (
          <DayBar
            key={day}
            $studyTime={
              groupedTasks[day]
                ? groupedTasks[day].reduce((total, task) => {
                    const time = calculateTotalTime(
                      task.startTime,
                      task.endTime
                    );
                    console.log(
                      `Day: ${day}, Task: ${task.description}, Time: ${time}`
                    ); // デバッグ用
                    return total + time;
                  }, 0)
                : 0
            }
          />
        ))}
      </DayBarContainer>
      <DayLabelContainer>{renderDayLabels()}</DayLabelContainer>
    </TimelineContainer>
  );
};

export default Timeline;
