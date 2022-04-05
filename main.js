import {getPopularShows, getTopRatedTv} from './utility.js';

//Input Search expand
const q = (selector) => document.querySelector(selector);
    q(".fa-search").addEventListener("click", () => {
        const searchInput = q(".searchInp");
        (searchInput.setAttribute("type", "text"));
});
//
const createPopularShows = (title, poster_path, genre_id, id, vote_average) => {
    const searchInput = q("#searchBox");
    const rightButton = q("#slide-right");
    const cardDiv = document.createElement("div");
    const cardTitle =  document.createElement("h3");
    const cardPoster =  document.createElement("img");
    const cardVote =  document.createElement("p");
    
    cardDiv.classList.add("card");
    cardTitle.classList.add("cardTitle");
    cardPoster.classList.add("cardImg");
    cardVote.classList.add("seriesVote");

    cardTitle.textContent = title;
    cardDiv.setAttribute("id", id);
    cardPoster.src = "https://image.tmdb.org/t/p/original/" + poster_path;
    cardVote.textContent = "Rating: " + vote_average + "/10";

    cardDiv.append(cardTitle, cardPoster, cardVote);
    document.querySelector(".popular-series").appendChild(cardDiv)

//ITEMS VISIBILITY ON MOUSE OVER
    cardDiv.addEventListener("mouseover", () => {
        cardTitle.style.visibility = "visible";
        cardVote.style.visibility = "visible";
    cardDiv.addEventListener("mouseleave", () => {
        cardTitle.style.visibility = "hidden";
        cardVote.style.visibility = "hidden";        
    })    
 }); 
//LEFT POSITION OF THE FIRST CARD
    cardDiv.addEventListener("mouseover", () => {
        if (id === 52814){
            cardDiv.style.left = "40px"
        }
        cardDiv.addEventListener("mouseleave", () => {
            if (id === 52814){
                cardDiv.style.left = "0"
            }
        })
    });
//
    // let newArr = [];
    // newArr.push(title, id);
    // searchBox.addEventListener("keyup", () => {  
    // })
//LEFT AND RIGHT SCROLL\\
    q("#slide-right2").addEventListener("click", () => {
        q(".top-rated-series").scrollLeft += 500;
    })
    q("#slide-left2").addEventListener("click", () => {
        q(".top-rated-series").scrollLeft += -500;
    })
    q("#slide-right2").addEventListener("click", () => {
        q("#slide-left2").style.visibility = "visible";
    })
}

const createTopRatedShows = (title, poster_path, genre_id, id, vote_average) =>{
    const searchInput = document.querySelector("#searchBox");
    const cardDiv = document.createElement("div");
    const cardTitle =  document.createElement("h3");
    const cardPoster =  document.createElement("img");
    const cardVote =  document.createElement("p");
    
    cardDiv.classList.add("card2");
    cardTitle.classList.add("cardTitle2");
    cardPoster.classList.add("cardImg2");
    cardVote.classList.add("seriesVote2");

    cardTitle.textContent = title;
    cardDiv.setAttribute("id", id);
    cardPoster.src = "https://image.tmdb.org/t/p/original/" + poster_path;
    cardVote.textContent = "Rating: " + vote_average + "/10";

    cardDiv.append(cardTitle, cardPoster, cardVote);
    document.querySelector(".top-rated-series").appendChild(cardDiv)

//ITEMS VISIBILITY ON MOUSE OVER
    cardDiv.addEventListener("mouseover", () => {
        cardTitle.style.visibility = "visible";
        cardVote.style.visibility = "visible";
    cardDiv.addEventListener("mouseleave", () => {
        cardTitle.style.visibility = "hidden";
        cardVote.style.visibility = "hidden";        
    })    
 }); 
//LEFT POSITION OF THE FIRST CARD
    cardDiv.addEventListener("mouseover", () => {
        if (id === 130392){
            cardDiv.style.left = "40px"
        }
        cardDiv.addEventListener("mouseleave", () => {
            if (id === 130392){
                cardDiv.style.left = "0"
            }
        })
    });
//LEFT AND RIGHT SCROLL\\
    q("#slide-right").addEventListener("click", () => {
        q(".popular-series").scrollLeft += 500;
    })
    q("#slide-left").addEventListener("click", () => {
        q(".popular-series").scrollLeft += -500;
    });
    q("#slide-right").addEventListener("click", () => {
        q("#slide-left").style.visibility = "visible";
    })
    
}

export {createPopularShows, createTopRatedShows}