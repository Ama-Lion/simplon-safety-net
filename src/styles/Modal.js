import styled from 'styled-components'
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;
export const ModalContainer = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
  width: 50%;
  height: 70%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
`;
export const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

export const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 }
};
export const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" }
};
export const AnimatedButtonStyle = styled(motion.button)`
  font-size: 1.2rem;
  padding: 20px;
  border-radius: 50px;
  border: none;
  margin: 20px;
  background-color: #AB0520;
  color: white;
`;