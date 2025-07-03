import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/contacts");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async ({ name, number }, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", { name, number });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
