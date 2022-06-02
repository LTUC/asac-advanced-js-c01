import superagent from 'superagent';

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

const apiURL = 'https://api-server-0.herokuapp.com/todo';

export const getRemoteData = () =>
    (dispatch, state) => {
        return superagent.get(apiURL).then(result => {
            dispatch(getAction(result.body))
        })
    }



// export const getRemoteData = () => {
//     let results = superagent.get(apiURL).then(result => {
//        return result.body
//     })

//     dispatch(getAction(results))
// }