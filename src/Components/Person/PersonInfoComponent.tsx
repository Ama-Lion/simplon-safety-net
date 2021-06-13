import React, { ReactElement } from 'react'
import { Card } from '../../styles/Card'
import { CardContainer, PrimaryText } from '../../styles/main'

interface Props {
    person: any;
    firestation: any;
}

export default function PersonInfoComponent({ person, firestation }: Props): ReactElement {
    return (
        <div style={{ display: 'flex', margin: "3em", flexWrap: 'wrap', justifyContent: 'center' }} >
            <div>
                {person.map((person: any) => {
                    return (
                        <Card>
                            <h1>Personal Info</h1>
                            <h3><PrimaryText>First Name:</PrimaryText> {person.firstName}</h3>
                            <h3><PrimaryText>Last Name:</PrimaryText> {person.lastName}</h3>
                        </Card>
                    )
                })}
                {person.map((person: any) => {
                    return (
                        <Card>
                            <h1>Contact</h1>
                            <h3><PrimaryText>Email:</PrimaryText> {person.email}</h3>
                            <h3><PrimaryText>Phone:</PrimaryText> {person.phone}</h3>
                        </Card>
                    )
                })}
            </div>
            <div>
                {person.map((person: any) => {
                    return (
                        <Card>
                            <h1>Location</h1>
                            <h3><PrimaryText>Adddress:</PrimaryText> {person.adddress}</h3>
                            <h3><PrimaryText>City:</PrimaryText> {person.city}</h3>
                            <h3><PrimaryText>Zip:</PrimaryText> {person.zip}</h3>
                        </Card>
                    )
                })}
                {firestation.map((firestation: any) => {
                    return (
                        <Card>
                            <h1>Firestation</h1>
                            <h3><PrimaryText>Station:</PrimaryText> {firestation.station}</h3>
                            <h3><PrimaryText>Address</PrimaryText> {firestation.address}</h3>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
