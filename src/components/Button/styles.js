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
`;
