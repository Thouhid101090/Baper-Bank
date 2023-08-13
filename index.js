document.getElementById('but').addEventListener('click',function(){
    const email=document.getElementById('email').value;
    const password=document.getElementById('pass').value;

    if(email==="thouhid@gmail.com" && password === "123"){
        window.location.href = "bank.html";
    }else{
      alert("its not your baper bank")
    }
    
});
