var documentHtml = document;

var siteName= documentHtml.getElementById("siteName"),
siteUrl= documentHtml.getElementById("siteUrl"),
btnAdd= documentHtml.getElementById("btnAdd"),
books=[]






btnAdd.onclick = function(){
    add()
   
}


function add (){
var Book={


    name:siteName.value,
    url:siteUrl.value,
} 

books.push(Book);
 display()
 clear()
 nameValidation()

}


function clear(){
   siteName.value="";
   siteUrl.value="";
}
 function display(){

    var data =""
 for(i=0;i<books.length;i++){
 data += ` <tr>
 <td> ${books[i]. name}</td>
 <td>${books[i].url} </td>
 <td>  <button class="btn btn-warning my-3" id="btnVisit" onclick=" url()">Visit</button>
<button class="btn btn-secondary my-3 " onclick="delet(${i})">Delet</button> </td>
</tr>
 `

 }
documentHtml.getElementById("tableBody").innerHTML=data ;
}

function url(){
   window.open("https://bookmarker-ahmedrabi.netlify.app/")
}

function delet(index){
   books.splice(index,1);
   display();
}


