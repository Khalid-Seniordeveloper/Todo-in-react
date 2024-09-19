import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { collection, addDoc ,getDocs  } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"; 
import { db } from './Configuration/Firebase Config/Firebaseconfig';
function App() {
 
// add data 

const [todos , settodos] = useState([]);
const val = useRef()

const addTodo = async(event)=>{
event.preventDefault();
// todo.push(val.current.value);
// settodo([...todo])


try {
  const docRef = await addDoc(collection(db, "todo"), {
    todo: val.current.value

  });
  console.log("Document written with ID: ", docRef.id);
  val.current.value = '';

}

catch (e) {
  console.error("Error adding document: ", e);
}
}


async function render(){
  const querySnapshot = await getDocs(collection(db, "todo"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  todos.push(doc.data());
  settodos([...todos])
  console.log(todos);
  
});
}

useEffect(() => {
  render(); // Fetch todos on component mount
}, []);


  return(

    
    <>
  
<form onSubmit={addTodo}>

<input type="text"  placeholder='Add todo' ref={val} />
<button>ADD</button>




</form>


<ul>
  
  {todos.map((item , index)=> {
  
  return <div key={index}>
  
  <li>{item.todo}</li>

  </div>
  
  
  
  })}
  
  
  </ul>


    </>


  )
  
}

export default App
