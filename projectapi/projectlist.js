let tbody= document.getElementById('tbody');



getData();
function getData(){
    console.log("Started getData")
    url = "https://projectlist-api.herokuapp.com/project";
    fetch(url).then((response)=>{
       
         return response.json();
         
    }).then((data)=>{
      
        //console.log(data);
        let pHtml = "";

       
        data.forEach(function(element, index) {
            let projecttable= `   <tr>
            <td>${element["id"]}</td>
            <td>${element["title"]}</td>
            <td>${element["domain"]}</td>
            <td>${element["category"]}</td>
            <td>${element["technology"]}</td>
            
            </tr>`; 
            pHtml += projecttable;    
        });
      
        tbody.innerHTML = pHtml;

    })
}