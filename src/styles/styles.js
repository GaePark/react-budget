import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  height: 100%;

  > div {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Notification = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? "green" : "#aa3333;")};
`;

export const Container = styled.div`
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
`;

export const Total = styled.div`
  text-align: right;
  font-size: 24px;
  font-weight: bold;
`;
