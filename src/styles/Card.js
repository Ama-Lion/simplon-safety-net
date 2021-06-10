import styled from 'styled-components'
export const GoConer = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     position: absolute;
     width: 32px;
     height: 32px;
     overflow: hidden;
     top: 0;
     right: 0;
     background: #AB0520;
     border-radius: 0 4px 0 32px;


     &.go-arrow {
     margin-top: -4px;
     margin-right: -4px;
     color: #ffffffb0;
     font-family: courier, sans;
     }
`

export const Card = styled.div`
    border-radius: 51px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  5px 5px 10px #e6e6e6,
                -5px -5px 10px #ffffff;
    display: block;
    position: relative;
    max-width: 262px;
    /* background-color: #f2f8f9; */
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -16px;
        right: -16px;
        background: #AB0520;
        height: 40px;
        width: 32px;
        border-radius: 32px;
        transform: scale(1);
        transform-origin: 50% 50%;
        transition: transform 0.25s ease-out;
    }

    &:hover:before {
        transform: scale(21);
    }
    

    &:hover {
    p {
        transition: all 0.3s ease-out;
        color: #ffffffb0;
    }
    h3 {
        transition: all 0.3s ease-out;
        color: #ffffffb0;
    }
    }
    
`;