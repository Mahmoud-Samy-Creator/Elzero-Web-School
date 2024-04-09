let title_content = "Elzero",
    discribtion_content = "Elzero Web Schools",
    Date_appeared = "25/10";


let cards = "";
for (let i = 0 ; i < 4 ; i++) {
    let card = 
                `
                <div>
                    <h3>${title_content}</h3>
                    <p>${discribtion_content}</p>
                    <span>${Date_appeared}</span>
                </div>
                <hr>
                `;
    cards += card;
}

document.write(cards)