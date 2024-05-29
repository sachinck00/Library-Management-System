import React from 'react'
import './App.css'
import Search from './components/Search'
function App() {
  const searchData = "dsnkjdn";
  const handleOnSearchChange = (searchData) =>{
     console.log(searchData);
  }   
  return (
    <>
       <div className='container'>
         <Search onSearchChange={handleOnSearchChange}/>
       </div>
      
    </>
  );
}

export default App
