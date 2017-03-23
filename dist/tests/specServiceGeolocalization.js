describe('El servicio de geolocalizacion',function(){
	describe('Dado que me encuentro en una posicion en la posicion(19.3611465,-99.1856034)',function(){
		it('Mostrar la ciudad donde me encuentró',function(){
			expect(service.getCiudad(19.3611465,-99.1856034)).toEqual('Ciudad de México');
		});
	});
	describe('Dado que me encuentro en una posicion en la posicion(19.0400176,-98.3330513)',function(){
		it('Mostrar la ciudad donde me encuentró',function(){
			expect(service.getCiudad(19.0400176,-98.3330513)).toEqual('Puebla');
		});
	});
	describe('Dado que me encuentro en una posicion en la posicion (14,13)',function(){
		it('Mostrar la ciudad donde me encuentró',function(){
			expect(service.getCiudad(14,13)).toEqual('');
		});
	});
	describe('Dado que me encuentro en una posicion en la posicion (13)',function(){
		it('Mostrar la ciudad donde me encuentró',function(){
			expect(service.getCiudad(13)).toEqual('');
		});
	});
});
