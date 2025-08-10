async function getOrder(orderId) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(orderId === "123") {
        resolve({id: "123", product: "Book", status: "processing"})
      } else {
        reject("Order ID not found!")
      }
    }, 1000);
  });
}

async function getTrackingInfo(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!order?.id) {
        reject("No order ID found!")
      } else {
        resolve({ orderId: order.id, location: "Warehouse", eta: "2 days"})
      }
    }, 1000);
  })
}

async function trackOrder(orderId) {
  try {
    const order = await getOrder(orderId);
    const tracking = await getTrackingInfo(order);
    console.log(`Tracking Order: ${tracking.orderId}`);
    console.log(`Current Location: ${tracking.location}`);
    console.log(`Estimated time: ${tracking.eta}`);
    
  } catch (error) {
    console.error("Error:", error);
  }
}

trackOrder("123")
