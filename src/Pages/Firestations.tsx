import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { CardContainer, Div, PrimaryText } from '../styles/main'
import { Firestation } from '../models';
import { DataStore } from '@aws-amplify/datastore';
import { Card, GoConer } from '../styles/Card';
interface Props {
    
}
interface State {
    address: string,
    station: string,
    firestations: any,
}

export default class Firestations extends Component<Props, State> {
    state: State = {
        address: "",
        station: "",
        firestations: []
    }

    async componentDidMount() {
        const firestations = await DataStore.query(Firestation)
        this.setState({firestations})
    }

    saveFirestation = async () => {
        await DataStore.save(
            new Firestation(
                    { 
                        "address": this.state.address, 
                        "station": this.state.station 
                    },
            ) 
        )
    }                       

    render() {
        const { firestations, address, station } = this.state;
        return (
            <Div>
                <div  >
                 <Nav persons records home/>
                </div>
                    <button onClick={() => {
                        this.saveFirestation()
                    }}>Save firestations</button>
                                <CardContainer>
                    {firestations.map((firestation: any) => {
                        return (
                            <Card>
                            <h3><PrimaryText>Station:</PrimaryText>{firestation.station}</h3>
                            <h3><PrimaryText>Address:</PrimaryText> {firestation.address}</h3>
                            <GoConer className="go-corner">
                                <div className="go-arrow">
                                    →
                                </div>
                            </GoConer>
                    </Card>
                        )
                    })}
                </CardContainer>
            </Div>
        )
    }
}
