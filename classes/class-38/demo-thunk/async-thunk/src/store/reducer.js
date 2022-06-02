
const initialState =[];

export default (state=initialState,action) =>{
    const {type,payload} = action;
    switch(type) {
        case 'GET':
            // you can edit or update the data here
            
            return payload;
        default:
            return state;
    }
}

