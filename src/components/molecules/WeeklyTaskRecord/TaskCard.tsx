import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Card } from './TaskCard.styles';
import '@splidejs/splide/dist/css/splide.min.css';
import { Task } from '../../../types'; // Task型をインポート
import { calculateTotalTime } from '../../../utils/timeUtils'; // 関数をインポート

interface TaskCardProps {
  tasks: Task[];
}

const TaskCard: React.FC<TaskCardProps> = ({ tasks }) => {
  const options = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    pagination: true,
    arrows: true,
  };

  // タスクを時系列順にソート
  const sortedTasks = tasks.sort(
    (a, b) =>
      new Date(a.date + 'T' + a.startTime).getTime() -
      new Date(b.date + 'T' + b.startTime).getTime()
  );

  return (
    <Splide options={options}>
      {sortedTasks.map((task) => (
        <SplideSlide key={task.id}>
          <Card>
            <h3>{task.description}</h3>
            <p>{calculateTotalTime(task.startTime, task.endTime)}時間</p>
            <p>{task.notes}</p>
            <div>
              {task.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    marginRight: '5px',
                    padding: '5px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '4px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default TaskCard;
