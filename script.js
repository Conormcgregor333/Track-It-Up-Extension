
let x=document.getElementById("save")
let y=0
let lead_array=[]
let z=0
/* To save and display the url's entered in the input box as a list. */
x.addEventListener("click",function(){
    y=document.getElementById("input-el").value 
    lead_array.push(y)
    localStorage.setItem("lead",JSON.stringify(lead_array))
    document.getElementById("input-el").value =null
    
    renderlist()
})
/* The renderlist() function help to display the url's in the list  */
function renderlist(){
    let list=""
   if(localStorage.getItem("lead"))
   {
    var z=localStorage.getItem("lead")
    z=JSON.parse(z)
    
    for(let i=0;i<z.length;i++)
    {
        list+=`<li><a href=${z[i]} target=_blank>${z[i]}</a></li>`
    }
   
   }
   document.getElementById("lead-list").innerHTML=list 
}
/* Tosave the url of the current tab. */
let savetb=document.getElementById("saveTab")
savetb.addEventListener("click",function(){
     chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        let curtb=tabs[0]
        lead_array.push(curtb.url)
        localStorage.setItem("lead",JSON.stringify(lead_array))
        renderlist()
    }) 
})
renderlist()
/* To delete all the leads and clear the localStorage. */
let del=document.getElementById("deleteAll")
del.addEventListener("click",function(){
    localStorage.clear()
    document.getElementById("lead-list").innerText=null
    renderlist()
})
