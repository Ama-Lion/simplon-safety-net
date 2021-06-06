import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { Div } from '../styles/main'

interface Props {
    
}
interface State {
    
}

export default class MedicalRecords extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Div>
                <div  >
                 <Nav persons home firestation/>
                </div>
                <div style={{flex: '0.3'}}  ><h1>Reacods</h1></div>
            </Div>
        )
    }
}
