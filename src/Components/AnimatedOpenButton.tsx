import React, { ReactElement } from 'react'
import { OpenModalButton } from '../styles/Modal'
interface Props {
  children: any;
}

export default function AnimatedOpenButton({ children }: Props): ReactElement {
  return (
    <OpenModalButton 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      {children}
    </OpenModalButton>
  );
}
