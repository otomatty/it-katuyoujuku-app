import React, { useState, useEffect, useRef } from 'react';
import { Container, Input, TimerDisplay } from './TimeTracker.styles';
import { Task } from '../../../types'; // Task型をインポート
import PlayPauseButton from '../../atoms/PlayPauseButton/PlayPauseButton'; // PlayPauseButtonコンポーネントをインポート
import Button from '../../atoms/Button/Button'; // Buttonコンポーネントをインポート

interface TimeTrackerProps {
  onAddTask: (task: Task) => void;
}

const TimeTracker: React.FC<TimeTrackerProps> = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0); // 継続時間を管理する状態を追加
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
        const currentTime = new Date()
          .toISOString()
          .split('T')[1]
          .split('.')[0];
        setEndTime(currentTime);
      }, 1000);
    } else if (!isRunning && startTime) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, startTime]);

  const handleStartStop = () => {
    if (!isRunning) {
      const currentTime = new Date().toISOString().split('T')[1].split('.')[0];
      setStartTime(currentTime);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setStartTime('');
    setEndTime('');
    setElapsedTime(0); // 継続時間をリセット
  };

  const handleAddTask = () => {
    if (task && startTime && endTime) {
      const newTask: Task = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        description: task,
        startTime,
        endTime,
        notes: '',
        tags: [],
      };
      onAddTask(newTask);
      setTask('');
      handleReset();
    }
  };

  const formatElapsedTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Container>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="作業内容を入力"
      />
      <TimerDisplay>{formatElapsedTime(elapsedTime)}</TimerDisplay>
      <PlayPauseButton onClick={handleStartStop} $isRunning={isRunning} />
      <Button onClick={handleReset}>リセット</Button>
      <Button onClick={handleAddTask}>タスク追加</Button>
    </Container>
  );
};

export default TimeTracker;
