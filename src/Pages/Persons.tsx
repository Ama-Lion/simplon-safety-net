import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { Div } from '../styles/main'

interface Props {
    
}
interface State {
    
}

export default class Persons extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Div>
                <div  >
                 <Nav home records firestation/>
                </div>
                <div style={{flex: '0.3'}}  ><h1>Persons</h1></div>
            </Div>
        )
    }
}
