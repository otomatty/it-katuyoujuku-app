import React from 'react';
import {
  Container,
  SidebarWrapper,
  TimeManagementWrapper,
  ColumsWrapper,
  StatsWrapper,
  ProgressWrapper,
  MessageWrapper,
} from './DashboardPage.styles';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import TimeManagement from '../../components/organisms/TimeManagement/TimeManagement'; // TimeManagement added

const tasks = [
  {
    id: 1,
    date: '2023-10-01',
    description: 'Task 1',
    startTime: '09:00', // Added start time
    endTime: '10:00', // Added end time
    notes: 'Note 1',
    tags: ['tag1'],
  },
  {
    id: 2,
    date: '2023-10-02',
    description: 'Task 2',
    startTime: '11:00', // Added start time
    endTime: '12:00', // Added end time
    notes: 'Note 2',
    tags: ['tag2'],
  },
  // 他のタスクを追加
];

const DashboardPage: React.FC = () => {
  return (
    <Container>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <TimeManagementWrapper>
        <TimeManagement tasks={tasks} /> {/* TimeManagement component added */}
      </TimeManagementWrapper>
      <ColumsWrapper>{/* コラムが入ります */}</ColumsWrapper>
      <StatsWrapper>{/* 統計情報が入ります */}</StatsWrapper>
      <ProgressWrapper>{/* 進捗情報が入ります */}</ProgressWrapper>
      <MessageWrapper>{/* メッセージが入ります */}</MessageWrapper>
    </Container>
  );
};

export default DashboardPage;
