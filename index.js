const ul = document.querySelector("nav flex-column");
const list = document.createDocumentFragment();
const url="https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json";

const cargoCompany=[];

function fetchData(){
   fetch(url)
  .then((response) => response.json())
  .then (data => {
    cargoCompany.push(...data)
})
.catch(err => console.log(err))}
console.log(cargoCompany);

window.onload = (e) => {
  fetchData();
}
function displayList(data) {
    ul.addEventListener("click", (e) => {

      let findCargo = data.find((el) => el.name == e.target.innerText);
      if (findCargo) {
      const company = document.querySelector("#title");
      const contact = document.querySelector("#email");
      const name = document.createTextNode(findCargo.name);
      const email = document.createTextNode(findCargo.email);
      const boxes = document.createTextNode(findCargo.boxes);
      company.innerHTML = "";
      contact.innerHTML = "";
      company.appendChild(name)
      contact.appendChild(email)
      numberBoxes.appendChild(boxes)
      }
        
    
      let  array=cargobox.value.split(',').map(n=> Number(n));

      function sum(para2){
        let result=0;
          for(let i=0; i<para2.length; i++){
                 result=result+para2[i];     
            }
            return Math.ceil(result/10)
   }
         document.getElementById('output').innerHTML=sum(array);
     
       })
   }
   
   console.log(cargoCompany)
   
   