let btn = document.getElementById("button");
let text = document.getElementById("text");
let remove = document.getElementById("removes");
let ul = document.getElementById("ul");

btn.onclick = function () {
    let textValue = text.value.trim();

    if (textValue != "") {
        let li = document.createElement("li");
        li.innerText = textValue;
        li.className = ("list-group-item");
        let inp = document.createElement("input");
        inp.className = ("form-control");
        inp.type = ("checkbox");
        inp.style.display = "flex";
        inp.style.justifyContent = "flex-end";
        li.append(inp);
        ul.append(li);
    }
}
remove.onclick = function () {
    let findli = ul.getElementsByTagName("li");
    let findinput = ul.getElementsByTagName("input");    
    for (let i = 0; i < findli.length; i++) {
        if (findinput[i].checked == true) {           
            findli[i].remove();
            i--;
        }
    }
}






