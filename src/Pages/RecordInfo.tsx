import React, { Component } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Person, MedicalRecord} from '../models';
import { AnimatedButtonStyle } from '../styles/Modal';
import { ActionNav } from '../styles/nav';
import Modal from '../Components/Modal';
import RecordForm from '../Components/Record/RecordForm';
import RecordInfoComponent from '../Components/Record/RecordInfoComponent';
interface Props {

}
interface State {
    isOpen: boolean;
    id: any;
    persons: any;
    record: any;
    firstName: any;
    lastName: any;
    birthDate: any;
    allergies: any;
    medications: any;
    medicalRecordPersonId: any;
}

export default class RecordInfo extends Component<Props, State> {
    state: State = {
        isOpen: false,
        id: "",
        persons: [],
        record: [],
        firstName: "",
        lastName: "",
        birthDate: "",
        allergies: [],
        medications: [],
        medicalRecordPersonId: "",
    }

    async componentDidMount() {
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[2];
        const record = await DataStore.query(MedicalRecord, c => c.id("eq", `${id}`));
        const persons = await DataStore.query(Person);
        this.setState({ id, persons, record});
        this.setState({
            firstName: record[0].firstName,
            lastName: record[0].lastName,
            birthDate: record[0].birthDate,
            allergies: record[0].allergies,
            medications: record[0].medications,
            // medicalRecordPersonId: record[0].medicalRecordPersonId,
        })
    }
    handleSubmit = async (e?: any) => {
        e.preventDefault();
        // @ts-ignore
        const CURRENT = await DataStore.query(MedicalRecord,`${this.state.id}`);
        const updatedStation = await DataStore.save(
            // @ts-ignore
            MedicalRecord.copyOf(CURRENT, r => {

          })
        );
        const record= await DataStore.query(MedicalRecord, c => c.id("eq", `${this.state.id}`));
        // @ts-ignore
        this.setState({record})
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
        const todelete = await DataStore.query(MedicalRecord, `${this.state.id}`);
        // @ts-ignore
        DataStore.delete(todelete);
        window.location.href = "/medical-records";
    }
    render() {
        const { persons, isOpen } = this.state;
        return (
            <div>
                <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => window.history.back()}>
                    Back
                </AnimatedButtonStyle>
                <ActionNav>
                    
                    <h1>Record Details</h1>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(true)} >
                        Edit Record
                    </AnimatedButtonStyle>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handleDelete()} >
                        Delete Record
                    </AnimatedButtonStyle>
                </ActionNav>
                <Modal isOpen={isOpen} handleClose={() => this.handlAnimated(false)}>
                    <RecordForm
                        values={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleAllergiesChange=""
                        handleMedicationsChange={"hello"}
                        button={
                            <AnimatedButtonStyle type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => this.handlAnimated(false)}>
                                Save
                            </AnimatedButtonStyle>
                        }
                    />
                </Modal>
                {/* <RecordInfoComponent person={person} firestation={firestation} /> */}
            </div>
        )
    }
}