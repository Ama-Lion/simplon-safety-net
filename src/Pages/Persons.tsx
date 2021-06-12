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
    handleChange = (e: any)=> {
        e.preventDefault();
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value,
        })
    }
    handleSubmit = async (e?: any)=> {
        e.preventDefault();
        await DataStore.save(
            new Person({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phone,
                email: this.state.email,
                adddress: this.state.adddress,
                city: this.state.city,
                zip: this.state.zip,
                firestationID: this.state.firestationID,
            })
        )
        const persons = await DataStore.query(Person);
        this.setState({ 
            persons: persons,
         })
    }
    render() {
        const { persons, isOpen, firestations } = this.state;
        console.log(this.state)
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
                    <form  onSubmit={this.handleSubmit} >
                        <div className="form-fields">
                            <div className="input-field">
                                <input type="text" id="firstName" name="firstName" onChange={this.handleChange} required />
                                <label htmlFor="firstName">First name:</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="lastName" name="lastName" onChange={this.handleChange} required />
                                <label htmlFor="lastName">Last name:</label>
                            </div>
                        </div>
                        <div className="form-fields">
                            <div className="input-field">
                                <input type="number" id="phone" name="phone" onChange={this.handleChange} required />
                                <label htmlFor="phone">phone:</label>
                            </div>
                            <div className="input-field">
                                <input type="email" id="email" name="email" onChange={this.handleChange} required />
                                <label htmlFor="email">Email:</label>
                            </div>
                        </div>
                        <div className="form-fields">
                            <div className="input-field">
                                <input type="text" id="adddress" name="adddress" onChange={this.handleChange} required />
                                <label htmlFor="adddress">Adddress:</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="city" name="city" onChange={this.handleChange} required />
                                <label htmlFor="city">City:</label>
                            </div>
                            <div className="input-field">
                                <input type="number" id="zip" name="zip" onChange={this.handleChange} required />
                                <label htmlFor="zip">Zip:</label>
                            </div>
                        </div>
                        <div className="form-fields">
                        <div className="input-field">
                                <input type="date" id="birthDate" name="birthDate" onChange={this.handleChange} required />
                                <label htmlFor="birthDate">Zip:</label>
                            </div>
                            <div className="input-field">
                               <select id="firestationID" name="firestationID" onChange={this.handleChange} required>
                                   <option>Choose Firestation</option>
                                   {firestations.map((firestation: any)=> {
                                       return (
                                        <option value={firestation.id}>{firestation.address}</option>
                                       )
                                   })}
                               </select>
                            </div>
                        </div>
                        <AnimatedButtonStyle type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(false)}>
                            Save
                        </AnimatedButtonStyle>
                    </form>
                </Modal>
                <CardContainer>
                    {persons.map((person: any) => {
                        return (
                            <Card>
                                <h3><PrimaryText>First Name:</PrimaryText> {person.firstName}</h3>
                                <h3><PrimaryText>Last Name:</PrimaryText> {person.lastName}</h3>
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
