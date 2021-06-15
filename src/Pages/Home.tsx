import React, { Component } from 'react'
import Modal from '../Components/Modal'
import Nav from '../layouts/Nav'
import { CardContainer, Div } from '../styles/main'
import { DataStore } from '@aws-amplify/datastore';
import { Card, Edit, GoConer, Trash } from '../styles/Card';
import { Firestation } from '../models';
import { Link } from 'react-router-dom';
interface Props {

}
interface State {
    firestations: any,
}


export default class Home extends Component<Props, State> {
    render() {
        return (
            <Div>
                <div  >
                    <Nav persons records firestation />
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <div>
                    <img src="https://i.pinimg.com/originals/e4/f4/5b/e4f45ba0bf3c96a366af88f84dbb199a.jpg" alt="" width="300" />
                </div>
                <CardContainer>
                    <Card>
                        <h3>Child Alerts</h3>
                        <Link to={`/firestations/`} >
                            <GoConer className="go-corner">
                                <div className="go-arrow">
                                    →
                                </div>
                            </GoConer>
                        </Link>
                    </Card>
                    <Card>
                        <h3>Phone Alerts</h3>
                        <Link to={`/firestations/`} >
                            <GoConer className="go-corner">
                                <div className="go-arrow">
                                    →
                                </div>
                            </GoConer>
                        </Link>
                    </Card>
                    <Card>
                        <h3>Fire Address</h3>
                        <Link to={`/firestations/`} >
                            <GoConer className="go-corner">
                                <div className="go-arrow">
                                    →
                                </div>
                            </GoConer>
                        </Link>
                    </Card>
                    <Card>
                        <h3>Emails</h3>
                        <Link to={`/firestations/`} >
                            <GoConer className="go-corner">
                                <div className="go-arrow">
                                    →
                                </div>
                            </GoConer>
                        </Link>
                    </Card>
                </CardContainer>
                </div>
            </Div>
        )
    }
}
