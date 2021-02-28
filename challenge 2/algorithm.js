var formula ="H202";
var formula_split = formula.split('');
console.log(formula_split);


formula_split.map(function(value,key){
    console.log(value+ ' :'+key); 
});