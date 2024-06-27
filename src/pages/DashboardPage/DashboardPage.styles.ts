import styled, { css } from 'styled-components';

const goldenRatio = 1.618;

const commonWrapperStyles = css`
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr ${goldenRatio * 2}fr ${goldenRatio}fr; /* サイドバーが一番小さく、中央が一番大きい */
  grid-template-rows: ${goldenRatio / 2}fr ${goldenRatio / 2}fr 1fr; /* 上下を黄金比に基づいて分ける */
  gap: 20px;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f0f0f0;
`;

export const SidebarWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
`;

export const TimeManagementWrapper = styled.div`
  ${commonWrapperStyles}
  margin-top: 20px;
  grid-column: 2; /* 中央のカラム */
  grid-row: 1 / 3;
  overflow-y: auto;
  padding: 10px;

  /* スクロールバーを非表示にする */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IEとEdge用 */
  scrollbar-width: none; /* Firefox用 */
`;

export const ColumsWrapper = styled.div`
  ${commonWrapperStyles}
  margin-bottom: 20px;
  grid-column: 2;
  grid-row: 3;
`;

export const StatsWrapper = styled.div`
  ${commonWrapperStyles}
  margin-top: 20px;
  margin-right: 20px;
  grid-column: 3; /* 右のカラム */
  grid-row: 1;
`;

export const ProgressWrapper = styled.div`
  ${commonWrapperStyles}
  margin-right: 20px;
  grid-column: 3;
  grid-row: 2; /* 上部のコンテンツ */
  overflow-y: auto;
`;

export const MessageWrapper = styled.div`
  ${commonWrapperStyles}
  margin-right: 20px;
  margin-bottom: 20px;
  grid-column: 3;
  grid-row: 3; /* 下部のコンテンツ */
  overflow-y: auto;
`;
