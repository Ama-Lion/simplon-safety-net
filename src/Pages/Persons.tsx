import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { Div, CardContainer, PrimaryText } from '../styles/main'
import Modal from '../Components/Modal'
import { AnimatedButtonStyle } from '../styles/Modal'
// @ts-ignore
import { DataStore } from '@aws-amplify/datastore';
import { Person } from '../models';
import { Card, GoConer } from '../styles/Card';
import { ActionNav } from '../styles/nav'
interface Props {

}
interface State {
    persons: any;
    isOpen: boolean;
}

export default class Persons extends Component<Props, State> {
    state: State = {
        persons: [],
        isOpen: false,
    };
    async componentDidMount() {
        const persons = await DataStore.query(Person);
        this.setState({ persons })
    }
    handlAnimated(open: any) {
        this.setState({
            isOpen: open,
        })
    }
    render() {
        const { persons, isOpen } = this.state
        console.log(persons)
        return (
            <Div>
                <div>
                    <Nav home records firestation />
                </div>
                <ActionNav>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)}>
                        Open modal
                    </AnimatedButtonStyle>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)}>
                        Open modal
                    </AnimatedButtonStyle>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)}>
                        Open modal
                    </AnimatedButtonStyle>
                </ActionNav>
                <Modal isOpen={isOpen} handleClose={() => this.handlAnimated(false)}>
                    <form action="">
                        <div className="input-field">
                            <input type="text" id="name" required />
                            <label htmlFor="name">Your name:</label>
                        </div>
                        <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)}>
                            Open modal
                        </AnimatedButtonStyle>
                    </form>
                </Modal>
                <CardContainer>
                    {persons.map((person: any) => {
                        return (
                            <Card>
                                <h3><PrimaryText>First Name:</PrimaryText> {person.firstName}</h3>
                                <h3><PrimaryText>Last Name:</PrimaryText> {person.lastName}</h3>
                                <h3><PrimaryText>Birth Date:</PrimaryText> {person.birthDate}</h3>
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
