// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

// (trovate l’array del team all’interno della cartella in allegato)

// Bonus

// Curare meglio l'aspetto grafico
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare 
// il nuovo membro sulla pagina(usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];







//elementi presi dal D.O.M.
const mainPage = document.querySelector("#content");





//funzione per creare UNA card 
function createCard() {

}




//funzione di stampa delle card 
function printCard(array) {
  let oneTap = "";
  //array scroll per prendere ogni membro 
  for (let i = 0; i < array.length; i++) {

    //salvo ogni membro nella variabile "curMember"
    let curMember = array[i];
    const { name, role, email, img } = curMember;

    oneTap += `
       <div class="col-4 m-2 bg-secondary text-light border-dark">
          <div class="row">
            <div class="col-md-4">
              <img class = "img-fluid rounded-start" src="./${img}" alt="">
            </div>
            <div class="col-md-8">
              <div class="d-flex flex-column justify-content-center">
                <h2 class="">${name}</h2>
                <p class="">${role}</p>
                <a class="link-info" href="">${email}</a>
              </div>
            </div>
            </div>
        </div>
    `;
  }
  mainPage.innerHTML = oneTap;

}


//invocazione funzione  
printCard(teamMembers)