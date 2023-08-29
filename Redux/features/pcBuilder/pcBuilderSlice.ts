import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface pcBuilderItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface pcBuilder {
  processor: pcBuilderItem;
  ram: pcBuilderItem;
  motherboard: pcBuilderItem;
  storageDevice: pcBuilderItem;
  powerSupplyUnit: pcBuilderItem;
  monitor: pcBuilderItem;
  other: pcBuilderItem;
  total: number;
  count: number;
}

const initialState: pcBuilder = {
  processor: {
    id: "",
    name: "",
    price: 0,
    image: "",
  },
  ram: {
    id: "",
    name: "",
    price: 0,
    image: "",
  },
  motherboard: {
    id: "",
    name: "",
    price: 0,
    image: "",
  },
  storageDevice: {
    id: "",
    name: "",
    price: 0,
    image: "",
  },
  powerSupplyUnit: {
    id: "",
    name: "",
    price: 0,
    image: "",
  },
  monitor: {
    id: "",
    name: "",
    price: 0,
    image: "",
  },
  other: {
    id: "",
    name: "",
    price: 0,
    image: "",
  },
  total: 0,
  count: 0,
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    setProcessor: (state, action: PayloadAction<pcBuilder["processor"]>) => {
      state.processor = action.payload;
    },
    setRam: (state, action: PayloadAction<pcBuilder["ram"]>) => {
      state.ram = action.payload;
    },
    setMotherboard: (
      state,
      action: PayloadAction<pcBuilder["motherboard"]>
    ) => {
      state.motherboard = action.payload;
    },
    setStorageDevice: (
      state,
      action: PayloadAction<pcBuilder["storageDevice"]>
    ) => {
      state.storageDevice = action.payload;
    },

    setPowerSupplyUnit: (
      state,
      action: PayloadAction<pcBuilder["powerSupplyUnit"]>
    ) => {
      state.powerSupplyUnit = action.payload;
    },

    setMonitor: (state, action: PayloadAction<pcBuilder["monitor"]>) => {
      state.monitor = action.payload;
    },

    setOther: (state, action: PayloadAction<pcBuilder["other"]>) => {
      state.other = action.payload;
    },

    setTotal: (state, action: PayloadAction<pcBuilder["total"]>) => {
      state.total += action.payload;
    },

    setCount: (state) => {
      state.count += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProcessor,
  setRam,
  setMotherboard,
  setStorageDevice,
  setPowerSupplyUnit,
  setMonitor,
  setOther,
  setTotal,
  setCount,
} = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
