import { getRemoteData,getAction } from './store/actions';
import { connect } from 'react-redux';
import axios from 'axios';

const App = (props) => {

  // const handleButton = async () => {
  //   const apiURL = 'https://api-server-0.herokuapp.com/todo';
  //   let results = await axios.get(apiURL);
  //   props.getAction(results.data);
  // }

  return (
    <>
      {/* <button onClick={handleButton}>Get my TODO List</button> */}
      <button onClick={() => props.getRemoteData()}>Get my TODO List</button>
      <section>
        {props.todos.map((item, i) => {
          return (
            <div key={i}>
              {/* ,"assignee":"Omar","text":"No idea","difficulty":4 */}
              <h3>{item.text}</h3>
              <p>{item.assignee}</p>
              <p>{item.difficulty}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = { getRemoteData,getAction };

export default connect(mapStateToProps, mapDispatchToProps)(App);