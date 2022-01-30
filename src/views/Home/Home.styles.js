import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100% - 55px);
  padding-top: 55px;
  width: 100%;
  display: grid;
  place-items: center;

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

export const Form = styled.form`
  display: flex;
  align-items: center;
  align-self: start;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: flex;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;
