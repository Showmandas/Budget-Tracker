
// for chocolate 
document.getElementById('KitkatBuyBtn').addEventListener('click',function(){
    const kitkatInput=document.getElementById('kitkatInput');
    const kitkatValue=parseInt(kitkatInput.value);
    const kitkatCost=kitkatValue * 25;
    getId('chocolate',kitkatCost);
    totalCost();
})

// for cheese puffs 
document.getElementById('CheeseBuybtn').addEventListener('click',function(){
    const cheeseInput=document.getElementById('cheeseInput');
    const cheeseValue=parseInt(cheeseInput.value);
    const cheeseCost=cheeseValue * 15;
    getId('cheese',cheeseCost);
    totalCost();
})

// for sprite 
document.getElementById('SpriteBuyBtn').addEventListener('click',function(){
    const spriteInput=document.getElementById('spriteInput');
    const spriteValue=parseInt(spriteInput.value);
    const spriteCost=spriteValue * 25;
    getId('sprite',spriteCost);
    totalCost();
})

function getId(id,value){
    document.getElementById(id).innerText=value;
}


// Total cost function 
function totalCost(){
    const chocolate=document.getElementById('chocolate').innerText;
    const cheese=document.getElementById('cheese').innerText;
    const sprite=document.getElementById('sprite').innerText;

    const result=parseInt(chocolate) + parseInt(cheese) + parseInt(sprite);
    document.getElementById('total').innerText=result;
}