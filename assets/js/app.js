const cl = console.log;

let spread = document.getElementById("spread")

let speadText = spread.innerText;
cl(speadText)

let sp1 = [...speadText]

let spreadFun = sp1.map(ele => `<span>${ele}</span>`).join(" ") 


spread.innerHTML = spreadFun;