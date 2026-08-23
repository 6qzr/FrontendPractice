const employee = { name: "Sara", manager: null };

console.log(employee.manager?.name);

const settings = {  }

const theme = settings.theme ?? "light";

console.log(theme);


const discount = 0;

console.log(discount || 10); // checks if discount (0) is a falsy value => 10
console.log(discount ?? 10); // falls back if the value is null or undefined => 0


class Employee {
    name;
    role;

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    greeting() {
        return(`Welcome, ${this.name}`);
    }
}

class Manager extends Employee {
    teamSize;
    constructor(name, role, teamSize) {
        super(name, role);
        this.teamSize = teamSize;
    }

    greeting() {
        return(`Welcome, ${this.name}
            Team Size: ${this.teamSize
            }`);
    }
}

const employee1 = new Employee(
    "Sara",
    "Developer"
);

const manager1 = new Manager(
    "Ahmed",
    "Engineering Manager",
    8
);

console.log(employee1.greeting());
console.log(manager1.greeting());