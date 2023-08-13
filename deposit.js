
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('diposit-field');
    const newDepositAmountSring  = depositField.value;
    const newDepositAmount  = parseFloat(newDepositAmountSring);
    
 
    const depositTotalElement = document.getElementById('deposit-total');
    const preDepositTotalString = depositTotalElement.innerText;
    const preDepositTotal = parseFloat(preDepositTotalString);

    const currentDepositTotal = newDepositAmount + preDepositTotal;

    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = "";
})