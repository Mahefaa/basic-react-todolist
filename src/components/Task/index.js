export default class Task {
    id;
    name;
    status;

    constructor(name, status = "TODO") {
        this.id = Date.now();
        this.name = name;
        this.status = status;
    }
}