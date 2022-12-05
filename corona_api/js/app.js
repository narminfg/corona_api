function Search(){
  let value = document.querySelector('#inp input').value;
  fetch('https://api.covid19api.com/summary')
  .then(response=>response.json())
  .then(data=>{
  let html='';
  data.Countries.forEach(element =>{
    let exist_name = element.Country.toLowerCase().includes(value.toLowerCase());
    if (exist_name) {
      html+=`
      <table class="table ">
           <thead>
             <tr>
               <th scope="col">Country</th>
               <th scope="col">NewConfirmed</th>
               <th scope="col">TotalConfirmed</th>
              <th scope="col">NewDeaths</th>
              <th scope="col">TotalDeaths</th>
               <th scope="col">NewRecovered</th>
               <th scope="col">TotalRecovered</th>
             </tr>
           </thead>
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
      </table>
        `
      
      
document.getElementById('countries').innerHTML=html

}
})
})
}


function GetCountries(){
    fetch('https://api.covid19api.com/summary')
    .then(response=>response.json())
    .then(data=>{
    let html='';
    data.Countries.forEach(element =>{
        html+=`
          
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
                
                  `});
  document.getElementById('tbody').innerHTML=html
  })
}
GetCountries();