import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { Div, CardContainer, PrimaryText, NotFoundTitle } from '../styles/main'
import Modal from '../Components/Modal'
import { AnimatedButtonStyle } from '../styles/Modal'
// @ts-ignore
import { DataStore } from '@aws-amplify/datastore';
import { Person, Firestation } from '../models';
import { Card, Edit, GoConer, Trash } from '../styles/Card';
import { ActionNav } from '../styles/nav'
import { Link } from 'react-router-dom'
import PersonForm from '../Components/Person/PersonForm'
interface Props {

}
interface State {
    persons: any;
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

export default class Persons extends Component<Props, State> {
    state: State = {
        persons: [],
        isOpen: false,
        firestations: [],
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        adddress: "",
        city: "",
        zip: "",
        firestationID: "",
    };
    async componentDidMount() {
        const persons = await DataStore.query(Person);
        const firestations = await DataStore.query(Firestation);

        this.setState({
            persons: persons,
            firestations: firestations,
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
    handleSubmit = async (e?: any) => {
        e.preventDefault();
        const firestation = await DataStore.query(Firestation, c => c.address("eq", `${this.state.adddress}`));
        await DataStore.save(
            new Person({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phone,
                email: this.state.email,
                adddress: this.state.adddress,
                city: this.state.city,
                zip: this.state.zip,
                firestationID: firestation[0].id,
            })
        )
        const persons = await DataStore.query(Person);
        this.setState({
            persons: persons,
        })
    }
    handleDelete = async (id?: any) => {
        const todelete = await DataStore.query(Person, `${id}`);
        // @ts-ignore
        DataStore.delete(todelete);
        const persons = await DataStore.query(Person);
        this.setState({
            persons: persons,
        })
    }

    render() {
        const { persons, isOpen } = this.state;

        return (
            <Div>
                <div>
                    <Nav home records firestation />
                </div>
                <ActionNav>
                    <h1>{persons.length} Persons</h1>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)}>
                        Add a Person
                    </AnimatedButtonStyle>
                </ActionNav>
                <Modal isOpen={isOpen} handleClose={() => this.handlAnimated(false)}>
                    <PersonForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        values={this.state}
                        button={<AnimatedButtonStyle type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(false)}>
                            Save
                        </AnimatedButtonStyle>}
                    />
                </Modal>
                {
                    persons.length === 0 ? <NotFoundTitle>Sorry no Persons available available</NotFoundTitle> :
                        <CardContainer>
                            {persons.map((person: any) => {
                                return (
                                    <Card key={person.id}>
                                        <Trash onClick={() => this.handleDelete(person.id)}>
                                            <img src="https://img.icons8.com/carbon-copy/35/000000/trash.png" />
                                        </Trash>
                                        <h3><PrimaryText>First Name:</PrimaryText> {person.firstName}</h3>
                                        <h3><PrimaryText>Last Name:</PrimaryText> {person.lastName}</h3>
                                        <Link to={`/persons/${person.id}`} >
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
                }
            </Div>
        )
    }
}
