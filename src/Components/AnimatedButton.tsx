import React, { ReactElement } from 'react'
import { AnimatedButtonStyle } from '../styles/Modal'
interface Props {
  children: any;
}

export default function AnimatedButton({ children }: Props): ReactElement {
  return (
    <AnimatedButtonStyle 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      {children}
    </AnimatedButtonStyle>
  );
}
