function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if(isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total
    const product2Total = document.getElementById(product + '-total');
    product2Total.innerText = productNumber * price;
    calculateTotal()
}

function getInputValue(product){
    const product1Input = document.getElementById(product + '-number');
    const product1Number = product1Input.value;
    return product1Number;
}

function calculateTotal(){
    const product1Total = getInputValue('product1') * 6000;
    const product2Total = getInputValue('product2') * 4000;
    const subTotal = product1Total + product2Total;
    // suppose tax 10%
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    
    // update On Html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('product1-plus').addEventListener('click', function(){
    updateProductNumber('product1', 6000, true);
});

document.getElementById('product1-minus').addEventListener('click', function(){
    updateProductNumber('product1', 6000,  false);
});


document.getElementById('product2-plus').addEventListener('click', function(){
    updateProductNumber('product2', 4000,  true);
});

document.getElementById('product2-minus').addEventListener('click', function(){
    updateProductNumber('product2', 4000,  false);
});