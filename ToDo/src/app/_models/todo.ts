export class Todo {
    _id : number
    todo: String
    completada: boolean

    constructor(_id,todo, completada){
        this._id = _id
        this.todo = todo
        this.completada = completada
    }

}