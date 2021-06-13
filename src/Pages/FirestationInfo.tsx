import React, { Component } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Person, Firestation } from '../models';
import { AnimatedButtonStyle } from '../styles/Modal';
import { ActionNav } from '../styles/nav';
import Modal from '../Components/Modal';
import FirestationForm from '../Components/Firestation/FirestationForm';
import FirestationInfoComponent from '../Components/Firestation/FirestationInfoComponent';
interface Props {

}
interface State {
    isOpen: boolean;
    id: any;
    persons: any;
    firestation: any
    address: any,
    station: any,
}

export default class FirestationInfo extends Component<Props, State> {
    state: State = {
        isOpen: false,
        id: "",
        persons: [],
        firestation: [],
        address: "string",
        station: "string",
    }

    async componentDidMount() {
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[2];
        const firestation = await DataStore.query(Firestation, c => c.id("eq", `${id}`));
        const persons = await DataStore.query(Person, c => c.firestationID("eq", `${id}`));
        this.setState({ id, persons, firestation });
        this.setState({
            address: firestation[0].address,
            station: firestation[0].station,
        })
    }
    handleSubmit = async (e?: any) => {
        e.preventDefault();
        // @ts-ignore
        const CURRENT_USER = await DataStore.query(Firestation,`${this.state.id}`);
        const updatedStation = await DataStore.save(
            // @ts-ignore
            Firestation.copyOf(CURRENT_USER, f => {
              f.station = this.state.station;
              f.address = this.state.address;
          })
        );
        const firestation = await DataStore.query(Firestation, c => c.id("eq", `${this.state.id}`));
        this.setState({firestation})
    }
    handlAnimated(open: any) {
        this.setState({
            isOpen: open,
        })
    }
    handleChange = (e: any) => {
        e.preventDefault();
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value,
        })
    }
    handleDelete =  async () => {
        const todelete = await DataStore.query(Firestation, `${this.state.id}`);
        // @ts-ignore
        DataStore.delete(todelete);
        window.location.href = "/firestations";
    }
    render() {
        const { persons, isOpen } = this.state;
        return (
            <div>
                <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => window.history.back()}>
                    Back
                </AnimatedButtonStyle>
                <ActionNav>
                    
                    <h1>Station Details</h1>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)} >
                        Edit Station
                    </AnimatedButtonStyle>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handleDelete()} >
                        Delete Station
                    </AnimatedButtonStyle>
                </ActionNav>
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
                <FirestationInfoComponent persons={persons} />
            </div>
        )
    }
}