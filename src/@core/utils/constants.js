const constants = {
  title: 'BienStar'
}

export const colors = {
  orage: '#d98200',
  blue: '#1692b4',
  green: '#3b9528',
  blue2: '#2961b6'
}

export const alimentosOrigenAnimal = [
  'Carne de res',
  'Carne de cerdo',
  'Pollo',
  'Pescado',
  'Huevos',
  'Leche',
  'Queso',
  'Yogur'
]

export const alimentosOrigenVegetal = [
  'Manzana',
  'Naranja',
  'Plátano',
  'Uva',
  'Fresa',
  'Sandía',
  'Pera',
  'Kiwi',
  'Melón',
  'Mango',
  'Papaya',
  'Piña',
  'Limón',
  'Mandarina',
  'Brócoli',
  'Zanahoria',
  'Espinaca',
  'Tomate',
  'Lechuga',
  'Pimiento',
  'Cebolla',
  'Pepino',
  'Coliflor',
  'Calabacín',
  'Champiñón',
  'Remolacha',
  'Legumbres',
  'Frutos secos',
  'Semillas',
  'Cereales',
  'Panes',
  'Arroz'
]

export const alimentosGrasos = [
  'Aceite de oliva',
  'Aceite de coco',
  'Aceite de aguacate',
  'Mantequilla',
  'Margarina',
  'Grasa de cerdo',
  'Grasa de pato',
  'Grasa de res',
  'Aceite de girasol',
  'Aceite de maíz',
  'Aceite de soja',
  'Aceite de cártamo',
  'Aceite de canola',
  'Aceite de palma',
  'Aceite de cacahuete',
  'Aceite de sésamo'
]

export const estados = [
  { id: 'Aguascalientes', nombre: 'Aguascalientes' },
  { id: 'Baja California', nombre: 'Baja California' },
  { id: 'Baja California Sur', nombre: 'Baja California Sur' },
  { id: 'Campeche', nombre: 'Campeche' },
  { id: 'Chiapas', nombre: 'Chiapas' },
  { id: 'Chihuahua', nombre: 'Chihuahua' },
  { id: 'Ciudad de México', nombre: 'Ciudad de México' },
  { id: 'Coahuila', nombre: 'Coahuila' },
  { id: 'Colima', nombre: 'Colima' },
  { id: 'Durango', nombre: 'Durango' },
  { id: 'Estado de México', nombre: 'Estado de México' },
  { id: 'Guanajuato', nombre: 'Guanajuato' },
  { id: 'Guerrero', nombre: 'Guerrero' },
  { id: 'Hidalgo', nombre: 'Hidalgo' },
  { id: 'Jalisco', nombre: 'Jalisco' },
  { id: 'Michoacán', nombre: 'Michoacán' },
  { id: 'Morelos', nombre: 'Morelos' },
  { id: 'Nayarit', nombre: 'Nayarit' },
  { id: 'Nuevo León', nombre: 'Nuevo León' },
  { id: 'Oaxaca', nombre: 'Oaxaca' },
  { id: 'Puebla', nombre: 'Puebla' },
  { id: 'Querétaro', nombre: 'Querétaro' },
  { id: 'Quintana Roo', nombre: 'Quintana Roo' },
  { id: 'San Luis Potosí', nombre: 'San Luis Potosí' },
  { id: 'Sinaloa', nombre: 'Sinaloa' },
  { id: 'Sonora', nombre: 'Sonora' },
  { id: 'Tabasco', nombre: 'Tabasco' },
  { id: 'Tamaulipas', nombre: 'Tamaulipas' },
  { id: 'Tlaxcala', nombre: 'Tlaxcala' },
  { id: 'Veracruz', nombre: 'Veracruz' },
  { id: 'Yucatán', nombre: 'Yucatán' },
  { id: 'Zacatecas', nombre: 'Zacatecas' }
]

