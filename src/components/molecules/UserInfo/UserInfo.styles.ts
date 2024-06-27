import styled from 'styled-components';

export const Container = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`
  margin-left: 20px;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
`;

export const Role = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0 auto 0;
`;
