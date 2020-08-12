console.clear();

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Andy",
//   age: 24,
//   hobbies: ["Music", "Chatting"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Andy",
  age: 24,
  hobbies: ["Music", "Chatting"],
  role: Role.ADMIN,
};

// person.role.push("admin"); // allowed
// person.role[1] = 10; // not allowed

// person.role = [0, 'admin', 'user']

let favoriteACtivities: string[];
favoriteACtivities = ["Sport"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
