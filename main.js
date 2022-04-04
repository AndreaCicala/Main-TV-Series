const q = (selector) => document.querySelector(selector);

q(".fa-search").addEventListener("click", () => {
    const searchInput = q(".searchInp");
    (searchInput.setAttribute("type", "text"));
   
})


