module.exports =(empleado,hora,salario,totalmaterial,callback)=>{
	trabajo1=0;
	if (hora <=0 ||  salario<=0){
			callback(new Error("Valor no valido, ingrese una cantidad arriba de cero"),null
				);
	}
	else {
			callback(null, {
				Total:()=> (trabajo1 +=((hora*empleado)*salario)),
				sumatotal:()=> (totalmaterial+trabajo1),
				Holgura:()=> (trabajo1*0.08),
			});
	}
}
