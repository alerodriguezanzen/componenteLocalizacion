describe('El componente de localizacion',function(){
	describe('dado que deseo usar mi proveedor google maps y mi ubicación es en la ciudad de México',function(){
		it('Verifica que se ha ingresado googlemaps',function(){
			expect(ctrl.proveedor).toEqual('googlemaps');
		})
		it('Muestra el nombre de la ciudad',function(){
			expect(crl.ciudad).toEqual('Ciudad de México');
		});
	})
	describe('dado que deseo usar mi proveedor opensourcemaps y mi ubicación es en la ciudad de México',function(){
		it('Verificar que se ha ingresado opensourcemaps',function(){
			expect(ctrl.proveedor).toEqual('opensourcemaps');
		})
		it('Muestra el nombre de la ciudad',function(){
			expect(crl.ciudad).toEqual('Ciudad de México');
		});
	})
});