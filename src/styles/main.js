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
export const CardContainer = styled.div`
   margin-left: 160px;
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
