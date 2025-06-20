// Creazione di una griglia di elementi
let grid = document.querySelector(".card-grid")

// Scegliere la difficoltà


// Creazione delle carte

addEventListener("DOMContentLoaded", (event) => {
  for(i = 0; i <= 24; i++) {
    let card = document.createElement("div")
    card.classList.add("card");
    grid.append(card);
  };
})


async function getData() {
  const url = "https://api.thecatapi.com/v1/images/search";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

// Definizione array carte

// Metodi per la gestione delle carte

// Metodo per creare la griglia

// Metodo per creare le carte

// Metodo per mescolare le carte

// Metodo per mostrare le carte

// Metodo per nascondere le carte

// Metodo per controllare se le carte sono uguali

// Metodo per controllare se le carte sono tutte scoperte

// Metodo per controllare se il gioco è finito

// Metodo per controllare se il gioco è perso
