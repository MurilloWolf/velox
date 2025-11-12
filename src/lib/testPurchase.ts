// Function to simulate a purchase and redirect to the success page
function testPurchaseRedirect() {
  const testData = {
    purchaseId: "test_" + Date.now(),
    productName: "Planilha de Teste",
    buyerEmail: "teste@exemplo.com",
    driveLink:
      "https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit?usp=sharing",
    imageLink:
      "https://via.placeholder.com/800x600/d5fe46/000000?text=Planilha+de+Treinos",
  };

  const tokenData = {
    ...testData,
    timestamp: Date.now(),
  };

  const token = btoa(JSON.stringify(tokenData));
  const url = `/purchase-success?token=${encodeURIComponent(token)}`;

  console.log("URL de teste:", window.location.origin + url);

  window.location.href = url;

  return url;
}

export default testPurchaseRedirect;
