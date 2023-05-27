let input_field = document.querySelector("input");
let unorder_list = document.querySelector("tbody");
let index  = 1;
function inputdata(){

    let text = input_field.value;
    if(text == ""){
        alert("please Enter the avlue")
    }else{
        let html = `<tr>
        <td><h1>${text}</h1></td>
       <td><button onclick = "del(this)" class = "primary">&minus;</button></td>
       </tr> `;

unorder_list.insertAdjacentHTML("beforeend", html);
input_field.value = ' ';


    }
   


}
function del(btn){
    btn.parentNode.parentNode.remove();
}