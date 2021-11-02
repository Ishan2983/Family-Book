array_name=["Pradep","Kiran","Abhishek","Shweta","Amol","Nidhi","Rishit","Me:Ishan","Divya"];
array_img=["grandpa.jpg","grandma.jpg","dad.png","mom.jpg","uncle.jpg","aunt.jpg","brother.jpg","me.jpg","pagal.jpg"];
var i=0;
function next(){
 document.getElementById("family").src=array_img[i];
 document.getElementById("name").innerHTML=array_name[i];
 i=i+1;
 if(i>8){
    i=0;
 }
}