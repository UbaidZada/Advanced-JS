(async function(){

await fetch('recepies.json').then((response)=> response.json()).then((recepiesdata) =>{

console.log(recepiesdata);

let searchField = document.getElementById('searchbar');
let bth = document.getElementById('submit');
let list = document.getElementById('mylist');

function dislpay(result){
list.innerHTML = "";
result.forEach(value => {
    // console.log(value)
list.innerHTML += `
<li>
<h2> ${value.title}</h2>
<p> ${value.description}</p>
</li>

`;

});

}

function search(){

let query = searchField.value;
let result = recepiesData.filter(function(recipe) {

return (

    recipe.title.tolowerCase().include(query) || 
    recipe.ingredients.join("").tolowerCase().includes(query)

);

});

console.log(result)
displey(result);

}

btn.addEventListener("click" , search)


});

}

)()






