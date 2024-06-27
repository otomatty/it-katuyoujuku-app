import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center; /* 垂直方向の中央揃え */
  justify-content: space-between; /* 要素間のスペースを均等に */
  gap: 10px; /* 要素間のスペース */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const Input = styled.input`
  flex: 2; /* 入力フィールドを広くする */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  flex: 1; /* ボタンの幅を均等にする */
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const TimerDisplay = styled.div`
  flex: 1; /* タイマー表示の幅を均等にする */
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;
