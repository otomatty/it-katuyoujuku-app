import React from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';
import { Button } from './PlayPauseButton.styles';

interface PlayPauseButtonProps {
  $isRunning: boolean;
  onClick: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({
  $isRunning,
  onClick,
}) => {
  return (
    <Button onClick={onClick} $isRunning={$isRunning}>
      {$isRunning ? <FaStop /> : <FaPlay />}
    </Button>
  );
};

export default PlayPauseButton;
