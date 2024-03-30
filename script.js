

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload= function()
{
    var data=request.response;
    var result=JSON.parse(data);
    // Task 1:Get all the countries from Asia continent /region using Filter function

    var res=result.filter((ele)=>ele.region==="Asia");
    var final = res.forEach((ele)=>console.log("region:",ele.name.common));
    
    // Task 2:Get all the countries with a population of less than 2 lakhs using Filter function

    let pop=result.filter((ele)=>ele.population>200000);
    let popfinal=pop.forEach((ele)=>console.log("population:",ele.name.common));

    // Task 3:Print the following details name, capital, flag, using forEach function

    let name=result.forEach((ele)=>console.log("name:",ele.name.common));
    let capital=result.forEach((ele)=>console.log("capital:",ele.capital));
    let flg=result.forEach((ele)=>console.log("flag:",ele.flag));

    // Task 4: The total population of countries using reduce function
    let c=[];
    let datas=result.forEach((ele)=>c.push(ele.population));
    let total=c.reduce((sum,i)=>{
        return sum+i;
    },0)
    console.log(total);
    
    // Task 5: Print the country that uses US dollars as currency.
    let currency=result.filter((ele)=>ele.currencies && ele.currencies.USD && ele.currencies.USD.name==="United States dollar");
    let country=currency.forEach((ele)=>console.log(ele.name.common));
        
}