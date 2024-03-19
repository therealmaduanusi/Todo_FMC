document.addEventListener("DOMContentLoaded", () => {
    // console.log(window.innerWidth);

    const inputValue = document.getElementById("inputValue");


    const lightDark_mode = document.getElementById("lightDark_mode");
    const closeTasks = document.querySelectorAll(".closeTask");
    const checkList = document.querySelectorAll(".check-list");
    const crossThrough = document.querySelectorAll(".cross-through");
    
    // Checking/get the element(p)
    crossThrough.forEach(p_tag => {
        // active state when click
        p_tag.addEventListener("click", () => {
            p_tag.classList.toggle("cross-through-active")
            let checkbox = p_tag.previousElementSibling;
            checkbox.classList.toggle("check-item-active")
            // console.log(checkbox);
        })
    })
    
    // Checking/get the element(div.check-list)
    checkList.forEach(listNextSilbling => {
        // active state when click
        listNextSilbling.addEventListener("click", () => {
            listNextSilbling.classList.toggle("check-item-active")
            let lineThrough = listNextSilbling.nextElementSibling;
            lineThrough.classList.toggle('cross-through-active');
            // console.log(listNextSilbling.nextElementSibling);
        })
    
    })

    const wrapperImg = document.getElementById("wrapper");
    // 😅😅😅
    let fname = "victor"
    console.log(fname.includes('or'));
    console.log(wrapperImg.style.backgroundImage.includes("/images/bg-desktop-light.jpg"));
    console.log(wrapperImg);
    if (window.innerWidth <= 380) {
        wrapperImg.style.backgroundImage = "url('/images/bg-mobile-light.jpg')";
    }
    
    // changing mode(light and dark)
    lightDark_mode.addEventListener("click", () => {
        const body = document.body;
        const todoBody = document.querySelector('.todo-body');

        // conditional statement of url("/images/bg-desktop-light.jpg") and url("/images/bg-mobile-light.jpg")
        if (wrapperImg.style.backgroundImage.includes('url("/images/bg-desktop-light.jpg")') || wrapperImg.style.backgroundImage.includes('url("/images/bg-mobile-light.jpg")')) {
            wrapperImg.style.backgroundImage = "url('/images/bg-desktop-dark.jpg')";
            //check screen width <= 380
            if (window.innerWidth <= 380) {
                wrapperImg.style.backgroundImage = "url('/images/bg-mobile-dark.jpg')";
            }
        } else {
            wrapperImg.style.backgroundImage = "url('/images/bg-desktop-light.jpg')";
            //check screen width <= 380
            if (window.innerWidth <= 380) {
                wrapperImg.style.backgroundImage = "url('/images/bg-mobile-light.jpg')";
            }
        }
    
    
    
        if (lightDark_mode.src.includes("icon-moon.svg")) {
            lightDark_mode.src = "./images/icon-sun.svg";

            inputValue.style.backgroundColor = "hsl(235, 24%, 19%)";
            body.style.backgroundColor = 'hsl(235, 21%, 11%)'
            todoBody.style.backgroundColor = "hsl(235, 24%, 19%)"
        } else {
            lightDark_mode.src = "./images/icon-moon.svg"

            inputValue.style.backgroundColor = "hsl(236, 33%, 100%)";
            body.style.backgroundColor = 'hsl(0, 0%, 98%)'
            todoBody.style.backgroundColor = "hsl(236, 33%, 100%)"
        }
    })
    
    inputValue.addEventListener("keyup", (e) => {
        console.log(e.key);
        if (e.key === 'Enter') {
            const contentItem = document.getElementById("content");
            console.log(contentItem);
            let createItem = document.createElement('div');
            createItem.classList.add("task-item")
            createItem.innerText = inputValue.value;
            contentItem.appendChild(createItem)
        }
        // console.log(e.keyCode);
    })
    
    // Delete parent element
    closeTasks.forEach(task => {
        task.addEventListener('click', () => {
            let removeParentElement = task.parentElement;
            removeParentElement.remove()
            
        })
    })

    const trackAllList = document.querySelector(".track2");
    const trackActiveList = document.querySelector(".track3");
    const trackCompletedList = document.querySelector(".track4");
    trackActiveList.addEventListener("click", () => {
        console.log(crossThrough.includes('.cross-through-active'));
    })
    console.log(trackAllList);
    console.log(trackActiveList);
    console.log(trackCompletedList);
})


