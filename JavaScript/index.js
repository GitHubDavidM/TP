////////////////// Obtenez le modal d'inscription ///////////////////////
function userInfo (){
    const id01 = document.getElementById('id01').value;
    const id02 = document.getElementById('id02').value;
    var ID = "ID";
    
    localStorage.setItem(ID, id01);
    
    if(id02 === id01) {
        window.location.href='accueil.html';
    }
  }
  
  
  
  // ////////////////// Obtenez le modal d'inscription ///////////////////////
    var modal = document.getElementById('id01');
  
  // // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
    window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }
  
  
  // ///////////////// Obtenez le modal de connexion //////////////////////////
   var modal2 = document.getElementById('id02');
  
  // // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
   window.onclick = function(event) {
       if (event.target == modal2) {
           modal.style.display = "none";
       }
   }

