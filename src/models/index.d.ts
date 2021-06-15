import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Firestation {
  readonly id: string;
  readonly address?: string;
  readonly station?: string;
  readonly People?: (Person | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Firestation>);
  static copyOf(source: Firestation, mutator: (draft: MutableModel<Firestation>) => MutableModel<Firestation> | void): Firestation;
}

export declare class Person {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly adddress?: string;
  readonly city?: string;
  readonly zip?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly firestationID?: string;
  readonly medicalrecordID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

export declare class MedicalRecord {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly birthDate?: string;
  readonly medications?: (string | null)[];
  readonly allergies?: (string | null)[];
  readonly People?: (Person | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MedicalRecord>);
  static copyOf(source: MedicalRecord, mutator: (draft: MutableModel<MedicalRecord>) => MutableModel<MedicalRecord> | void): MedicalRecord;
}