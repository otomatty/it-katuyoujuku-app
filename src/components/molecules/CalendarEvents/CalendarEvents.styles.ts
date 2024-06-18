import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const EventList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const EventItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;
