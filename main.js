// for chocolate 
document.getElementById('KitkatBuyBtn').addEventListener('click',function(){
    const kitkatInput=document.getElementById('kitkatInput');
    const kitkatValue=parseInt(kitkatInput.value);
    const kitkatCost=kitkatValue * 25;
    getId('chocolate',kitkatCost);
    totalCost();
    getQuantity('chocoQuantity',kitkatInput.value);
})

// for cheese puffs 
document.getElementById('CheeseBuybtn').addEventListener('click',function(){
    const cheeseInput=document.getElementById('cheeseInput');
    const cheeseValue=parseInt(cheeseInput.value);
    const cheeseCost=cheeseValue * 15;
    getId('cheese',cheeseCost);
    totalCost();
    getQuantity('cheeseQuantity',cheeseInput.value);

})

// for sprite 
document.getElementById('SpriteBuyBtn').addEventListener('click',function(){
    const spriteInput=document.getElementById('spriteInput');
    const spriteValue=parseInt(spriteInput.value);
    const spriteCost=spriteValue * 25;
    getId('sprite',spriteCost);
    totalCost();
    getQuantity('spriteQuantity',spriteInput.value);
})

function getId(id,value){
    document.getElementById(id).innerText=value;
}

function getInnerTxt(ids){
const getInnerTxt=document.getElementById(ids).innerText;
return parseInt(getInnerTxt);
}

function getQuantity(ids,val){
   const getQuantity= document.getElementById(ids).innerText=val;
   return getQuantity;
    
}
// Total cost function 
function totalCost(){
    const chocolate=getInnerTxt('chocolate');
    const cheese=getInnerTxt('cheese');
    const sprite=getInnerTxt('sprite');

    const result=parseInt(chocolate) + parseInt(cheese) + parseInt(sprite);
    getId('total',result);
}


// discount function
document.getElementById('discountBtn').addEventListener('click',function(){
    const couponApplyBtn=document.getElementById('couponApplyBtn');
    if(couponApplyBtn.value == '007'){
        const total=getInnerTxt('total');
        const totalCost=total-parseInt(total) * 0.1;
        document.getElementById('totalCost').innerText=totalCost;
    }else{
        alert('Wrong Coupon Code.Pls give Right Coupon Code!!');
    }
})
