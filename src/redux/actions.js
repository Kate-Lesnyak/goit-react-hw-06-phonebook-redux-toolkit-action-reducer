import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction('contact/addContact', ({ name, number }) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contact/deleteContact');

export const setFilterValue = createAction('filter/setFilterValue');
