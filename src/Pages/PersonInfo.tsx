import React, { Component } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Person, Firestation, MedicalRecord } from '../models';
import { AnimatedButtonStyle } from '../styles/Modal';
import PersonInfoComponent from '../Components/Person/PersonInfoComponent';
import { ActionNav } from '../styles/nav';
import Modal from '../Components/Modal';
import PersonForm from '../Components/Person/PersonForm';
import RecordForm from '../Components/Record/RecordForm';
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
    birthDate: any;
    allergies: any;
    medications: any;
    medicalRecord: any;
    isMedicalRecordFormOpen: boolean
}

export default class PersonInfo extends Component<Props, State> {
    state: State = {
        isMedicalRecordFormOpen: false,
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
        birthDate: "",
        allergies: [],
        medications: [],
        medicalRecord: [],
    }

    async componentDidMount() {
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[2];
        const person = await DataStore.query(Person, c => c.id("eq", `${id}`));
        const firestation = await DataStore.query(Firestation, c => c.id("eq", `${person[0].firestationID}`));
        const medicalRecord = await DataStore.query(MedicalRecord, c => c.id("eq", `${person[0].medicalrecordID}`));
        const firestations = await DataStore.query(Firestation);
        this.setState({ id, person, firestation, firestations, medicalRecord });
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
        const CURRENT_USER = await DataStore.query(Person, `${this.state.id}`);
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
    handleRecordSubmit = async (e?: any) => {
        e.preventDefault();
        // @ts-ignore
        const record = await DataStore.save(new MedicalRecord({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDate: this.state.birthDate,
            allergies: this.state.allergies,
            medications: this.state.medications,
            // Person: this.state.medicalRecordPersonId,
        }))
        const CURRENT_USER = await DataStore.query(Person, `${this.state.id}`);
        await DataStore.save(
            // @ts-ignore
            Person.copyOf(CURRENT_USER, p => {
                p.medicalrecordID = record.id;
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
    handleRecordModal(open: any) {
        this.setState({
            isMedicalRecordFormOpen: open,
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
    handleDelete = async () => {
        const todelete = await DataStore.query(Person, `${this.state.id}`);
        // @ts-ignore
        DataStore.delete(todelete);
        window.location.href = "/persons";
    }
    handleMedicationsChange = (newValue: any, actionMeta: any) => {
        if (actionMeta.option.value) {
            this.state.medications.push(actionMeta.option.value)
        }

    };
    handleAllergiesChange = (newValue: any, actionMeta: any) => {
        if (actionMeta.option.value) {
            this.state.allergies.push(actionMeta.option.value)
        }
    };
    render() {
        const { person, firestation, isOpen, isMedicalRecordFormOpen, medicalRecord } = this.state;
        return (
            <div>
                <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => window.history.back()}>
                    Back
                </AnimatedButtonStyle>
                <ActionNav>

                    <h1>{this.state.firstName}'s Details</h1>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)} >
                        Edit Info
                    </AnimatedButtonStyle>
                    {medicalRecord.length > 0 ? <div></div> : <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handleRecordModal(true)} >
                        Add Medical Record
                    </AnimatedButtonStyle> }
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handleDelete()} >
                        Delete
                    </AnimatedButtonStyle>
                </ActionNav>
                <Modal isOpen={isOpen} handleClose={() => this.handlAnimated(false)}>
                    <PersonForm
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
                <Modal isOpen={isMedicalRecordFormOpen} handleClose={() => this.handleRecordModal(false)}>
                    <RecordForm
                        values={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleRecordSubmit}
                        handleMedicationsChange={this.handleMedicationsChange}
                        handleAllergiesChange={this.handleAllergiesChange}
                        button={
                            <AnimatedButtonStyle type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handleRecordModal(false)}>
                                Save
                            </AnimatedButtonStyle>
                        }
                    />
                </Modal>
                <PersonInfoComponent person={person} firestation={firestation} medicalRecord={medicalRecord} />
            </div>
        )
    }
}