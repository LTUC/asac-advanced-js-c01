import Auth from './components/auth';
import LoginProvider from './components/context';
import Login from './components/login';

function App(props) {
  return(
    <LoginProvider>
      <Login/>
      <Auth capability="read">
          <div>
            <h2>List of items</h2>
            <ul>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
            </ul>
          </div>
      </Auth>
      <Auth capability="update">
          <button>Update</button>
      </Auth>
      <Auth capability="delete">
          <button>Delete</button>
      </Auth>
      <Auth capability="create">
          <button>Create</button>
      </Auth>
    </LoginProvider>
  )
}

export default App;
