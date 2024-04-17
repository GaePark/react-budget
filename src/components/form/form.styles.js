import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    width: 48%;
    font-size: 18px;
    font-weight: bold;
    color: green;
    cursor: default;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 3px solid olivedrab;
  outline: none;
  height: 30px;
  font-size: 16px;
`;

export const Button = styled.button`
  margin-top: 20px;
  border: none;
  background-color: olivedrab;
  width: 80px;
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
