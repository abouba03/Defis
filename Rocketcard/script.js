const bgColor = document.querySelector("#principal")
const btn = document.querySelector(".btn");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandom = () => {
    return Math.floor(Math.random() * 16);
}


btn.addEventListener("click", function(){
    let pre = "#";
    for (let i=0; i<=5; i++){
        pre += hex[getRandom()];
        console.log(pre);
    }

    bgColor.style.backgroundColor = pre;
});