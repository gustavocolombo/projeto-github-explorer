import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1 `
  font-size: 48px;
  color:#3A3A3A;
  max-width:450px;
  line-height:56px;

  margin-top:80px;
`;
export const Form = styled.form`
  margin-top:40px;
  max-width:700px;

  display:flex;

  input{
    flex:1;
    height:70px;
    border:0;
    padding:0 24px;
    border-radius: 5px 0 0 5px;

    &::placeholder{
      color:#a8a8b3;
    }
  }

  button{
    width:210px;
    height:70px;
    background:#04D361;
    border-radius:0px 5px 5px 0px;
    color:#ffff;
    border:0;

    &:hover{
      background: ${shade(0.2,'#04D361')};
      transition:0.3s;
    }
  }

`;
