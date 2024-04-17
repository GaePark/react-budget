import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 30px;
`;

export const Button = styled.button`
  margin-top: 20px;
  border: none;
  background-color: olivedrab;
  width: 100px;
  height: 40px;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    transform: scale(1.1);
  }
`;
