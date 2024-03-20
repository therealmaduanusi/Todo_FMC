document.addEventListener("DOMContentLoaded", () => {
    // console.log(window.innerWidth);
    let itemNum = 0;
    const inputValue = document.getElementById("inputValue");


    const lightDark_mode = document.getElementById("lightDark_mode");
    const closeTasks = document.querySelectorAll(".closeTask");
    const checkList = document.querySelectorAll(".check-list");
    const crossThrough = document.querySelectorAll(".cross-through");
    const clearCompletedTasks = document.querySelector(".track5");

    function updateItemCount() {
        const taskItems = document.querySelectorAll(".task-item");
        itemNum = taskItems.length;
        const trackItem = document.querySelector(".item-num");
        trackItem.textContent = itemNum;
    }


    // Data input
    inputValue.addEventListener("keyup", (e) => {
        // console.log(e.key);
        if (e.key === 'Enter') {
            const contentItem = document.getElementById("content");
            // console.log(contentItem);
            let createItem = document.createElement('div');
            createItem.classList.add("task-item")
            createItem.innerHTML = `
                <div class="check-list">
                <!-- Added bg-img and bg-color -->
                </div>
                <p class="cross-through ">${inputValue.value}</p>
                <!-- <div class="close"> -->
                <img src="/images/icon-cross.svg" alt="close" id="closeimg" class="closeTask">
            `;
            

            contentItem.appendChild(createItem)
            incrememtItem()
            updateItemListeners();
            inputValue.value = '';
            updateItemCount();
            // console.log(itemNum);
            // updating cross-through(p) functionality
            inputValue.value = '';
        }
        // console.log(e.keyCode);
    })

    // Item Update
    function updateItemListeners() {
        const newTaskItem = document.querySelector(".task-item:last-child");
        const newP = newTaskItem.querySelector('p.cross-through');
        // updating checklist(div) functionality
        const newDiv = newTaskItem.querySelector('div.check-list');
        // updating close functionality
        const newClose = document.querySelectorAll("img.closeTask");

        newP.addEventListener("click", () => {
            newP.classList.toggle("cross-through-active");
            let checkbox = newP.previousElementSibling;
            checkbox.classList.toggle("check-item-active");
            // console.log(checkbox);
        });

        newDiv.addEventListener("click", () => {
            newDiv.classList.toggle("check-item-active");
            let lineThrough = newDiv.nextElementSibling;
            lineThrough.classList.toggle('cross-through-active');
        });

        newClose.forEach(task => {
            task.addEventListener('click', () => {
                let removeParentElement = task.parentElement;
                removeParentElement.remove();
                decrementItems();
                updateItemCount();
            })
        })
    }

    // Checking/get the elements(p)
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
    
    
        const wrapperState = document.querySelector(".wrapper-state");
        if (lightDark_mode.src.includes("icon-moon.svg")) {
            lightDark_mode.src = "./images/icon-sun.svg";

            wrapperState.style.backgroundColor = "hsl(235, 24%, 19%)";
            inputValue.style.backgroundColor = "hsl(235, 24%, 19%)";
            body.style.backgroundColor = 'hsl(235, 21%, 11%)'
            todoBody.style.backgroundColor = "hsl(235, 24%, 19%)"
        } else {
            lightDark_mode.src = "./images/icon-moon.svg"

            wrapperState.style.backgroundColor = "hsl(236, 33%, 100%)";
            inputValue.style.backgroundColor = "hsl(236, 33%, 100%)";
            body.style.backgroundColor = 'hsl(0, 0%, 98%)'
            todoBody.style.backgroundColor = "hsl(236, 33%, 100%)"
        }

    })
    

    
    // Delete parent element
    closeTasks.forEach(task => {
        task.addEventListener('click', () => {
            let removeParentElement = task.parentElement;
            removeParentElement.remove()
            decrementItems()
            updateItemCount();
        })
    })




    // Tracking Items
    function incrememtItem() {
        itemNum++
    }


    function decrementItems() {
        if (itemNum > 0) {
            itemNum--
        }
    }

    // Clear Completed Button functionality
    clearCompletedTasks.addEventListener("click", () =>{
        const completedItems = document.querySelectorAll(".cross-through-active");
        completedItems.forEach(item => {
            item.parentElement.remove();
            decrementItems();
        });
        updateItemCount();
    });
    console.log(clearCompletedTasks);

    // ALL ACTIVE AND COPLETED
    const taskList = document.getElementById("taskList");
    const taskItems = document.querySelectorAll(".task-item");
    const filterAllBtn = document.querySelector(".track2");
    const filterActiveBtn = document.querySelector(".track3");
    const filterCompletedBtn = document.querySelector(".track4");

    filterAllBtn.addEventListener("click", function () {
        toggleFilter("all");
    });

    filterActiveBtn.addEventListener("click", function () {
        toggleFilter("active");
    });

    filterCompletedBtn.addEventListener("click", function () {
        toggleFilter("completed");
    });

    function toggleFilter(filterType) {
        const tasks = document.querySelectorAll(".task-item");

        switch (filterType) {
            case "all":
                console.log("all task");
                break;
            case "active":
                console.log("active Task");
                break;
            case "completed":
                console.log("completed Task");
                break;
            default:
                break;
        }
    }
    



    
    // Initialize item count
    updateItemCount();

    // Update item count when the page loads
    window.addEventListener("load", () => {
        updateItemCount();
    });

})


