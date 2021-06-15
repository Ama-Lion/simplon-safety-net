import React, { ReactElement } from 'react'

interface Props {
    handleChange: any;
    handleSubmit: any;
    button: any;
    values: {
        address: any;
        station: any;
    }

}

export default function FirestationForm({handleChange, handleSubmit, button, values}: Props): ReactElement {
    return (
        <form  onSubmit={handleSubmit} >
            <div className="input-field">
                <input type="text" id="station" name="station" value={values.station} onChange={handleChange} required />
                <label htmlFor="station">Firestation #:</label>
            </div>
            <div className="input-field">
                <input type="text" id="address" name="address" value={values.address} onChange={handleChange} required />
                <label htmlFor="address">Station Address:</label>
            </div>

            {button}
        </form>
    )
}
