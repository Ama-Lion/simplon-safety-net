import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { Div, CardContainer, PrimaryText } from '../styles/main'
import Modal from '../Components/Modal'
import { AnimatedButtonStyle } from '../styles/Modal'
// @ts-ignore
import { DataStore } from '@aws-amplify/datastore';
import { Person, Firestation } from '../models';
import { Card, GoConer } from '../styles/Card';
import { ActionNav } from '../styles/nav'
interface Props {

}
interface State {
    persons: any;
    isOpen: boolean;
    firestations: any;
    formData: any;
}

export default class Persons extends Component<Props, State> {
    state: State = {
        persons: [],
        isOpen: false,
        firestations: [],
        formData: {
            firstName: "",            
            lastName: "",            
            phone: "",            
            email: "",            
            adddress: "",            
            city: "",            
            zip: "",            
            createdAt: "",            
            firestationID: "",            
        },
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
    // handleChange = (e: any)=> {
    //     e.preventDefault;
    //     console.log(e.event.target.value)
    // }
    handleSubmit = (e?: any)=> {
        e.preventDefault();
        console.log(e.event.target.value)
    }
    render() {
        const { persons, isOpen, firestations } = this.state;
        return (
            <Div>
                <div>
                    <Nav home records firestation />
                </div>
                <ActionNav>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)}>
                        Add a Person
                    </AnimatedButtonStyle>
                </ActionNav>
                <Modal isOpen={isOpen} handleClose={() => this.handlAnimated(false)}>
                    <form action="">
                        <div className="form-fields">
                            <div className="input-field">
                                <input type="text" id="firstName" required />
                                <label htmlFor="firstName">First name:</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="lastName" required />
                                <label htmlFor="lastName">Last name:</label>
                            </div>
                        </div>
                        <div className="form-fields">
                            <div className="input-field">
                                <input type="number" id="phone" required />
                                <label htmlFor="phone">phone:</label>
                            </div>
                            <div className="input-field">
                                <input type="email" id="email" required />
                                <label htmlFor="email">Email:</label>
                            </div>
                        </div>
                        <div className="form-fields">
                            <div className="input-field">
                                <input type="text" id="adddress" required />
                                <label htmlFor="adddress">Adddress:</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="city" required />
                                <label htmlFor="city">City:</label>
                            </div>
                            <div className="input-field">
                                <input type="number" id="zip" required />
                                <label htmlFor="zip">Zip:</label>
                            </div>
                        </div>
                        <div className="form-fields">
                            <div className="input-field">
                                <input type="date" id="createdAt" required />
                                <label htmlFor="createdAt">Creted At:</label>
                            </div>
                            <div className="input-field">
                               <select id="firestationID" required>
                                   <option>Choose Firestation</option>
                                   {firestations.map((firestation: any)=> {
                                       return (
                                        <option value={firestation.id}>{firestation.address}</option>
                                       )
                                   })}
                               </select>
                            </div>
                        </div>
                        <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => {this.handlAnimated(false); this.handleSubmit()}}>
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
