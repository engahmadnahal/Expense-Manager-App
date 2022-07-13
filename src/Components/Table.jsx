import TableRow from "./TableRow";

function Table(props){

  let onDelete = (id)=>{
    props.onDelete(id);
  }
    return (
    <div className="row mt-5 mb-5">
      <div className="custom-card ">
        <table className="table ">
          <thead>
            <tr>
              <th> Title</th>
              <th> Date</th>
              <th>value</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.expensesItems.map((e)=>{
              return <TableRow
              key={e.id}
              id={e.id}
              title={e.title}
              date={e.date}
              value={e.value}
              description={e.description}
              onDelete={onDelete}
            />
              
            })}
            
            
          </tbody>
        </table>
      </div>
    </div>
    );
}
export default Table