import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getCat } from "../api/api";


// export const fetchCat = createAsyncThunk(
//     "cats/getCats",
//     ()=>{
//       return getCat().then(res=>res)
//     }
//   )

  const catSlice = createSlice({
    name: "cat",
    initialState: {cats:[], loading:""},
    reducers: {
        GET_CAT:(state,action)=>{state.cats.push(action.payload)},
        SET_LOADING:(state)=>{state.loading="Loading..."},
        SET_LOADED:(state)=>{state.loading=""}
    },
    // extraReducers:(builder)=>{
    //   builder.addCase(fetchCat.fulfilled,(state,action)=>{
    //       state.loading = ""
    //       state.cats.push(action.payload)
    //   })
    //   builder.addCase(fetchCats.pending,(state,action)=>{
    //       state.loading = "loading..."
    //   })
    // }
  })
  export const { GET_CAT, SET_LOADED ,SET_LOADING} = catSlice.actions

  export default catSlice.reducer

  