import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../../featuresStore"

export interface LightHouseSlice {
  error: any;
}

const initialState: LightHouseSlice = {
  error: null,
}

export const lighthouseViewerSlice = createSlice({
  name: 'lighthouseViewer',
  initialState,
  reducers: {
    setLighthouseViewer: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value;
    },
  },
})

export const selectLighthouseViewer = (state: RootState) => state.lighthouseViewer;
export const { 
  setLighthouseViewer,
} = lighthouseViewerSlice.actions;
export default lighthouseViewerSlice.reducer;
