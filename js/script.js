const tickets = [
  {
    name: "Adult",
    description: "lorem ipsum dantre adult",
    price: 199,
  },
  {
    name: "Children",
    description: "lorem ipsum dantre children",
    price: 99,
  },
  {
    name: "Family",
    description: "lorem ipsum dantre family",
    price: 450,
  },
];

const container = document.querySelector(".container-tickets");

tickets.forEach(tickets => {
    container.innerHTML +=`<div class="tickets"><h1>${tickets.name}</h1>
    ${tickets.description}
    ${tickets.price}
    </div>`;
})
   




