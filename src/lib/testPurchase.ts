// Function to simulate a purchase and redirect to the success page
function testPurchaseRedirect() {
  const testData = {
    purchaseId: "test_" + Date.now(),
    productName: "Planilha de Teste",
    buyerEmail: "teste@exemplo.com",
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
