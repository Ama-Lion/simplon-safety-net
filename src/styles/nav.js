import styled from 'styled-components'


export const Ul = styled.ul`
  position: fixed;
  top: 10%;
  left: 20px;
  list-style: none;
  z-index: 1000;
  /* transform: rotate(-35deg) skew(20deg,5deg); */  
`;

export const ListItem = styled.a`
  background: #AB0520;
  color: #ffffffb9;
  text-align: center;
  height: 2.5em;
  width: 4em;
  vertical-align: middle;
  line-height: 2.5em;
  border-bottom: 1px solid #060606;
  position: relative;
  display: block;
  text-decoration: none;
  box-shadow: -2em 1.5em 0 #e1e1e1;
  transition: all .25s linear;
  font-size: 2em;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background: #EF4056;
    color: #ffffff;
    transform: translate(.9em, -.9em);
    transition: all .25s linear;
    box-shadow: -2em 2em 0 #e1e1e1;
    
    &:before, 
    &:after { 
      transition: all .25s linear; 
    }
    
    &:before {
      background: #EF4056;
      width: 1em;
      top: .5em;
      left: -1em;
    }
    
    &:after {
      background: #EF4056;
      width: 1em;
      bottom: -2.5em;
      left: 1em;
      height: 4em;
    }
  }
  
  &:before, 
  &:after {
    content: '';
    position: absolute;
    transition: all .25s linear;
    width: .5em;
  }

  &:after {
    height: 4em;
    background: #ab0521;
    bottom: -2.25em;
    left: 1.5em;
    transform: rotate(90deg) skew(0,45deg);
  }
  
  &:before {
    height: 2.5em;
    background: #AB0520;
    top: .25em;
    left: -.5em;
    transform: skewY(-45deg);
  }
`;
