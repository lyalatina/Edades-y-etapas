window.onload = () => {


    let age = parseInt(prompt('¿Cuál es tu edad?'));
  
     
     const mensajeUno = 'Eres un Toddler';
     const mensajeDos = 'Eres un Prescholl';
     const mensajeTres = 'Eres un Gradeschooler';
     const mensajeCuatro = 'Eres un Teen';
     const mensajeCinco = 'Eres un Young Adult';
  
     if (age % 1 !== 0 || age === "0" || age === NaN || age === null) {
      alert("Error, ingresa tu edad de nuevo");


      //Todller: 1-3 yrs.

      } else if (age >= 1 && age <= 3 ) {

        return document.write(mensajeUno);
  
      
        //Preschool: 3-5 yrs.
      } else if (age >= 3 && age <= 5) {
        return document.write(mensajeDos);
       

         //Gradeschooler: 5-12 yrs.
      } else if (age >= 5 && age <= 12 ) {
        return document.write(mensajeTres);
      
  
        //Teen: 12-18 yrs.
      } else if (age >= 12 && age <= 18) {
        return document.write(mensajeCuatro);
    
      
        //Young Adult: 18-21 yrs.
      } else if (age >= 18 && age <= 21) {
          return document.write(mensajeCinco);


      }


      }
    
      

    