export const municipios = {
  Aguascalientes: [
    { id: 'aguascalientes', nombre: 'Aguascalientes' },
    { id: 'asientos', nombre: 'Asientos' },
    { id: 'calvillo', nombre: 'Calvillo' },
    { id: 'cosio', nombre: 'Cosío' },
    { id: 'jesusmaria', nombre: 'Jesús María' },
    { id: 'elllano', nombre: 'El Llano' },
    { id: 'sanfranciscodeasis', nombre: 'San Francisco de los Romo' }
  ],

  Baja_California: [
    { id: 'ensenada', nombre: 'Ensenada' },
    { id: 'mexicali', nombre: 'Mexicali' },
    { id: 'tecate', nombre: 'Tecate' },
    { id: 'tijuana', nombre: 'Tijuana' },
    { id: 'playasderosarito', nombre: 'Playas de Rosarito' }
  ],

  Baja_California_Sur: [
    { id: 'comondu', nombre: 'Comondú' },
    { id: 'la paz', nombre: 'La Paz' },
    { id: 'loreto', nombre: 'Loreto' },
    { id: 'los cabos', nombre: 'Los Cabos' },
    { id: 'mulege', nombre: 'Mulegé' }
  ],
  Campeche: [
    { id: 'campeche', nombre: 'Campeche' },
    { id: 'calkini', nombre: 'Calkiní' },
    { id: 'carmen', nombre: 'Carmen' },
    { id: 'champoton', nombre: 'Champotón' },
    { id: 'escarcega', nombre: 'Escarcega' },
    { id: 'hecelchakan', nombre: 'Hecelchakán' },
    { id: 'hopelchen', nombre: 'Hopelchén' },
    { id: 'palizada', nombre: 'Palizada' },
    { id: 'tenabo', nombre: 'Tenabo' },
    { id: 'calakmul', nombre: 'Calakmul' },
    { id: 'candelaria', nombre: 'Candelaria' }
  ],
  Chiapas: [
    { id: 'Acala', nombre: 'Acala' },
    { id: 'Acapetahua', nombre: 'Acapetahua' },
    { id: 'Altamirano', nombre: 'Altamirano' },
    { id: 'Amatan', nombre: 'Amatan' },
    { id: 'Amatenango de la Frontera', nombre: 'Amatenango de la Frontera' },
    { id: 'Amatenango del Valle', nombre: 'Amatenango del Valle' },
    { id: 'Angel Albino Corzo', nombre: 'Angel Albino Corzo' },
    { id: 'Benemerito de las Americas', nombre: 'Benemerito de las Americas' },
    { id: 'Berriozabal', nombre: 'Berriozabal' },
    { id: 'Bochil', nombre: 'Bochil' },
    { id: 'Cintalapa', nombre: 'Cintalapa' },
    { id: 'Coapilla', nombre: 'Coapilla' },
    { id: 'Comitan de Dominguez', nombre: 'Comitan de Dominguez' },
    { id: 'La Concordia', nombre: 'La Concordia' },
    { id: 'Copainala', nombre: 'Copainala' },
    { id: 'El Bosque', nombre: 'El Bosque' },
    { id: 'El Porvenir', nombre: 'El Porvenir' },
    { id: 'Escuintla', nombre: 'Escuintla' },
    { id: 'Francisco Leon', nombre: 'Francisco Leon' },
    { id: 'Frontera Comalapa', nombre: 'Frontera Comalapa' },
    { id: 'Frontera Hidalgo', nombre: 'Frontera Hidalgo' },
    { id: 'La Grandeza', nombre: 'La Grandeza' },
    { id: 'Huehuetan', nombre: 'Huehuetan' },
    { id: 'Huixtan', nombre: 'Huixtan' },
    { id: 'Huitiupan', nombre: 'Huitiupan' },
    { id: 'Huixtla', nombre: 'Huixtla' },
    { id: 'La Independencia', nombre: 'La Independencia' },
    { id: 'Ixhuatan', nombre: 'Ixhuatan' },
    { id: 'Ixtacomitan', nombre: 'Ixtacomitan' },
    { id: 'Ixtapa', nombre: 'Ixtapa' },
    { id: 'Ixtapangajoya', nombre: 'Ixtapangajoya' },
    { id: 'Jiquipilas', nombre: 'Jiquipilas' },
    { id: 'Jitotol', nombre: 'Jitotol' },
    { id: 'Juarez', nombre: 'Juarez' },
    { id: 'Larrainzar', nombre: 'Larrainzar' },
    { id: 'La Libertad', nombre: 'La Libertad' },
    { id: 'Mapastepec', nombre: 'Mapastepec' },
    { id: 'Las Margaritas', nombre: 'Las Margaritas' },
    { id: 'Mazapa de Madero', nombre: 'Mazapa de Madero' },
    { id: 'Mazatan', nombre: 'Mazatan' },
    { id: 'Metapa', nombre: 'Metapa' },
    { id: 'Mitontic', nombre: 'Mitontic' },
    { id: 'Motozintla', nombre: 'Motozintla' },
    { id: 'Nicolas Ruiz', nombre: 'Nicolas Ruiz' },
    { id: 'Ocosingo', nombre: 'Ocosingo' },
    { id: 'Ocotepec', nombre: 'Ocotepec' },
    { id: 'Ocozocoautla de Espinosa', nombre: 'Ocozocoautla de Espinosa' },
    { id: 'Ostuacan', nombre: 'Ostuacan' },
    { id: 'Osumacinta', nombre: 'Osumacinta' },
    { id: 'Oxchuc', nombre: 'Oxchuc' },
    { id: 'Palenque', nombre: 'Palenque' },
    { id: 'Pantelho', nombre: 'Pantelho' },
    { id: 'Pantepec', nombre: 'Pantepec' },
    { id: 'Pichucalco', nombre: 'Pichucalco' },
    { id: 'Pijijiapan', nombre: 'Pijijiapan' },
    { id: 'El Porvenir', nombre: 'El Porvenir' },
    { id: 'Villa Comaltitlan', nombre: 'Villa Comaltitlan' },
    { id: 'Pueblo Nuevo Solistahuacan', nombre: 'Pueblo Nuevo Solistahuacan' },
    { id: 'Rayon', nombre: 'Rayon' },
    { id: 'Reforma', nombre: 'Reforma' },
    { id: 'Las Rosas', nombre: 'Las Rosas' },
    { id: 'Sabanilla', nombre: 'Sabanilla' },
    { id: 'Salto de Agua', nombre: 'Salto de Agua' }
  ],
  Chihuahua: [],
  Ciudad_de_México: [],
  Coahuila: [],
  Colima: [],
  Durango: [],
  Estado_de_México: [],
  Guanajuato: [],
  Guerrero: [],
  Hidalgo: [],
  Jalisco: [
    { id: 'Acatic', nombre: 'Acatic' },
    { id: 'Acatlan de Juarez', nombre: 'Acatlan de Juarez' },
    { id: 'Ahualulco de Mercado', nombre: 'Ahualulco de Mercado' },
    { id: 'Amacueca', nombre: 'Amacueca' },
    { id: 'Amatitan', nombre: 'Amatitan' },
    { id: 'Ameca', nombre: 'Ameca' },
    { id: 'Arandas', nombre: 'Arandas' },
    { id: 'Atemajac de Brizuela', nombre: 'Atemajac de Brizuela' },
    { id: 'Atengo', nombre: 'Atengo' },
    { id: 'Atenguillo', nombre: 'Atenguillo' },
    { id: 'Atotonilco El Alto', nombre: 'Atotonilco El Alto' },
    { id: 'Atoyac', nombre: 'Atoyac' },
    { id: 'Autlan de Navarro', nombre: 'Autlan de Navarro' },
    { id: 'Ayotlan', nombre: 'Ayotlan' },
    { id: 'Ayutla', nombre: 'Ayutla' },
    { id: 'Bolaños', nombre: 'Bolaños' },
    { id: 'Cabo Corrientes', nombre: 'Cabo Corrientes' },
    { id: 'Casimiro Castillo', nombre: 'Casimiro Castillo' },
    { id: 'Chapala', nombre: 'Chapala' },
    { id: 'Chimaltitán', nombre: 'Chimaltitán' },
    { id: 'Chiquilistlan', nombre: 'Chiquilistlan' },
    { id: 'Cihuatlán', nombre: 'Cihuatlán' },
    { id: 'Cocula', nombre: 'Cocula' },
    { id: 'Colotlán', nombre: 'Colotlán' },
    { id: 'Concepción de Buenos Aires', nombre: 'Concepción de Buenos Aires' },
    { id: 'Cuautitlán de García Barragán', nombre: 'Cuautitlán de García Barragán' },
    { id: 'Cuautla', nombre: 'Cuautla' },
    { id: 'Cuquío', nombre: 'Cuquío' },
    { id: 'Degollado', nombre: 'Degollado' },
    { id: 'Ejutla', nombre: 'Ejutla' },
    { id: 'EL Arenal', nombre: 'EL Arenal' },
    { id: 'EL Grullo', nombre: 'EL Grullo' },
    { id: 'EL Limón', nombre: 'EL Limón' },
    { id: 'EL Salto', nombre: 'EL Salto' },
    { id: 'Encarnación de Díaz', nombre: 'Encarnación de Díaz' },
    { id: 'Etzatlán', nombre: 'Etzatlán' },
    { id: 'Gabino Barreda', nombre: 'Gabino Barreda' },
    { id: 'Gómez Farías', nombre: 'Gómez Farías' },
    { id: 'Guachinango', nombre: 'Guachinango' },
    { id: 'Guadalajara', nombre: 'Guadalajara' },
    { id: 'Hostotipaquillo', nombre: 'Hostotipaquillo' },
    { id: 'Huejúcar', nombre: 'Huejúcar' },
    { id: 'Huejuquilla El Alto', nombre: 'Huejuquilla El Alto' },
    { id: 'Ixtlahuacán de los Membrillos', nombre: 'Ixtlahuacán de los Membrillos' },
    { id: 'Ixtlahuacán del Río', nombre: 'Ixtlahuacán del Río' },
    { id: 'Jalostotitlán', nombre: 'Jalostotitlán' },
    { id: 'Jamay', nombre: 'Jamay' },
    { id: 'Jesús María', nombre: 'Jesús María' },
    { id: 'Jilotlán de los Dolores', nombre: 'Jilotlán de los Dolores' },
    { id: 'Jocotepec', nombre: 'Jocotepec' },
    { id: 'Juanacatlán', nombre: 'Juanacatlán' },
    { id: 'Juchitlán', nombre: 'Juchitlán' },
    { id: 'La Barca', nombre: 'La Barca' },
    { id: 'La Huerta', nombre: 'La Huerta' },
    { id: 'La Manzanilla de la Paz', nombre: 'La Manzanilla de la Paz' },
    { id: 'Lagos de Moreno', nombre: 'Lagos de Moreno' },
    { id: 'Magdalena', nombre: 'Magdalena' },
    { id: 'Mascota', nombre: 'Mascota' },
    { id: 'Mazamitla', nombre: 'Mazamitla' },
    { id: 'Mexticacán', nombre: 'Mexticacán' },
    { id: 'Mezquitic', nombre: 'Mezquitic' },
    { id: 'Mixtlán', nombre: 'Mixtlán' },
    { id: 'Ocotlán', nombre: 'Ocotlán' },
    { id: 'Ojuelos de Jalisco', nombre: 'Ojuelos de Jalisco' },
    { id: 'Pihuamo', nombre: 'Pihuamo' },
    { id: 'Poncitlán', nombre: 'Poncitlán' },
    { id: 'Puerto Vallarta', nombre: 'Puerto Vallarta' },
    { id: 'Quitupan', nombre: 'Quitupan' },
    { id: 'San Cristóbal de la Barranca', nombre: 'San Cristóbal de la Barranca' },
    { id: 'San Diego de Alejandría', nombre: 'San Diego de Alejandría' },
    { id: 'San Gabriel', nombre: 'San Gabriel' },
    { id: 'San Ignacio Cerro Gordo', nombre: 'San Ignacio Cerro Gordo' },
    { id: 'San Juan de los Lagos', nombre: 'San Juan de los Lagos' },
    { id: 'San Juanito de Escobedo', nombre: 'San Juanito de Escobedo' },
    { id: 'San Julián', nombre: 'San Julián' },
    { id: 'San Marcos', nombre: 'San Marcos' },
    { id: 'San Martín de Bolaños', nombre: 'San Martín de Bolaños' },
    { id: 'San Martín Hidalgo', nombre: 'San Martín Hidalgo' },
    { id: 'San Miguel el Alto', nombre: 'San Miguel el Alto' },
    { id: 'San Sebastián del Oeste', nombre: 'San Sebastián del Oeste' },
    { id: 'Santa María de los Ángeles', nombre: 'Santa María de los Ángeles' },
    { id: 'Santa María del Oro', nombre: 'Santa María del Oro' },
    { id: 'Sayula', nombre: 'Sayula' },
    { id: 'Tala', nombre: 'Tala' },
    { id: 'Talpa de Allende', nombre: 'Talpa de Allende' },
    { id: 'Tamazula de Gordiano', nombre: 'Tamazula de Gordiano' },
    { id: 'Tapalpa', nombre: 'Tapalpa' },
    { id: 'Tecalitlán', nombre: 'Tecalitlán' },
    { id: 'Techaluta de Montenegro', nombre: 'Techaluta de Montenegro' },
    { id: 'Tecolotlán', nombre: 'Tecolotlán' },
    { id: 'Tenamaxtlán', nombre: 'Tenamaxtlán' },
    { id: 'Teocaltiche', nombre: 'Teocaltiche' },
    { id: 'Teocuitatlán de Corona', nombre: 'Teocuitatlán de Corona' },
    { id: 'Tepatitlán de Morelos', nombre: 'Tepatitlán de Morelos' },
    { id: 'Tequila', nombre: 'Tequila' },
    { id: 'Teuchitlán', nombre: 'Teuchitlán' },
    { id: 'Tizapán el Alto', nombre: 'Tizapán el Alto' },
    { id: 'Tlajomulco de Zúñiga', nombre: 'Tlajomulco de Zúñiga' },
    { id: 'Tlaquepaque', nombre: 'Tlaquepaque' },
    { id: 'Tolimán', nombre: 'Tolimán' },
    { id: 'Tomatlán', nombre: 'Tomatlán' },
    { id: 'Tonala', nombre: 'Tonala' },
    { id: 'Tonaya', nombre: 'Tonaya' },
    { id: 'Tonila', nombre: 'Tonila' },
    { id: 'Totatiche', nombre: 'Totatiche' },
    { id: 'Tototlán', nombre: 'Tototlán' },
    { id: 'Tuxcacuesco', nombre: 'Tuxcacuesco' },
    { id: 'Tuxcueca', nombre: 'Tuxcueca' },
    { id: 'Tuxpan', nombre: 'Tuxpan' },
    { id: 'Unión de San Antonio', nombre: 'Unión de San Antonio' },
    { id: 'Unión de Tula', nombre: 'Unión de Tula' },
    { id: 'Valle de Guadalupe', nombre: 'Valle de Guadalupe' },
    { id: 'Valle de Juárez', nombre: 'Valle de Juárez' },
    { id: 'Villa Corona', nombre: 'Villa Corona' },
    { id: 'Villa Guerrero', nombre: 'Villa Guerrero' },
    { id: 'Villa Hidalgo', nombre: 'Villa Hidalgo' },
    { id: 'Villa Purificación', nombre: 'Villa Purificación' },
    { id: 'Yahualica de González Gallo', nombre: 'Yahualica de González Gallo' },
    { id: 'Zacoalco de Torres', nombre: 'Zacoalco de Torres' },
    { id: 'Zapopan', nombre: 'Zapopan' },
    { id: 'Zapotiltic', nombre: 'Zapotiltic' },
    { id: 'Zapotitlán de Vadillo', nombre: 'Zapotitlán de Vadillo' },
    { id: 'Zapotlán del Rey', nombre: 'Zapotlán del Rey' },
    { id: 'Zapotlán el Grande', nombre: 'Zapotlán el Grande' },
    { id: 'Zapotlanejo', nombre: 'Zapotlanejo' }
  ],
  Michoacán: [],
  Morelos: [],
  Nayarit: [],
  Nuevo_León: [],
  Oaxaca: [],
  Puebla: [],
  Querétaro: [],
  Quintana_Roo: [],
  San_Luis_Potosí: [],
  Sinaloa: [],
  Sonora: [],
  Tabasco: [],
  Tamaulipas: [],
  Tlaxcala: [],
  Veracruz: [],
  Yucatán: [],
  Zacatecas: []
}

