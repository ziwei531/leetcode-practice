class User {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    printName() {
        console.log("Name: " + this._name);
    }

    printAge() {
        console.log("Age: " + this._age);
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set setName(name: string) {
        this._name = name;
    }

    set setAge(age: number) {
        this._age = age;
    }
}

class Admin extends User {
    private _role: string;

    constructor(name: string, age: number, role: string) {
        super(name, age);
        this._role = role;
    }

    printRole() {
        console.log("Role: " + this._role);
    }

    get role() {
        return this._role;
    }

    set setRole(role: string) {
        this._role = role;
    }
}

let kedar = new User("Kedar", 12);
let admin = new Admin("Kayle", 13, "Admin");

// kedar.printName();
// kedar.printAge();
// kedar.setAge = 13;
// kedar.printAge();

admin.printName();
admin.printAge();
admin.printRole();
