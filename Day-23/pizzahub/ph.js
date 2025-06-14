
let itemName, itemPrice, addOnName, addOnPrice;

function getShopIds() {
  const endpoint = "shops";
  return query(endpoint);
}

function getPizzaList(shopId) {
  const endpoint = `pizzas?shopId=${shopId}`;
  document.getElementById("store").textContent = `Store: ${shopId}`;
  return query(endpoint);  
}

function getMyPizzaWithAddOn(pizzaList, type, name) {
  const myPizza = pizzaList.find(pizza => pizza.type === type && pizza.name === name);
  const endpoint  = `beverages?pizzaId=${myPizza.id}`;

  document.getElementById("itemName").textContent = `${myPizza.name} (${myPizza.type})`;
  document.getElementById("itemPrice").textContent = `${myPizza.price} ${myPizza.unit}`;

  return query(endpoint);
}


function performOrderPizza(result) {
  console.log(result);
  
  const endpoint = `api/order`
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      pizzaId: result.pizzaId,
      beverageId: result.id
    })
  }
  document.getElementById("addOnName").textContent = `${result.name} (add-on)`;
  document.getElementById("addOnPrice").textContent = `${result.price} ${result.unit}`;
  document.getElementById("add-on").textContent = `Add-On: ${result.name}`;

  return query(endpoint, options);
}

function confirmMessage(type, name, createdAt) {
  const text = `Your order of ${type} ${name} has been placed at ${new Date(createdAt)} !`
  console.log(text);
  document.getElementById("order").innerText = `Order: ${text}`;
}

function OrderPizza(type, name) {
  getShopIds() //returns shop id promise and resolve by next then
    .then(shopIds => {
      let shopId;
      for(key in shopIds) {
        shopId = shopIds[key] === false ? key : key;
      }
      // console.log(shopId); // PizzaHut
     return getPizzaList(shopId) //returns shop promise by id and resolve by next then
    })
    .then(pizzaList => getMyPizzaWithAddOn(pizzaList, type, name))
    .then(pizzaWithAddOn => performOrderPizza(pizzaWithAddOn[0]))
    .then(order => confirmMessage(type, name, order.createdAt))
    .catch(error => console.error(error))
}

// call orderPizza
OrderPizza("veg", "Margherita")