let dateHTML = document.getElementById("date");

var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });

dateHTML.innerHTML = fecha;
