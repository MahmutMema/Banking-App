var accBtn=document.querySelector("#accBtn")
var addBtn=document.querySelector("#addBtn")
var editDelBtn=document.querySelector("#editDelBtn")
var mainView=document.querySelector("#mainView")
var mainBody=document.querySelector("#mainBody")
var formViev= document.querySelector("#formView")
var saveBtn=document.querySelector("#saveBtn")
var accId=document.querySelector("#accId");
var accName=document.querySelector("#accName");
var accDeposit=document.querySelector("#accDeposit")
var accCard=document.querySelector("#accCard")
var editView=document.querySelector("#editView")
var editBody=document.querySelector("#editBody")
var editFormView=document.querySelector("#editFormView")
var eaccId=document.querySelector("#eaccId")
var eaccName=document.querySelector("#eaccName");
var eaccDeposit=document.querySelector("#eaccDeposit")
var eaccCard=document.querySelector("#eaccCard")
var editBtn=document.querySelector("#editBtn")
var id;
var db= [
{
id: "1",
name:'Mahmut',
deposit:12000,
card:"Visa"
},
{
id:"2",
name:"Alma",
deposit:14500,
card:"Master"

}
]

addBtn.addEventListener("click",showForm)
accBtn.addEventListener("click",showMainViev)
saveBtn.addEventListener("click",saveAcount)
editDelBtn.addEventListener("click",showEditView)
editBtn.addEventListener("click",changeAcount)
 createTable()

 function createTable(){
var text =[]
for(let i = 0;i<db.length;i++){
text+="<tr>"  ;
text+="<td>"+ db[i].id  + "</td>"
text+="<td>"+db[i].name + "</td>"
text+="<td>" + db[i].deposit + "</td>"
text+="<td>" + db[i].card + "</td>"
text+="</tr>"
}
mainBody.innerHTML=text
 }
 function createEditTable(){

    var text =[]
    for(let i = 0;i<db.length;i++){
    text+="<tr>"  ;
    text+="<td>"+ db[i].id  + "</td>"
    text+="<td>"+db[i].name + "</td>"
    text+="<td>" + db[i].deposit + "</td>"
    text+="<td>" + db[i].card + "</td>"
    text+="<td><button data-id='"+i+"' class='btn btn-warning edit'>Edit</button></td>"
text+="<td><button id='"+i+" ' class='btn btn-danger delete'>Delete</button></td>"
    text+="</tr>"
    }

    editBody.innerHTML=text
var deleteBtns=document.querySelectorAll(".delete")
var editBtns= document.querySelectorAll(".edit")
for (let i = 0; i < deleteBtns.length; i++){
    
    deleteBtns[i].addEventListener("click",deleteAcount)
   
    editBtns[i].addEventListener("click",editAcount)
}

function deleteAcount(){
var id=this.id
db.splice(id,1)
createTable()
showMainViev()
}


 }

 function editAcount(){
     mainView.style.display="none"
    formView.style.display="none"
    editView.style.display="none"
    editFormView.style.display="block"
 id=this.getAttribute('data-id')

eaccId.value = db [id].id
eaccName.value = db [id].name;
eaccDeposit.value = db[id].deposit
eaccCard.value = db[id].card
 }

 function changeAcount(){
var accId=eaccId.value;
var accName=eaccName.value;
var accDeposit=eaccDeposit.value;
var accCard=eaccCard.value
db[id]={
    id:accId,
    name:accName,
    deposit:accDeposit,
    card:accCard
};
createTable()
showMainViev()
 }


 function showEditView(){
    createEditTable()
    mainView.style.display="none"
    formView.style.display="none"
    editView.style.display="block"
    editFormView.style.display="none"
}

function showForm(){
    formView.style.display="block"
    mainView.style.display="none"
    editView.style.display="none"
    editFormView.style.display="none"
}

function showMainViev(){
    mainView.style.display="block"
    formView.style.display="none"
    editView.style.display="none"
    editFormView.style.display="none"
}
function saveAcount(){
 var id=  accId.value ;
 var name=accName.value;
 var deposit=accDeposit.value;
 var card = accCard.value  ;

 var newAcount ={
    id:id,
    name:name,
    deposit:deposit,
    cCard:card 
 }
 db.push(newAcount)
 createTable()
 showMainViev()
}
