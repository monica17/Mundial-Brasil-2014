$(document).on("ready", empezar);

function empezar(){
	// //Para llamar el calendario
	// $("#fecha").datepicker();

	// //Convertir en botones
	// $("a").button();

	// //Mover la caja
	// $("#caja").draggable({
	// 	//Para que la caja no se salga del contenedor padre
	// 	containment:"parent",
	// 	drag:function(evento,ref){
	// 		$("#mensaje").text("Pos Izq: " + ref.position.left + "... Pos Sup: " + ref.position.top);
	// 	}
	// });

	//Para tocar la otra caja
	// $("#cajab").droppable({
	// 	drop:function(){
	// 		//Cuando la caja colisiona con la caja2 el fondo del contenedor cambia
	// 		$("#contenedor").css("background","red");
	// 	},
	// 	//tolerance Para que cambie el color del contenedo sólo cuando la caja llega a la posición donde se encuenra la caja2
	// 	//tolerance:"fit",
	// 	out: function(){
	// 		$("#contenedor").css("background","#fff");	
	// 		$("#contenedor").text("noooooooooo...");
	// 	}
	// });

	//Para abrir la ventana modal
	$("#miven").on("click",function(event){
		//Para detener el efecto secundario (recargar la ventana)
		event.preventDefault();
		//Para que la ventana se vuelva modal
		$("#ventanamodal").dialog({
			modal:true,
			title:"Contacto",
			//Animación de presentación
			show:"fold",
			show:"bounce",
			//Animación de cierre
			// hide:"explode"
			hide:"shake"
		});
	

	// //Para hacer un acordeon
	// $("#acordeon").accordion();

	// //Para organizar 
	// $("#organizador").sortable();
}