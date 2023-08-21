
let totalSum = 0;

function cardClick(target){
    let cardTitle = target.querySelector('.card-title').innerText;
    let orderSelection = document.getElementById('orderList');
    let li = document.createElement('li');
    li.innerText = cardTitle;
    orderSelection.appendChild(li);

    // get the price value:

    let cardPrice = target.querySelector('.cardPrice').innerText;
    let total = document.getElementById('priceTotal');
    let totalValue = parseFloat(cardPrice);
    totalSum += totalValue;
    total.innerText = totalSum;

    // Apply btn disable and enable

    let btnApply = document.getElementById('btnApply');
    if(totalSum>=200){
        btnApply.disabled = false;
    }else{
        btnApply.disabled = true;
    }

    // make btn disable and enable

    let btnMake = document.getElementById('btnMake');
    if(totalSum>0){
        btnMake.disabled = false;
    }else{
        btnMake.disabled = true;
    }

    // discount calculation 
    



    document.getElementById('btnApply').addEventListener('click', function(){
        let input = document.getElementById('applyInput').value;
        let totalElement = document.getElementById('discountTotal');
        let onlyDiscountValue = document.getElementById('onlyDiscount');
        
        console.log(input);
        
        if( input === "SELL200" ){
            let discountValue = (totalSum * 0.8).toFixed(2);
            totalElement.innerText = discountValue;
            onlyDiscountValue.innerText = (totalSum - discountValue).toFixed(2);
            
        }
        else{

            alert("Please Provide a Valid Code!!");
        }
    })

    

}








