import React, { ReactElement } from 'react'
import Select from 'react-select';
import chroma from 'chroma-js';
import CreatableSelect from 'react-select/creatable';
interface Props {
    handleChange: any;
    handleSubmit: any;
    button: any;
    handleAllergiesChange: any;
    handleMedicationsChange: any;
    values: {
        firstName: any;
        lastName: any;
        birthDate: any;
        allergies: any;
        medications: any;
    }
    allergiesDefaultValue?: any;

}
const medications = [
    { value: 'aznol:350mg', label: 'Aznol:350mg' },
    { value: 'hydrapermazol:100mg', label: 'Hydrapermazol:100mg' },
    { value: 'pharmacol:5000mg', label: 'Pharmacol:5000mg' },
    { value: 'terazine:10mg', label: 'Terazine:10mg' },
    { value: 'noznazol:250mg', label: 'noznazol:250mg'}
  ]
const allergies = [
    { value: 'nillacilan', label: 'Nillacilan' },
    { value: 'peanut', label: 'Peanut' },
    { value: 'xilliathal', label: 'Xilliathal' },
    { value: 'shellfish', label: 'Shellfish' },
    { value: 'aznol', label: 'Aznol' },
  ]

export default function RecordForm({handleChange, handleSubmit, button, values, handleMedicationsChange, handleAllergiesChange, allergiesDefaultValue}: Props): ReactElement {
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
        <div className="input-field" style={{marginBottom: "20px"}}>
                <input type="date" id="birthDate" name="birthDate" value={values.birthDate} onChange={handleChange} required />
                <label htmlFor="birthDate">Birth Date</label>
        </div>
        <CreatableSelect
          isClearable
            isMulti
            onChange={handleAllergiesChange}
            options={allergies}
            placeholder="Allergies"
            defaultValue={allergiesDefaultValue}
      />
        <CreatableSelect
          isClearable
            isMulti
            onChange={handleMedicationsChange}
            options={medications}
            placeholder="Medications"
      />
        {button}
    </form>
    )
}
