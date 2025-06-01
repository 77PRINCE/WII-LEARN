
  // Simulate token update (you can fetch from server later)
  let tokens = 0;
  const tokenValue = document.querySelector('.token-counter .value');

  function addTokens(amount) {
    tokens += amount;
    tokenValue.textContent = tokens;
  }

  // Example usage:
  // Simulate earning 10 tokens after 3 seconds
  setTimeout(() =>3{
    addTokens(10);
  }, 3000);

