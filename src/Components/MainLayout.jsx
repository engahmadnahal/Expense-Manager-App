import { useState } from 'react';
import '../css/custom.css'
import expensesLogo from '../img/m1.png'
import Form from './Form';
import Header from './Header';
import Table from './Table';
function MainLayout(){

  let [expenses,setExpenses] = useState([]);
  let newExpenses = (newExpenses) => {
    setExpenses((prevValue)=>{
      console.log([newExpenses,...prevValue]);
      return [newExpenses,...prevValue]
    });
  }

  let onDelete = (id) =>{
    setExpenses((prevValue)=>{
      return prevValue.filter((e)=> e.id !== id);
    });
  }
    return (
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-6">
        <img src={expensesLogo} className="img-fluid" alt=""/>
      </div>
      <div className="col-sm-6 mt-5">
       <Header/>
        <Form onExpenses={newExpenses}/>
      </div>
    </div>

    <Table expensesItems={expenses} onDelete={onDelete}/>
  </div>
    );
}

export default MainLayout