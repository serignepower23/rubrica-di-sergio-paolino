import NavBar from "./componenti/NavBar";
import TabellaContatti from "./componenti/Contatto/TabellaContatti";
import NuovoContatto from "./componenti/NuovoContatto/NuovoContatto";
import { useState } from "react";

function App() {
  const dummmy_dati = [
    {
      id: 4,
      nome: "mark",
      cognome: "otto",
      email: "blaaa",
      numero: 123456785,
    },
    {
      index: 3,
      nome: "serigne",
      cognome: "fall",
      email: "sergi@gmail.com",
      numero: 3599886295,
    },
    {
      id: 2,
      nome: "elisa",
      cognome: "giudici",
      email: "eligiudi@gmail.com",
      numero: 3422427556,
    },
    {
      id: 1,
      nome: "paperino",
      cognome: "paolino",
      email: "paopar@gmail.com",
      numero: 3843905867,
    },
  ];
  const [aggiunta, setAggiunta] = useState(dummmy_dati);
  function addContactHeandler(contatto) {
    /* console.log("dati contatto in app: \n", contatto); */
    setAggiunta((prevContatto) => {
      return [contatto, ...prevContatto];
    });
    //verifica che il dato sia arrivato correttamente a questo componente
  }

  //gestione di cosa verrà mostrato a schermo dopo il click
  const [inputShow, setInputShow] = useState(false);
  function cliccato_InputContattoHeandler() {
    setInputShow(true);
  }
  function cliccatoHomeHeandler() {
    setInputShow(false);
  }

  const [risultato, setRisultato] = useState("");
  function saveTrovatoHeandler(event) {
    setRisultato(event);
  }

  return (
    <div>
      {!inputShow && (
        <div>
          <NavBar
            onCliccato_InputContatto={cliccato_InputContattoHeandler}
            onSaveTrovato={saveTrovatoHeandler}
          ></NavBar>
          <TabellaContatti
            ricerca={risultato}
            infoContatto={aggiunta}
          ></TabellaContatti>
        </div>
      )}
      {inputShow && (
        <div>
          <NavBar
            onCliccato_InputContatto={cliccato_InputContattoHeandler}
            onCliccatoHome={cliccatoHomeHeandler}
          ></NavBar>
          <NuovoContatto onAddContact={addContactHeandler}></NuovoContatto>
        </div>
      )}
    </div>
  );
}

export default App;
