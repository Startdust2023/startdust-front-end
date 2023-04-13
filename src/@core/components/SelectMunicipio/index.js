import React, { useState } from 'react'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'

const EstadoMunicipioSelector = () => {
  // Datos de estados y municipios de la República Mexicana
  const estados = [
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

  const municipios = {
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

  // Estado y municipio seleccionados
  const [estado, setEstado] = useState('')
  const [municipio, setMunicipio] = useState('')

  // Manejar cambios en el selector de estado
  const handleEstadoChange = event => {
    setEstado(event.target.value)
    setMunicipio('') // Reiniciar el municipio seleccionado al cambiar de estado
  }

  // Manejar cambios en el selector de municipio
  const handleMunicipioChange = event => {
    setMunicipio(event.target.value)
  }

  return (
    <Box sx={{ display: 'table-cell' }}>
      <Box sx={{ display: 'flex', mb: 4, width: '100%' }}>
        <InputLabel id='demo-simple-select-helper-label'>Estado:</InputLabel>
        <Select fullWidth id='estado' value={estado} onChange={handleEstadoChange}>
          <MenuItem value=''>Selecciona un estado</MenuItem>
          {estados.map(estado => (
            <MenuItem key={estado.id} value={estado.id}>
              {estado.nombre}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{ display: 'flex', mb: 4, width: '100%' }}>
        <InputLabel id='demo-simple-select-helper-label'>Municipio:</InputLabel>
        <Select id='municipio' value={municipio} onChange={handleMunicipioChange}>
          <MenuItem value=''>Selecciona un municipio</MenuItem>
          {estado &&
            municipios[estado].map(municipio => (
              <MenuItem key={municipio.id} value={municipio.id}>
                {municipio.nombre}
              </MenuItem>
            ))}
        </Select>
      </Box>
    </Box>
  )
}

export default EstadoMunicipioSelector
