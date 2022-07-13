import { useRef } from "react";
import ExpensesModel from "../Model/expensesModel";
import InputForm from "./InputForm";

function Form(props){

  let titleRef = useRef();
  let datelRef = useRef();
  let valueRef = useRef();
  let descrRef = useRef();

  let onSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1000);
    let expensesModel = new ExpensesModel(id, titleRef.current.value, datelRef.current.value, valueRef.current.value, descrRef.current.value);
    props.onExpenses(expensesModel);

  }
    return (
        <form className="row" onSubmit={onSubmit}>
          <InputForm
          type="text"
          title="Title"
          classInput="addTitle"
          ref={titleRef}
          />

          <InputForm
          type="date"
          title="Date"
          classInput="addDate"
          ref={datelRef}

          />

          <InputForm
          type="text"
          title="Value"
          classInput="addValue"
          ref={valueRef}

          />

          <InputForm
          type="text"
          title="Description"
          classInput="addDescrption"
          ref={descrRef}
          />

          <div className="mb-3 col-md-12 text-right">
            <button type="submit" className="btn btn-primary addBtn">Add</button>
          </div>
        </form>
    );
}
export default Form;