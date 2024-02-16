const todo = document.querySelector(".todos").getElementsByTagName("ul")[0]
const input_btn = document.getElementById("input-btn")

function addRemoveTask() {
    let tasks = []
    const task = document.getElementById("task")

    if (task.value != "") {
        tasks.push(task.value)
    }
    else {
        alert("You must write something")
    }

    for (const item of tasks) {
        todo.innerHTML = todo.innerHTML +
            `
        <li>
            <img src="/image/unchecked.svg" alt=""> ${item} <img  class="delete"  src="/image/delete.svg" alt="">
        </li>
        `
    }


    let deleteBtn = document.querySelectorAll(".delete")
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            btn.parentElement.remove()
        })
    })


    const text = document.querySelectorAll(".todos li");
    // text.forEach(item => {
    //     console.log(item.children); // Accessing child nodes of each li element
    // });
    // const unCheckImg= document.querySelectorAll(".todos li")

    text.forEach(item => {
        let checked = false;
        item.addEventListener('click', function () {
            const unCheckImg = this.children[0]
            const textNode = this.childNodes[1]
            console.log(textNode);
            

            if (!checked) {
                textNode.parentElement.style.textDecoration = 'line-through'
                textNode.parentElement.style.textDecorationThickness = '2px'
                unCheckImg.src = "/image/checked.svg"
                checked = true
            } else {
                textNode.parentElement.style.textDecoration = 'none'
                checked = false
                unCheckImg.src = "/image/unchecked.svg"
            }
        })
    })
}


input_btn.addEventListener("click", addRemoveTask)




