function showCart() {
    let message = "Your Cart:\n";
    cart.forEach((item, index) => {
      message += ${index + 1}. ${item.name} - ${item.price}\n;
    });
    alert(message);
  }