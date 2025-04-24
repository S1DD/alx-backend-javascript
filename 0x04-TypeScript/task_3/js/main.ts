/// <reference_path="crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from "./interface";

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
    firstName: 'Guillaume', 
    lastName: "Salva",
};

// Insert the wor and get the new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated RowElement object with an age field set to 23
const updatedRow: RowElement = {firstName: 'Guillaume,', lastName: 'Salva', age:23};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID)