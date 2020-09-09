var PrimerModulo=require('./PrimerModulo');
var SegundoModulo=require('./SegundoModulo');

const SegM= SegundoModulo.suma([12,30]);
function PriM(empleado,hora,salario,totalmaterial) {

	console.log(
		"Horas de trabajo por cada empleado: "  + hora + "\n" +
		"Precio de las horas trabajadas:" + salario);

	PrimerModulo(empleado,hora,salario,totalmaterial, (error,nul)=>{
		if (error){
			console.log("ERROR:", error.message);
		}
		else{
			console.log("Total:" + nul.Total());
			console.log("holgura:" + nul.Holgura());
			console.log("sumatotal:"+ nul.sumatotal());
			console.log("materiales:"+ SegM);
		}
	});

}



PriM(10,12,30,SegM);
