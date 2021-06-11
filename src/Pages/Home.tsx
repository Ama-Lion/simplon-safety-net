import React, { Component } from 'react'
import Modal from '../Components/Modal'
import Nav from '../layouts/Nav'
import { Div } from '../styles/main'
import { AnimatedButtonStyle } from '../styles/Modal'

interface Props {

}
interface State {

}


export default class Home extends Component<Props, State> {
    state={

    }

    handlAnimated(open: any) {
        this.setState({
            isOpen: open,
        })
    }

    render() {
        return (
            <Div>
                <div  >
                    <Nav persons records firestation />
                </div>
                <div style={{ flex: '0.3' }}  >
                    <img src="https://i.pinimg.com/originals/e4/f4/5b/e4f45ba0bf3c96a366af88f84dbb199a.jpg" alt="" width="400" />
                </div>
            </Div>
        )
    }
}
