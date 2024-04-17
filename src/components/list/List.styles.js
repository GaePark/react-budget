import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 0 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  height: 50px;
  transition: 0.5s;
  box-shadow: 1px 1px 5px 1px #ddd;

  :hover {
    transform: scale(1.01);
  }

  > div {
    width: 45%;
    cursor: default;
    font-size: 16px;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
