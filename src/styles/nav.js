import styled from 'styled-components'


export const Ul = styled.ul`
  position: relative;
  list-style: none;
  transform: rotate(-35deg) skew(20deg,5deg);
`;

export const ListItem = styled.a`
  background: #AB0520;
  color: #f5eaeac9;
  text-align: center;
  height: 6em;
  width: 11em;
  vertical-align: middle;
  line-height: 2.5em;
  border-bottom: 1px solid#AB0520;;
  position: relative;
  display: block;
  text-decoration: none;
  box-shadow: -2em 1.5em 0 #e1e1e1;
  transition: all .25s linear;
  &:hover {
    background: #EF4056;
    color: #fffcfb;
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
      height: 10.9em;
      background: #EF4056;
      width: 1em;
      bottom: -6em;
      left: 4.5em;
    }
  }
  
  &:before, 
  &:after {
    content: '';
    position: absolute;
    transition: all .25s linear;
    width: 1em;
  }

  &:after {
    height: 10.9em;
    background: #AB0520;
    bottom: -6em;
    left: 4.5em;
    transform: rotate(90deg) skew(0,45deg);
  }
  
  &:before {
    height: 6.3em;
    background: #AB0520;
    top: 0.40em;
    left: -1em;;
    transform: skewY(-45deg);
  }
`;
