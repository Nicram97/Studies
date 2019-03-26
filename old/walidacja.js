function walidacjaNazwa() {
	var nazwa = document.getElementById('nazwaProdukt');
	var nazwaVAL = nazwa.value;
	console.log(nazwaVAL);
	var nazwaBlad =document.getElementById('nazwaProdukt_Blad');
	var flaga_validacji=true;
	
	if(nazwaVAL.length > 10) {
		nazwaBlad.innerHTML="max długość 10 znaków!";
		nazwaBlad.classList.remove('valid-feedback');
		nazwa.classList.remove('is-valid');
		nazwaBlad.classList.add('invalid-feedback');
		nazwa.classList.add('is-invalid');
		flaga_validacji=false;
		
	} else if(nazwaVAL.length < 1) {
		nazwaBlad.innerHTML="pole obowiązkowe";
		nazwaBlad.classList.remove('valid-feedback');
		nazwa.classList.remove('is-valid');
		nazwaBlad.classList.add('invalid-feedback');
		nazwa.classList.add('is-invalid');
		flaga_validacji=false;
		
	} else if(nazwaVAL.match(/^[0-9]/)) {
		nazwaBlad.innerHTML="tylko litery,";
		nazwaBlad.classList.remove('valid-feedback');
		nazwa.classList.remove('is-valid');
		nazwaBlad.classList.add('invalid-feedback');
		nazwa.classList.add('is-invalid');
		flaga_validacji=false
	}
	else{
		nazwaBlad.innerHTML="";
		nazwaBlad.classList.remove('invalid-feedback');
		nazwa.classList.remove('is-invalid');
		nazwaBlad.classList.add('valid-feedback');
		nazwa.classList.add('is-valid');
		flaga_validacji=true
	}
	return flaga_validacji
}