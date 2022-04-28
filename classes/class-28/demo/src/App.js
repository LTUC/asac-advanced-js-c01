import { useState } from 'react';
import Content from './components/content'

function App() {

  const [name, setName] = useState('Salam')
  const [age, setAge] = useState(20)
  const [state, setSTATE] = useState('ACTIVE')
  
  const alertMessage = () => {
    alert('Alert from another page');
  }

  const updateName = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <Content 
        testData= {name}
        alertMessage={alertMessage}
        update={updateName}
      />
    
      <Content 
        testData= {age}
        alertMessage={alertMessage}
      />

      <Content 
        testData= {name}
        alertMessage={alertMessage}
      />
    </>


  )
}

export default App;