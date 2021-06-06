// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Firestation, Person, MedicalRecord } = initSchema(schema);

export {
  Firestation,
  Person,
  MedicalRecord
};