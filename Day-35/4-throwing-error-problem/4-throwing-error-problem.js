function processPayment(paymentData) {
  
  try {
    if(!paymentData.amount) throw "Invalid Amount!";
    if(!paymentData.method) throw new Error("Invalid Method!");

    simulatePayment(paymentData);
  } catch (error) {
    console.error("Error:", error instanceof Error ? error.message : error);
  } finally {
    console.log("Payment Process Logged!");
  }
}

function simulatePayment(data) {
  //Simulate random failure
  if(Math.random() > 0.5) {
    throw new Error("Payment gateway timeout");
  }
}

// processPayment({amount: 100, method: "card"});
// processPayment({amount: 100});
processPayment({method: "card"});