class ExpensesModel{
    id
    title;
    description;
    value;
    date;

    constructor(id,title,description,value,date){
        this.id = id;
        this.title = title;
        this.description = description;
        this.value = value;
        this.date = date;
    }
}
export default ExpensesModel