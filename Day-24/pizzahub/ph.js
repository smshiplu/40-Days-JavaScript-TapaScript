
let pizzaInfo, beverageInfo;

function getShopIds() {
  const endpoint = "shops";
  const response  = query(endpoint);
  return response.then(data => {    
    for (const key in data) {
      if (data[key] !== true) {
       continue;
      }
      return data[key] === true ? key : key
    }
  });  
  // return query(endpoint);
}

function getPizzaList(shopId) {
  const endpoint = `pizzas?shopId=${shopId}`;
  document.getElementById("store").textContent = `Store: ${shopId}`;
  return query(endpoint);  
}

function getMyPizzaWithAddOn(pizzaList, type, name) {

  const myPizza = pizzaList.find(pizza => pizza.type === type && pizza.name === name);
  pizzaInfo = myPizza;

  const endpoint  = `beverages?pizzaId=${myPizza.id}`;
  return query(endpoint);
}


function performOrderPizza(result) {
  beverageInfo = result;
  
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
  return query(endpoint, options);
}

function confirmMessage(type, name, createdAt) {
  const text = `Your order of ${type} ${name} has been placed at ${new Date(createdAt)} !`
  console.log(text);
  document.getElementById("order").innerText = `Order: ${text}`;
}

function showOrderInDOM(pizzaInfo, beverageInfo) {
  document.getElementById("itemName").textContent = `${pizzaInfo.name} (${pizzaInfo.type})`;
  document.getElementById("itemPrice").textContent = `${pizzaInfo.price} ${pizzaInfo.unit}`;

  document.getElementById("addOnName").textContent = `${beverageInfo.name} (add-on)`;
  document.getElementById("addOnPrice").innerHTML = `<del>${beverageInfo.price} ${beverageInfo.unit}</del>`;
  document.getElementById("add-on").textContent = `Add-On: ${beverageInfo.name}`;

  document.getElementById("overallSubtotal").textContent = `${parseInt(pizzaInfo.price) + parseInt(beverageInfo.price)} ${pizzaInfo.unit}`;
  document.getElementById("discountSubtotal").textContent = `${parseInt(beverageInfo.price)} ${pizzaInfo.unit}`;
  document.getElementById("totla").textContent = `${(parseInt(pizzaInfo.price) + parseInt(beverageInfo.price) - parseInt(beverageInfo.price))} ${pizzaInfo.unit}`;
}

async function OrderPizza(type, name) {
  try {
    const shopIds = await  getShopIds() 
    const pizzaList = await getPizzaList(shopIds);
    const pizzaWithAddOn = await getMyPizzaWithAddOn(pizzaList, type, name);
    const order = await performOrderPizza(pizzaWithAddOn[0]);
    confirmMessage(type, name, order.createdAt);
    showOrderInDOM(pizzaInfo, beverageInfo);
  } catch (error) {
    console.log(`Bad luck! No Pizza for you today ${error}`);
  }
}

// call orderPizza
OrderPizza("veg", "Margherita")