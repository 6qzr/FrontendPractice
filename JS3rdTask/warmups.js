const employee = { name: "Sara", manager: null };

console.log(employee.manager);

const settings = {  }


class Employee {
    name;
    role;

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    greeting() {
        console.log(`Welcome, ${this.name}`);
    }
}

class Manager extends Employee {
    teamSize;
    constructor(name, role, teamSize) {
        super(name, role);
        this.teamSize = teamSize;
    }

    greeting() {
        console.log(`Welcome, ${this.name}
            Team Size: ${this.teamSize
            }`);
    }
}