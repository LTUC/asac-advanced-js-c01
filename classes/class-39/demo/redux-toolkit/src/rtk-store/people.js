import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState:[],
    reducers: {
        add(state,action) {
            console.log('action >>>>> ',action);
            state.push(action.payload);
        },
        remove(state,action) {
            return state.filter(p=> p!==action.payload);
        }
    } 
})

export const {add,remove} = peopleSlice.actions;
export default peopleSlice.reducer;


export const getPeople = () => async (dispatch,state) => {
    let result = await fetch('https://swapi.dev/api/people');
    let peopleData = await result.json();
    console.log('data from api >>', peopleData);
    peopleData.results.forEach(item=> dispatch(add(item.name)))

}