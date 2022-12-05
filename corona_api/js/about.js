function GetCritiCountries(){
    fetch('https://api.covid19api.com/summary')
    .then(response=>response.json())
    .then(data=>{
    let htm_l='';
    data.Countries.forEach(element =>{
    if(element.TotalDeaths>10000){
      htm_l +=`

     <tbody>
       <tr>
         <td>${element.Country}</td>
         <td>${element.NewConfirmed}</td>
         <td>${element.TotalConfirmed}</td>
         <td>${element.NewDeaths}</td>
         <td>${element.TotalDeaths}</td>
         <td>${element.NewRecovered}</td>
         <td>${element.TotalRecovered}</td>
       </tr>
     </tbody>

   `
    }
      
        
    });
    document.getElementById('t_body').innerHTML=htm_l
})
}
GetCritiCountries();
 