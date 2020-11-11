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

export const Repositories = styled.div`
  margin-top:80px;
  max-width:700px;

  a{
    background:#fff;
    border-radius:5px;
    width:100%;
    padding:24px;
    display:block;
    text-decoration:none;

    display:flex;
    align-items:center;

    &:hover{
      transform: translateX(10px);
      transition: 0.3s;
    }

    & + a{
      margin-top:16px;
    }

  }

  img{
    width:64px;
    height:64px;
    border-radius:50%;
  }

  div{
    margin: 0 16px;
    flex:1;

      strong{
        font-size:20px;
        color:#3d3d4d;
      }

      p{
        font-size:18px;
        color:#A8A8B3;
        margin-top:4px;
      }

      svg{
        margin-left:auto;
        color:#cbcbd6;
      }
  }
`;


export const Error = styled.span `
  display:block;
  margin-top:8px;
`;
