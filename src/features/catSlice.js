import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getCat } from "../api/api";


export const fetchCat = createAsyncThunk(
    "cats/getCats",
    ()=>{
      return getCat().then(res=>res)
    }
  )

  const catSlice = createSlice({
    name: "cat",
    initialState: {cats:[], loading:""},
    reducers: {
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchCat.fulfilled,(state,action)=>{
          state.loading = ""
          state.cats.push(action.payload)
      })
      builder.addCase(fetchCat.pending,(state,action)=>{
          state.loading = "loading..."
      })
    }
  })

  export default catSlice.reducer

  