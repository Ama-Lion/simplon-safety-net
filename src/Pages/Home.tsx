import React, { Component } from 'react'
import Modal from '../Components/Modal'
import Nav from '../layouts/Nav'
import { Div } from '../styles/main'
import { AnimatedButtonStyle } from '../styles/Modal'

interface Props {

}
interface State {
    isOpen: boolean;
}


export default class Home extends Component<Props, State> {
    state: State = {
        isOpen: false,
    }

    handlAnimated(open: any) {
        this.setState({
            isOpen: open,
        })
    }

    render() {
        const { isOpen } = this.state;
        return (
            <Div>
                <div  >
                    <Nav persons records firestation />
                </div>
                <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)}>
                    Open modal
                </AnimatedButtonStyle>
                <Modal isOpen={isOpen} handleClose={() => this.handlAnimated(false)}>
                    <form action="">
                        <div className="input-field">
                            <input type="text" id="name" required />
                            <label htmlFor="name">Your name:</label>
                        </div>
                        <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)}>
                            Open modal
                        </AnimatedButtonStyle>
                    </form>
                </Modal>
                <div style={{ flex: '0.3' }}  >
                    <img src="https://i.pinimg.com/originals/e4/f4/5b/e4f45ba0bf3c96a366af88f84dbb199a.jpg" alt="" width="400" />
                </div>
            </Div>
        )
    }
}
