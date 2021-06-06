import React, { Component } from 'react'
import  Nav  from '../layouts/Nav'
import { Div } from '../styles/main'

interface Props {
    
}
interface State {
    
}


export default class Home extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Div>
                <div  >
                 <Nav persons records firestation/>
                </div>
                <div style={{flex: '0.3'}}  ><h1>Home</h1></div>
            </Div>
        )
    }
}
