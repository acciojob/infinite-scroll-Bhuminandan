const ListOl = document.getElementById("infi-list");
let itemNo = 0;

function createLI(number) {
    for (let i = 0; i < number; i++) {
        const li = document.createElement("li");
        li.innerText = `item ${itemNo++}`
        ListOl.appendChild(li);
    }
}

createLI(10)


let lastScrollTop = 0;
ListOl.onscroll = (e) => {
    if (ListOl.scrollTop < lastScrollTop) {
        // upscroll 
        return;
    }
    lastScrollTop = ListOl.scrollTop <= 0 ? 0 : ListOl.scrollTop;
    if (ListOl.scrollTop + ListOl.offsetHeight >= ListOl.scrollHeight) {
        createLI(2)
    }
}