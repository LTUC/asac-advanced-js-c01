import {useReducer} from 'react';
import peopelReducer, {addAction,removeAction} from './Reducer';

const initialState = {
  people: [],
  count: 0
}

function App() {

  const [state,dispatch] = useReducer(peopelReducer,initialState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('e.target >>', e.target);
    const name = e.target.person.value;
    dispatch(addAction(name));
    e.target.reset();
  }

  return (
    <>
      <h2>People</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="person" />
        <button>Add person</button>
      </form>

      <ul>
        {
          state.people.map((person,idx)=>{
            return <li key={idx} onClick= {()=>{dispatch(removeAction(person))}}>{person}</li>
          })
        }
      </ul>

    </>

  );
}

export default App;
