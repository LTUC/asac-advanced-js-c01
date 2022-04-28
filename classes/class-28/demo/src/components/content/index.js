import {useEffect, useState} from 'react';
import axios from 'axios';

import './content.scss';
const Content = (props) => {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(['waleed']);

  const fetchData = () => {
    axios.get('https://reqres.in/api/users')
      .then((res) => res.data)
      .then((info) => setData(info.data));
      console.log(data)
      console.log(1)
  }

  useEffect(() => {
    fetchData()
  }, [total]);

  const handelCount = () => {
    setCount(count + 1)
    // props.renderData(res.data)
    console.log(data)
  }

  return (
    <>
      <h1>Hello {total}</h1>
      <button onClick={handelCount}>count</button>
      {
        data &&
          data.map((item) => {
            return <p>{item.first_name} {item.last_name}</p>
          })
      }
    </>
  );
}

export default Content;