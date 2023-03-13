import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIncrement = createAsyncThunk(
  'counter/fetchIncrement',
  async (value) => {
    const response = await axios.put('/counter/increment', { value: value });
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchIncrement.fulfilled]: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

// 만들어놓은 reducers들은 action에 저장되어 꺼내쓸 수 있음
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
