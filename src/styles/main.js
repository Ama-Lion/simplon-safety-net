import styled from 'styled-components'


export const PrimaryText = styled.p`
    color:#AB0520;
    margin: 0.5em;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const MainTitle = styled.h1`
  text-align: center;
  border-radius: 50px;
  color:#AB0520;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  5px 5px 10px #bebebe,
             -5px -5px 10px #ffffff;
`;
export const NotFoundTitle = styled.h1`
  position: absolute;
  right: 30%;
  top: 30%;
  padding: 30px;
  text-align: center;
  border-radius: 50px;
  color:#AB0520;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  5px 5px 10px #bebebe,
             -5px -5px 10px #ffffff;
`;

export const CardContainer = styled.div`
  margin-top: 120px;
    margin-left: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
export const Spinner = styled.div`
      /* Loading Logo */
    & .rotate {
    animation: rotation 8s infinite linear;
    width: 300px;
    }
    @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;
