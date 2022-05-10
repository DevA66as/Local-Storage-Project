let theInput = document.getElementById("the-input");
let allSpans = document.querySelectorAll(".buttons > span")
let results = document.querySelector(".results > span")

allSpans.forEach((e) => {
    e.addEventListener("click", () => {
        
        if (e.classList.contains("check-item")) {
            check()
            theInput.value = "";
        } 
        if (e.classList.contains("add-item")) {
            
            if (theInput.value === "") {
                showMsg()
            } else {
                add()
            }
            theInput.value = ""
        } 
        if (e.classList.contains("delete-item")) {
            Delete()
            theInput.value = "";
            
        } 
        if (e.classList.contains("show-items")) {
            show()
        } 
        if (e.classList.contains("clear-items")) {
            Clear()
        } 
    }) 
})
function showMsg() {
 results.innerHTML = "Input Can Not Be Empty";
}
function check() {
    if (theInput.value !== '') {
        if (localStorage.getItem(`${theInput.value}`)) {
            results.innerHTML = `This Key <span>${theInput.value} </span> Is Found In Local Storage `;
        } else {
            results.innerHTML = `This Key <span>${theInput.value} </span> Is Not Found In Local Storage `;
        }
    }
}
function add() {
    window.localStorage.setItem(`${theInput.value}`, "Test");
    results.innerHTML = `The Key <span class="saved">${theInput.value} </span> Added`
}
function Delete() {
    if (theInput.value !== "") {
        if (localStorage.getItem(`${theInput.value}`)) {
            window.localStorage.removeItem(`${theInput.value}`);
            results.innerHTML = `The Key <span class="saved">${theInput.value} </span> Is Deleted `; 
            
        } else {
            results.innerHTML = `This Key <span>${theInput.value} </span> Is Not Found In Local Storage `;
        }
    } else {
        showMsg();
    }
}
function Clear() {
    if (localStorage.length) {
        window.localStorage.clear();
        results.innerHTML = `All Keys Are Removed `;
    }  else {
        results.innerHTML = `No Keys  Found In Local Storage `;
      }
}
function show() {
    if (localStorage.length) {
        results.innerHTML = ''
        for (let [key, value] of Object.entries(localStorage)){
            results.innerHTML += `Local Storage Property : <span class="keys">${key}</span>`
        }
    } else {
        results.innerHTML ="Local Storage Is Empty"
    }
}

