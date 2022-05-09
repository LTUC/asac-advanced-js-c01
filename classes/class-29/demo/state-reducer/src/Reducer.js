const initialState = {
    people: [],
    count: 0
}


export default function peopelReducer(state=initialState, action) {
    const {type,payload} = action;

    switch(type) {
        case 'ADD_PERSON':
            const count = state.count + 1;
            const people = [...state.people,payload];
            // return {count:count2,people:people2}
            return {count,people};
        case 'REMOVE_PERSON':
            const decCount = state.count - 1;
            const peopleWithoutName = state.people.filter((person)=> person !== payload);
            return {count:decCount, people: peopleWithoutName};
        default:
            return state;
    }    

}

export const addAction = (name) =>{
    console.log("inside the addAction, name>>  ",name);
    return {
        type: 'ADD_PERSON',
        payload: name
    }
}

export const removeAction = (name) =>{
    console.log("inside the removeAction, name>>  ",name);
    return {
        type: 'REMOVE_PERSON',
        payload: name
    }
}

// export default {addAction,removeAction,peopelReducer}