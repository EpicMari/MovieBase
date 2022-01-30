import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 20px;
  margin-top: 75px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    margin-left: 200px;
  }
`;
export const Input = styled.input`
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
  border-radius: 5px;
  width: 200px;

  &:focus {
    outline: solid ${({ theme }) => theme.colors.lightGrey};
  }
`;
