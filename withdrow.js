document.getElementById('btn-withdrow').addEventListener('click',function(){
    const wihtdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountSring = wihtdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountSring);
   

    const WithdrowAmountElement = document.getElementById('withdrow-total');
    const previousWithdrowAmountString = WithdrowAmountElement.innerText;
    const previousWithdrowAmount = parseFloat(previousWithdrowAmountString);

    const currentWithdrowTotal= newWithdrowAmount+previousWithdrowAmount;
    WithdrowAmountElement.innerText = currentWithdrowTotal;

    const TotalBalanceField = document.getElementById('balance-total');
    const previousBalanceTotalString = TotalBalanceField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    TotalBalanceField.innerText = currentBalanceTotal;

    wihtdrowField.value = '';
})