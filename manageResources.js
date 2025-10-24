// Array to store resource objects
let resources = [];

function add() {
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const location = document.getElementById("location");
  const capacity = document.getElementById("capacity");
  const image = document.getElementById("image");

  const resourceForm = {
    name: name.value,
    description: description.value,
    location: location.value,
    capacity: capacity.value,
    image: image.files[0] ? image.files[0].name : "No image"
  };

  resources.push(resourceForm);
  console.log(resources);

  Display();
}

function Display(){
    const tableBody = document.getElementById("resourceTableBody");
    tableBody.innerHTML = "";

    for(let i = 0; i < resources.length; i++){
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
        <td>${resources[i].name}</td>
        <td>${resources[i].location}</td>
        <td>${resources[i].capacity}</td>
        <td>${resources[i].image}</td>
        <td>
            <button onclick="editResource(${i})">Edit</button>
            <button onclick="deleteResource(${i})">Delete</button>
        </td>
        `;

        tableBody.appendChild(newRow);
    }
    
    document.getElementById("resourceForm").reset();
}

function deleteResource(index) {
    console.log("deleteResource");
    resources.splice(index, 1);
    console.log(resources);
    Display();
}

function editResource(index) {
    const resource = resources[index];
    const newName = prompt("Edit name:", resource.name);
    const newLocation = prompt("Edit location:", resource.location);
    const newCapacity = prompt("Edit capacity:", resource.capacity);
    
    if (newName && newLocation && newCapacity) {
        resources[index].name = newName;
        resources[index].location = newLocation;
        resources[index].capacity = newCapacity;
        Display();
    }
}


