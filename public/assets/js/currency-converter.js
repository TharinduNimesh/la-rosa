// Switch currency display
function switchCurrency(currency) {
    if (currency === currentCurrency) return;
    
    currentCurrency = currency;
    displayPricesInCurrency(currency);
    updateCurrencyButtonState();
    
    // Save preference
    localStorage.setItem('preferredCurrency', currency);
    
    // Dispatch currency changed event for other scripts
    document.dispatchEvent(new CustomEvent('currencyChanged', {
        detail: { currency: currency }
    }));
}