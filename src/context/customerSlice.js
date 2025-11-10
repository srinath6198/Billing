import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../context/axiosConfig"; // ✅ using your interceptor

// 🧠 Async thunk to fetch all customers
export const fetchCustomers = createAsyncThunk(
  "customer/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/customers");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching customers");
    }
  }
);

// 🧠 Async thunk to create a new customer
export const createCustomer = createAsyncThunk(
  "customer/create",
  async (customerData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/customers", customerData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error creating customer");
    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    list: [],
    selectedCustomer: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = action.payload;
    },
    clearCustomerError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // ✅ Fetch customers
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ✅ Create customer
    builder
      .addCase(createCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedCustomer, clearCustomerError } = customerSlice.actions;
export default customerSlice.reducer;
