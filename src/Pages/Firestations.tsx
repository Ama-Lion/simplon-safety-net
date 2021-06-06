import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { Div } from '../styles/main'

interface Props {
    
}
interface State {
    
}

export default class Firestations extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Div>
                <div  >
                 <Nav persons records home/>
                </div>
                <div style={{flex: '0.3'}}  ><h1>Firestation</h1></div>
            </Div>
        )
    }
}
