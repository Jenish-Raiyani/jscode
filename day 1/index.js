var studentdata = localStorage.getItem("showList");
studentdata     = JSON.parse(studentdata);
console.dir(studentdata);
for(var i = 0; i < studentdata. length ; i++){

    //console. log(studentdata[i].name)
    tableBody = document.getElementById('studentlist');
let sttable = `<tr>
                    <td>${studentdata[i].name}</td>
                    <td>${studentdata[i].email}</td>
                    <td>${studentdata[i].number}</td>
                    <td>${studentdata[i].city}</td>
                </tr>`;
    studentlist.innerHTML += sttable;
    }
let studentform = document.getElementById('stdetails');
studentform.addEventListener('submit',stdetails);
function stdetails(e){
    e.preventDefault();

    let stname = document.getElementById('name').value;
    let stemail = document.getElementById('email').value;
    let stnumber = document.getElementById('number').value;
    let stcity = document.getElementById('city').value;
     
    let student= new Students(stname,stemail,stnumber,stcity)
    console.log(student);
    let studentlist= new displayStudents();
    var showList = [];
  
    let sdata=JSON.stringify(student);
    if(studentlist.formvalidation(student)){
        studentlist.add(student);
     //   localStorage.setItem('studentlist',sdata);
     showList.push(student);
     showList = showList.concat(JSON.parse(localStorage.getItem('showList')||'[]'));
     console.log(showList);
   
   
     localStorage.setItem("showList", JSON.stringify(showList));
        studentlist.alert('success',"data added succesfully");

    }
    else{
        studentlist.alert('danger',"Oops! data not added");   
    }

}

function Students(name,email,number,city){
    this.name=name;
    this.email=email;
    this.number=number;
    this.city=city;


}

function displayStudents(){

}
displayStudents.prototype.add = function(student){
  
  

   
        tableBody = document.getElementById('studentlist');
    let sttable = `<tr>
                        <td>${student.name}</td>
                        <td>${student.email}</td>
                        <td>${student.number}</td>
                        <td>${student.city}</td>
                    </tr>`;
        studentlist.innerHTML += sttable;
        }

    
    

displayStudents.prototype.formvalidation = function (student){
    if (student.number.length < 10 || student.name.length < 2) {
        return false
    }
    else {
        return true;
    }

}
displayStudents.prototype.alert = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    
}