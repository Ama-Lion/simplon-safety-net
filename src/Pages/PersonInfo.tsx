import React, { Component } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Person, Firestation } from '../models';
import  { Redirect } from 'react-router-dom'
import { AnimatedButtonStyle } from '../styles/Modal';
import PersonInfoComponent from '../Components/Person/PersonInfoComponent';
import { ActionNav } from '../styles/nav';
import Modal from '../Components/Modal';
import PersonForm from '../Components/Person/PersonForm';
interface Props {

}
interface State {
    id: string;
    person: any;
    firestation: any;
    isOpen: boolean;
    firestations: any;
    firstName: any;
    lastName: any;
    phone: any;
    email: any;
    adddress: any;
    city: any;
    zip: any;
    firestationID: any;
}

export default class PersonInfo extends Component<Props, State> {
    state: State = {
        isOpen: false,
        id: "",
        person: [],
        firestation: [],
        firestations: [],
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        adddress: "",
        city: "",
        zip: "",
        firestationID: "",
    }

    async componentDidMount() {
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[2];
        const person = await DataStore.query(Person, c => c.id("eq", `${id}`));
        const firestation = await DataStore.query(Firestation, c => c.id("eq", `${person[0].firestationID}`));
        const firestations = await DataStore.query(Firestation);
        this.setState({ id, person, firestation, firestations });
        this.setState({
            firstName: person[0].firstName,
            lastName: person[0].lastName,
            phone: person[0].phone,
            email: person[0].email,
            adddress: person[0].adddress,
            city: person[0].city,
            zip: person[0].zip,
            firestationID: person[0].firestationID,
        })
    }
    handleSubmit = async (e?: any) => {
        e.preventDefault();
        // @ts-ignore
        const CURRENT_USER = await DataStore.query(Person,`${this.state.id}`);
        const updatedPerson = await DataStore.save(
            // @ts-ignore
            Person.copyOf(CURRENT_USER, p => {
              p.firstName = this.state.firstName;
              p.lastName = this.state.lastName;
              p.phone = this.state.phone;
              p.email = this.state.email;
              p.adddress = this.state.adddress;
              p.city = this.state.city;
              p.zip = this.state.zip;
              p.firestationID = this.state.firestationID;
          })
        );
        const person = await DataStore.query(Person, c => c.id("eq", `${this.state.id}`));
        this.setState({
            person: person,
        })
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
        const todelete = await DataStore.query(Person, `${this.state.id}`);
        // @ts-ignore
        DataStore.delete(todelete);
        window.location.href = "/persons";
    }
    render() {
        const { id, person, firestation, firestations, isOpen } = this.state;
        console.log(firestation);
        return (
            <div>
                <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => window.history.back()}>
                    Back
                </AnimatedButtonStyle>
                <ActionNav>
                    
                    <h1>Person Info</h1>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)} >
                        Edit Info
                    </AnimatedButtonStyle>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handleDelete()} >
                        Delete
                    </AnimatedButtonStyle>
                </ActionNav>
                <Modal isOpen={isOpen} handleClose={() => this.handlAnimated(false)}>
                    <PersonForm
                        values={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        firestations={firestations}
                        button={
                            <AnimatedButtonStyle type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(false)}>
                                Save
                            </AnimatedButtonStyle>
                        }
                    />
                </Modal>
                <PersonInfoComponent person={person} firestation={firestation} />
            </div>
        )
    }
}