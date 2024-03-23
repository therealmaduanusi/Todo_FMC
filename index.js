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
        e.preventDefault()
        // console.log(e.key);
        if (e.key === 'Enter') {
            if (inputValue.value === '') {
                alert("YO! you entered an empty todo List")
            }
            const contentItem = document.getElementById("content");
            // console.log(contentItem);
            let createItem = document.createElement('div');
            createItem.classList.add("task-item")
            createItem.classList.add("draggable")
            createItem.innerHTML = `
                <div class="check-list">
                <!-- Added bg-img and bg-color -->
                </div>
                <p class="cross-through ">${inputValue.value}</p>
                <!-- <div class="close"> -->
                <img src="/images/icon-cross.svg" alt="close" id="closeimg" class="closeTask">
            `;
            // console.log(createItem);

            contentItem.appendChild(createItem)
            updateItemListeners();
            updateItemCount();


           


            // updateDrag();
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
    // console.log(wrapperImg);
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
            updateItemCount();
        })
    })




    // Tracking Items
    function incrememtItem() {
        itemNum++
    }
    incrememtItem()


    function decrementItems() {
        if (itemNum > 0) {
            itemNum--
        }
    }
    decrementItems();


    // Clear Completed Button functionality
    clearCompletedTasks.addEventListener("click", () =>{
        const completedItems = document.querySelectorAll(".cross-through-active");
        completedItems.forEach(item => {
            item.parentElement.remove();
        });
        updateItemCount();
    });
    // console.log(clearCompletedTasks);

    // ALL ACTIVE AND COPLETED
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

        tasks.forEach(task => {
            switch (filterType) {
                case "all":
                    task.style.display = "flex"; 
                    console.log("all task");
                    break;
                case "active":
                    if (!task.querySelector("p").classList.contains("cross-through-active")) {
                        task.style.display = "flex"; // Show active tasks (tasks not completed)
                        console.log("active Task");
                    } else {
                        task.style.display = "none"; // Hide completed tasks
                    }

                    break;
                case "completed":
                    if (task.querySelector("p").classList.contains("cross-through-active")) {
                        task.style.display = "flex"; // Show completed tasks
                        console.log("completed Task");
                    } else {
                        task.style.display = "none"; // Hide active tasks
                    }
                    break;
                default:
                    break;
            }
        })
    }
    






    function updateDrag() {
        const taskItems = document.querySelectorAll(".task-item");
        taskItems.forEach(task => {
            task.addEventListener("dragstart", () => {
                task.classList.add("dragging")
                console.log("dragging start");
            })
    
            task.addEventListener("dragend", () => {
                task.classList.remove("dragging")
                console.log("dragging ended");
            })
        })
    }
    updateDrag()
    // Add dragover event listener to the container
    const container = document.getElementById("content")
    container.addEventListener("dragover", e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    })

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }



    





    
    // Initialize item count
    updateItemCount();

    // Update item count when the page loads
    window.addEventListener("load", () => {
        updateItemCount();
    });

})


