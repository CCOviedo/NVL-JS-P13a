function primos(num){
	var nveces = 1;
	var divisor = 2;
	var p = 2;
	
	while(nveces <= num){
		if(p % divisor == 0){
			if(p == divisor){
				document.write(p + ", ");
				alert(p);
				nveces++;
			}
			divisor = 2;
			p++;
		}
		else{
			divisor++;
		}
	}
}

primos(5);