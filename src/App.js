import { UserList } from "./pages/list";
import {useEffect, useState} from 'react';
import './App.scss'
// import { InputList } from "./component/inputList";
import { ClimbingBoxLoader } from 'react-spinners';
import { Registr } from "./pages/registr";
import {Route, Routes, useNavigate } from 'react-router-dom';



function App() {
  const [list, setList] = useState([
    { firstName: 'Arman', lastName: 'Aghayan', Email: 'aghayanarman10@gmail.com', age: 21, id: 1 },
  ]);

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <ClimbingBoxLoader color="#DC3545" />
        <h2>Loading...</h2>
      </div>
    );
  }

  return (

    <div className="App">
      
      {/* <UserList list={list} onDelete={handleDelete} /> */}
      <Routes>
          <Route path="/" element={<Registr/>}/>
          <Route path="/list" element={<UserList list={list} setData={setList}/>}/>
      </Routes>     
    </div>
  
  );
}

export default App;



