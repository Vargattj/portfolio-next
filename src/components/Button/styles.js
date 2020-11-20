import styled from "styled-components";

export const Container = styled.button`
  outline: none;
  border: none;
  padding: 20px 30px;
  border-radius: 45px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.second};
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  width: 200px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
    color: #ff4560;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.second};
  }
`;
