// function loadjson(file,callback){
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status =="200"){
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send(null);
// }
//
//
// loadjson("data.json", function(text)
// {
//   var data= JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   careerinfo(data.career);
//   Education(data.education);
//   skills(data.skills);
//   Achievements(data.Achievements);
//
// })
function loadjson(file)
{
  return new Promise((reslove,reject)=>
  {
    return fetch(file).then(response=>
      {
      if(response.ok)
      {
        reslove(response.json());
      }else
      {
        reject(new Error('error'));
        }
      })
    })
  }
var newfile = loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  Education(data.education);
  skills(data.skills);
  Achievements(data.Achievements);

})
   var child1 = document.querySelector(".childone");
   function basics(det){
   var image = document.createElement("img");
   image.src = det.image;
   child1.appendChild(image);

   var name = document.createElement("h4");
   name.textContent = det.name;
   child1.appendChild(name);

   var phno = document.createElement("h4");
   phno.textContent = det.phno;
   child1.appendChild(phno);

   var email = document.createElement("a");
   email.href = "revathichegireddy@gmail.com";
   email.textContent=det.email;
   child1.appendChild(email);

   var Address = document.createElement("h2");
   Address.textContent = "Address";
   child1.appendChild(Address);

   var hr = document.createElement("hr");
   child1.appendChild(hr);

   var p = document.createElement("p");
   p.textContent = det.Address;
   child1.appendChild(p);
 }

var child2 = document.querySelector(".childtwo");
function careerinfo(info){
  var heading = document.createElement("h2");
  heading.textContent = "career Objective:";
  child2.appendChild(heading);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var c = document.createElement("h2");
  c.textContent = info.info;
  child2.appendChild(c);
}

function Education(edu)
{
  var hd = document.createElement("h2");
  hd.textContent="Educational Qualification";
  child2.appendChild(hd);
  var hr = document.createElement("hr");
  child2.appendChild(hr);
  var table1 = document.createElement("table");
  table1.border = "1";
  child2.appendChild(table1);

  tabledata="";
  for(i=0;i<edu.length;i++)
  {
    tabledata+="<tr><td>"+edu[i].Qualification+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].Year+"</td><td>"+edu[i].Percentage+"</td></tr>";
  }
  table1.innerHTML = tabledata;
}

function skills(skillinfo){

  var hd = document.createElement("h2");
  hd.textContent="technical skills";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<skillinfo.length;i++)
  {
    var tittle = document.createElement("h4");
    tittle.textContent=skillinfo[i].tittle;
    child2.appendChild(tittle);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=skillinfo[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}
 function Achievements(achivinfo)
 {
   var hd = document.createElement("hd");
   hd.textContent="Achievements";
   child2.appendChild(hd);

    var hr = document.createElement("hr");
    child2.appendChild(hr);

     for(i=0;i<achivinfo.length;i++)
     {
       var achivin = document.createElement("ul");
       var achiv = document.createElement("li");
       achiv.textContent=achivinfo[i].info;
       achivin.appendChild(achiv);
       child2.appendChild(achivin);
     }
 }
function openpage()
{
window.open("resume.html", "-self",true)
}
