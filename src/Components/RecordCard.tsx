import React, { ReactElement } from 'react'
import { Card, GoConer } from '../styles/Card'
import { PrimaryText } from '../styles/main'

interface Props {
    firstName: string;
    lastName: string;
    birthDate: string;
    medications: string;
    allergies: string;
}

export default function RecordCard({firstName, lastName, birthDate, medications, allergies}: Props): ReactElement {
    return (
        <Card>
                <h3><PrimaryText>First Name:</PrimaryText> {firstName}</h3>
                <h3><PrimaryText>Last Name:</PrimaryText> {lastName}</h3>
                <h3><PrimaryText>Birth Date:</PrimaryText> {birthDate}</h3>
                <h3><PrimaryText>Medications:</PrimaryText> {medications}</h3>
                <h3><PrimaryText>Allergies:</PrimaryText> {allergies}</h3>
                <GoConer className="go-corner">
                    <div className="go-arrow">
                        →
                    </div>
                </GoConer>
        </Card>
    )
}
