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
     color: #fff;
     cursor: pointer;

     &.go-arrow {
     margin-top: -4px;
     margin-right: -20px;
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
    width: 500px;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -16px;
        right: -16px;
        background: #AB0520;
        height: 80px;
        width: 32px;
        border-radius: 32px;
        transform: scale(1);
        transform-origin: 50% 50%;
        transition: transform 0.25s ease-out;
    }

    &:hover:before {
        transform: scale(21);
    }
    h3{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0em;
    }

    &:hover {
        p {
            transition: all 0.3s ease-out;
            color: #fff;
        }
        h3 {
            display: flex;
            transition: all 0.3s ease-out;
            color: #ffffffb0;
        }
    }
    
`;