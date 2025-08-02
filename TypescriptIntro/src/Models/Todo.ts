class Todo {
    id : string;
    text : string;

    constructor(textpart : string)
    {
        this.text = textpart;
        this.id = new Date().toISOString()
    }
}

export default Todo