import styled, { css } from 'styled-components';

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const DayBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end; /* 下端を揃える */
`;

export const DayBar = styled.div<{ $studyTime: number }>`
  flex: 1;
  margin: 0 2rem;
  height: ${(props) =>
    props.$studyTime * 10}px; /* 学習時間に応じて高さを調整 */
  background-color: #007bff; /* バーの色を設定 */
`;

export const DayLabelContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #ddd;
`;

export const DayLabel = styled.div<{
  $isSunday: boolean;
  $isSaturday: boolean;
  $isToday: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  cursor: pointer; /* クリック可能にする */

  ${(props) =>
    props.$isSunday &&
    css`
      color: red;
    `}

  ${(props) =>
    props.$isSaturday &&
    css`
      color: blue;
    `}

  div:first-child {
    font-size: 1.6rem;
    padding: 2px;

    ${(props) =>
      props.$isToday &&
      css`
        background-color: #4285f4; /* 青色の円 */
        border-radius: 50%;
        width: 2.4rem; /* 幅を固定 */
        height: 2.4rem; /* 高さを固定 */
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff; /* 白色の文字 */
      `}
  }

  div:last-child {
    font-size: 0.8rem;
    padding: 2px;

    ${(props) =>
      props.$isToday &&
      css`
        color: #4285f4; /* 青色の文字 */
      `}
  }
`;
