function deleteCustomerById(customers, value) {
  const index = customers.findIndex((customer) => customer.id === value);
  if (index > -1) {
    customers.splice(index, 1);
  }
  return customers;
}

const customers = [
  { id: 1, name: "Jhon" },
  { id: "2", name: "Jack" },
  { id: 2, name: "Jim" },
  { id: 3, name: "Jhonny" },
  { id: "3", name: "Julia" },
];

console.log(deleteCustomerById(customers, "3"));
