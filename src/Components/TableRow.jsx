function TableRow(props){

    let onDelete = ()=>{
        props.onDelete(props.id);
    }
    return(
        <tr>
              <td> {props.title}</td>
              <td> {props.date}</td>
              <td>{props.value} </td>
              <td colSpan="2">{props.description} </td>
              <td className="text-right"><a className="delete" onClick={onDelete}>
                <i className="fa fa-trash-o"
                    aria-hidden="true"></i>
                        </a></td>
            </tr>
    );
}
export default TableRow