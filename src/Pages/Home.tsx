import React, { Component } from 'react'
import Looding from '../Components/Looding'
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
                <div style={{flex: '0.3'}}  >
                    <img src="https://i.pinimg.com/originals/e4/f4/5b/e4f45ba0bf3c96a366af88f84dbb199a.jpg" alt=""  width="400"/>
                </div>
            </Div>
        )
    }
}
