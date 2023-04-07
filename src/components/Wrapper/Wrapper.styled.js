import styled from 'styled-components';

export const WrapperStyled = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 5px;
  background-color: #fff;
  border-radius: 8px;

  > * {
    &:last-child {
      max-height: 429px;
      overflow: auto;
    }
  }
`;
