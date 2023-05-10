import { defineEventHandler } from 'h3';

const list = defineEventHandler(async (event) => {
  let p1 = {
    name: "Shubham Pankaj Chavan",
    email: "piyush123@gmail.com",
    status: true
  };
  let p2 = {
    name: "Satyam Mourya",
    email: "piyu@gmail.com",
    status: true
  };
  let p3 = {
    name: "Janavi Singh",
    email: "piyu@gmail.com",
    status: false
  };
  let p4 = {
    name: "Ashish Dongle",
    email: "piyu@gmail.com",
    status: false
  };
  let p5 = {
    name: "Piyush Patil",
    email: "piyu@gmail.com",
    status: true
  };
  let list = [p1, p2, p3, p4, p5];
  let review = [
    {
      "id": "122",
      "centre": 1,
      "rating": 5
    },
    {
      "id": "134",
      "centre": 1,
      "rating": 3
    },
    {
      "id": "214",
      "centre": 1,
      "rating": 4
    }
  ];
  return { list, review };
});

export { list as default };
//# sourceMappingURL=list.mjs.map
