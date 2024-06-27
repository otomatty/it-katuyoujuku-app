import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const CalendarHeader = styled.div`
  display: flex;
  background-color: #f0f0f0;
  font-weight: bold;

  & > div {
    flex: 1;
    text-align: center;
    &:first-child {
      flex: 0 0 80px; /* 時間列の幅を50pxに固定 */
    }
  }
`;

export const CalendarBody = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  border-right: 1px solid #ddd;
`;

export const TimeSlot = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;
    top: 2rem; /* 下に6pxずらす */
  }
`;

export const Day = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  box-sizing: border-box;
  position: relative;
`;

export const TimeCell = styled.div`
  height: calc(4rem - 1px); /* ボーダーを含めて高さを4remに調整 */
  border-bottom: 1px solid #ddd; /* 時間を区切る線 */
`;

export const DayHeader = styled.div<{
  isSunday: boolean;
  isSaturday: boolean;
  isToday: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 8px 12px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;

  ${(props) =>
    props.isSunday &&
    css`
      background-color: #ffe6e6; /* 薄い赤色 */
    `}

  ${(props) =>
    props.isSaturday &&
    css`
      background-color: #e6f0ff; /* 薄い青色 */
    `}

  div:first-child {
    font-size: 1.6rem;
    padding: 2px;

    ${(props) =>
      props.isToday &&
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
      props.isToday &&
      css`
        color: #4285f4; /* 青色の文字 */
      `}
  }
`;

export const Task = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background-color: #4285f4;
  color: white;
  padding: 5px;
  border-radius: 4px;
  margin-top: 5px;
  height: 3.5rem; /* タスクの高さを調整 */
`;

export const IntervalSelector = styled.select`
  margin: 10px 0;
  padding: 5px;
  font-size: 1rem;
`;
