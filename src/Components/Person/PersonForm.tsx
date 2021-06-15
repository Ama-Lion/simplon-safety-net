
import React, { ReactElement } from 'react'

interface Props {
    handleChange: any;
    handleSubmit: any;
    button: any;
    values: {
        firstName: any;
        lastName: any;
        phone: any;
        email: any;
        adddress: any;
        city: any;
        zip: any;
        firestationID: any;
    }

}

export default function PersonForm({handleChange, handleSubmit, button, values}: Props): ReactElement {
    return (
        <form  onSubmit={handleSubmit} >
        <div className="form-fields">
            <div className="input-field">
                <input type="text" id="firstName" name="firstName" value={values.firstName} onChange={handleChange} required />
                <label htmlFor="firstName">First name:</label>
            </div>
            <div className="input-field">
                <input type="text" id="lastName" name="lastName" value={values.lastName} onChange={handleChange} required />
                <label htmlFor="lastName">Last name:</label>
            </div>
        </div>
        <div className="form-fields">
            <div className="input-field">
                <input type="number" id="phone" name="phone"  value={values.phone}  onChange={handleChange} required />
                <label htmlFor="phone">phone:</label>
            </div>
            <div className="input-field">
                <input type="email" id="email" name="email"  value={values.email}  onChange={handleChange} required />
                <label htmlFor="email">Email:</label>
            </div>
        </div>
        <div className="form-fields">
            <div className="input-field">
                <input type="text" id="adddress" name="adddress"  value={values.adddress}  onChange={handleChange} required />
                <label htmlFor="adddress">Adddress:</label>
            </div>
            <div className="input-field">
                <input type="text" id="city" name="city"  value={values.city}  onChange={handleChange} required />
                <label htmlFor="city">City:</label>
            </div>
            <div className="input-field">
                <input type="number" id="zip" name="zip"  value={values.zip}  onChange={handleChange} required />
                <label htmlFor="zip">Zip:</label>
            </div>
        </div>
        {button}
    </form>
    )
}
