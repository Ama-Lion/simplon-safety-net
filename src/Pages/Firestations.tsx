import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { CardContainer, Div, PrimaryText } from '../styles/main'
import { Firestation } from '../models';
import { DataStore } from '@aws-amplify/datastore';
import { Card, Edit, GoConer, Trash } from '../styles/Card';
import { Link } from 'react-router-dom';
import { ActionNav } from '../styles/nav';
import { AnimatedButtonStyle } from '../styles/Modal';
import Modal from '../Components/Modal';
import FirestationForm from '../Components/Firestation/FirestationForm';
interface Props {

}
interface State {
    isOpen: boolean;
    address: string,
    station: string,
    firestations: any,
}

export default class Firestations extends Component<Props, State> {
    state: State = {
        isOpen: false,
        address: "",
        station: "",
        firestations: []
    }

    async componentDidMount() {
        const firestations = await DataStore.query(Firestation)
        this.setState({ firestations })
    }
    handleChange = (e: any) => {
        e.preventDefault();
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value,
        })
    }
    handleSubmit = async (e?: any) => {
        e.preventDefault();
        await DataStore.save(
            new Firestation(
                {
                    "address": this.state.address,
                    "station": this.state.station
                },
            )
        )
        const firestations = await DataStore.query(Firestation);
        this.setState({
            firestations: firestations,
        })
    }

    handleDelete = async (id?: any) => {
        const todelete = await DataStore.query(Firestation, `${id}`);
        // @ts-ignore
        DataStore.delete(todelete);
        const firestations = await DataStore.query(Firestation);
        this.setState({
            firestations: firestations,
        })
    }
    handlAnimated(open: any) {
        this.setState({
            isOpen: open,
        })
    }
    render() {
        const { firestations, isOpen } = this.state;
        return (
            <Div>
                <div  >
                    <Nav persons records home />
                </div>
                <ActionNav>
                    <h1>{firestations.length} Stations</h1>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)}>
                        Add Station
                    </AnimatedButtonStyle>
                </ActionNav>
                <CardContainer>
                    {firestations.map((firestation: any) => {
                        return (
                            <Card key={firestation.id}>
                                <Trash onClick={() => this.handleDelete(firestation.id)}>
                                    <img src="https://img.icons8.com/carbon-copy/35/000000/trash.png" />
                                </Trash>
                                <h3><PrimaryText>Station:</PrimaryText>{firestation.station}</h3>
                                <h3><PrimaryText>Address:</PrimaryText> {firestation.address}</h3>
                                <Link to={`/firestations/${firestation.id}`} >
                                    <GoConer className="go-corner">
                                        <div className="go-arrow">
                                            →
                                        </div>
                                    </GoConer>
                                </Link>
                            </Card>
                        )
                    })}
                </CardContainer>
                <Modal isOpen={isOpen} handleClose={() => this.handlAnimated(false)}>
                    <FirestationForm
                        values={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        button={
                            <AnimatedButtonStyle type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(false)}>
                                Save
                            </AnimatedButtonStyle>
                        }
                    />
                </Modal>
            </Div>
        )
    }
}