export const recetas = [
  {
    name: 'Avena con Manzana',
    description:
      'Calorías 157, Carbohidratos 34 g, Fibra Dietética 4 g, Proteínas 3 g, Grasa Total 1 g, Grasa Saturada 0 g, Grasa Trans 0 g, Colesterol 0 mg, Sodio 78 mg',
    ingredient:
      '1¾ tazas de jugo de manzana 100% natural, 1 taza de avena de cocimiento rápido, 1 manzana grande, sin las semillas y cortada en trozos pequeños, ½ cucharadita de canela molida (ground cinnamon), 1 ⁄8 cucharadita de sal (opcional)',
    instruccions:
      'En un tazón mediano para horno de microondas, mezcle todos los ingredientes. Coloque el recipiente sin tapadera en el horno de microondas y cocine a alta potenica durante 2 minutos aproximadamente. Mezcle y deje enfriar durante 1 minuto antes de servir.',
    image: '/images/pages/recipe/avena-con-manzana.jpg'
  },
  {
    name: 'Desayuno tropical',
    description:
      'Calorías 151, Carbohidratos 35 g, Fibra Dietética 2 g, Proteínas 3 g, Grasa Total 1 g, Grasa Saturada 1 g, Grasa Trans 0 g, Colesterol 3 mg, Sodio 31 mg',
    instruccions:
      'Mezcle todos los ingredientes en el vaso de una licuadora. Licúe hasta que la mezcla adquiera una textura cremosa. Sírvalo en vasos individuales.',
    ingredient:
      '1 mango, pelado, sin semilla y cortado en trocitos, 1 plátano grande, pelado y cortado en rebanadas 1 taza de trozos de piña, con el jugo, ¾ taza de helado de yogur de vainilla, 1 taza de cubos de hielo',
    image: '/images/pages/recipe/avena-con-manzana.jpg'
  },
  {
    name: 'Panqueques de fresa con plátano',
    description:
      'Calorías 109, Carbohidratos 24 g, Fibra Dietética 2 g, Proteínas 2 g, Grasa Total 1 g, Grasa Saturada 0 g, Grasa Trans 0 g, Colesterol 3 mg, Sodio 182 mg',
    instruccions: `1. Caliente el horno a 450°F. 
    2. Con una brocha, unte ligeramente con aceite las tortillas por ambos lados y póngalas en una charola para horno. Hornee durante 5 a 10 minutos o hasta que las orillas de las tortillas estén crujientes y comiencen a dorarse. Retírelas del horno y déjelas a un lado. 
    3. Rocíe un sartén grande con aceite en aerosol para cocinar. 
    4. Agregue el substituto de huevo en el sartén. Cocine a fuego medio por 2 ó 3 minutos hasta que el huevo esté bien cocido. 
    5. Ponga cantidades iguales de huevo en cada tortilla y espolvoree con ½ cucharada de queso. 
    6. Cocine en la parrilla del horno en “Broil” unos 2 minutos, hasta que el queso se derrita. Con una cuchara, ponga ½ taza de Pico de Gallo sobre cada tortilla y espolvoréela con pimienta negra molida. Sírvalo caliente.
    `,
    ingredient: `1 tortilla por porción. 
    Tiempo de preparación: 15 minutos 
    Tiempo de cocimiento: 15 minutos 
    Ingredientes: 
    4 tortillas de maíz (de 6 pulgadas) 
    ½ cucharada de aceite vegetal aceite en aerosol para cocinar 
    1½ tazas de substituto de huevo 
    2 cucharadas de queso rallado Cheddar o Monterey Jack 
    2 tazas de Pico de Gallo
    1/8 cucharadita de pimienta negra molida (ground black pepper) 
    `,
    image: '/images/pages/recipe/panqueque-fresa-platano.jpg'
  },
  {
    name: 'Ensalada verde de aguacate',
    description: `Calorías 78, Carbohidratos 9 g, Fibra Dietética 4 g, Proteínas 2 g, Grasa Total 5 g, Grasa Saturada 1 g, Grasa Trans 0 g, Colesterol 0 mg, Sodio 222 mg`,
    ingredient: `1½ tazas por porción. 
    Tiempo de preparación: 20 minutos 
    Ingredientes 6 tazas de vegetales surtidos de hoja cortados 
    3 tomates medianos, picados 
    5 cebollas verdes, picadas 
    1 pepino mediano, pelado y picado 
    2 cucharadas de jugo de limón 
    1 ⁄3 cucharadita de ajo en polvo (garlic powder) 
    ½ cucharadita de pimienta negra molida (ground black pepper) 
    ½ cucharadita de sal 
    1 aguacate grande, pelado 
    `,
    instruccions: `1. Mezcle los vegetales de hoja, el tomate, la cebolla y el pepino en una ensaladera. 
    2. En un tazón pequeño, mezcle el jugo de limón, el ajo en polvo, la pimienta negra molida y la sal. Agregue sobre la ensalada y mezcle. 
    3. Corte el aguacate por la mitad, a lo largo. Retire el hueso y la cáscara. Corte trozos delgados de aproximadamente 1 ⁄8 de pulgada de grosor. 
    4. Coloque los trozos de aguacate sobre la ensalada y sirva al momento
    `,
    image: '/images/pages/recipe/ensalada-verde-aguacate.jpg'
  }
]

export const clinicas = [
  {
    name: 'Clínica Guadalajara Américas',
    adress: 'Av. Américas, #166, Entre Av. México Y Reforma, Colonia Ladrón De Guevara. C.P. 44600',
    tel: '(33) 36 15 3168',
    image: '/images/clinicas/salud-digna-americas.jpg'
  },
  {
    name: 'Clínica Circunvalación',
    adress: 'Avenida Circunvalación Dr. Atl #571 Colonia Monumental, Guadalajara, Jalisco, C.P. 44320',
    tel: '(333) 6137 402',
    image: '/images/clinicas/salud-digna-2.png'
  }
]
export default constants
