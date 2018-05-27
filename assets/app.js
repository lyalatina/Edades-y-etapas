window.onload = () => {


  let age = parseInt(prompt('¿Cuál es tu edad?'));
  
     
     const mensajeUno = 'Eres un Toddler';
     const mensajeDos = 'Eres un Prescholl';
     const mensajeTres = 'Eres un Gradeschooler';
     const mensajeCuatro = 'Eres un Teen';
     const mensajeCinco = 'Eres un Young Adult';
  
        
       if (age <= 3) {
        return console.log(mensajeUno);
  
      }
        //Preschool: 3-5 yrs.
       if (age <= 5) {
        return console.log(mensajeDos);
       
      
      }

         //Gradeschooler: 5-12 yrs.
        if (age <= 12) {
        return console.log(mensajeTres);
      }
  
        //Teen: 12-18 yrs.
        if (age <= 18) {
        return console.log(mensajeCuatro);
    
      }
        //Young Adult: 18-21 yrs.
        if (age <= 21) {
          return console.log(mensajeCinco);

        
  
    }
  }

       