import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  }, [])
  const {id, time, blogImage, authorImage, tags, name, publish, title} = data[0];
console.log(data[0])
  return (
    <div className="App">
      <button className='btn btn-secondary'>react</button>
      <img src={blogImage} alt="" />
      <img src={authorImage} alt="" />
      <p>{publish}</p>
      <p>{id}</p>
      <p>{time}</p>
      <p>{tags}</p>
      <p>{name}</p>
      <p>{title}</p>


    </div>
  )
}

export default App
