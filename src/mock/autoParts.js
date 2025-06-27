const motorParts = [
  'Kit de Pistones', 'Bujías NGK', 'Bomba de Agua', 'Correa Distribución', 
  'Junta de Culata', 'Sensor de Oxígeno', 'Termostato', 'Filtro de Aceite',
  'Filtro de Aire', 'Bomba de Combustible', 'Radiador', 'Manguera Refrigerante',
  'Válvula PCV', 'Retén de Cigüeñal', 'Árbol de Levas', 'Kit de Juntas',
  'Turbo', 'Intercooler', 'Soporte de Motor', 'Sensor MAP', 'Sensor MAF',
  'Cadena de Distribución', 'Bomba de Dirección', 'Cremallera Dirección',
  'Caja de Cambios', 'Diferencial', 'Embrague', 'Convertidor de Par',
  'Resonador', 'Silenciador', 'Catalizador', 'Sonda Lambda', 'Termocontacto',
  'Válvula EGR', 'Tensor de Correa'
];

const brakeParts = [
  'Pastillas Freno Delanteras', 'Pastillas Freno Traseras', 'Discos Freno Delanteros',
  'Tambores Freno', 'Cilindro Maestro', 'Bomba de Freno', 'Líquido de Frenos',
  'Mangueras de Freno', 'Sensor ABS', 'Servofreno', 'Freno de Mano',
  'Pinzas de Freno', 'Regulador de Freno', 'Soportes Pastillas',
  'Kit Reparación Frenos', 'Cable Freno de Mano', 'Discos Ventilados',
  'Tambores Estriados', 'Pastillas Cerámicas', 'Pastillas Semi-Metálicas'
];

const electricParts = [
  'Batería 12V', 'Alternador', 'Motor de Arranque', 'Kit de Fusibles', 'Relés',
  'Cableado Principal', 'Faros Delanteros', 'Luces Traseras', 'Intermitentes',
  'Luces de Frenos', 'Bombillas', 'Switch de Luces', 'Sensor de Parqueo',
  'Cámara de Reversa', 'Radio', 'Bocinas', 'Amplificador', 'Antena',
  'Cargador USB', 'Encendedor', 'Ventilador Eléctrico', 'Motor Limpiaparabrisas',
  'Switch Ventanas', 'Motor Elevalunas', 'Centralita Eléctrica',
  'Sensor de Lluvia', 'Alarma', 'Cierre Centralizado', 'Espejos Eléctricos',
  'Computadora a Bordo'
];

const generalParts = [
  'Retrovisor', 'Parabrisas', 'Limpiaparabrisas', 'Tapa de Gasolina', 'Molduras',
  'Manijas de Puertas', 'Alfombras', 'Tapa de Baúl', 'Antena', 'Porta Vasos',
  'Tapa de Consola', 'Reposacabezas', 'Cinturones Seguridad', 'Tapa de Volante',
  'Pedales', 'Tapa de Fusibles', 'Insignia', 'Emblema', 'Tapa de Rueda', 'Logo',
  'Guardafangos', 'Defensa', 'Rejilla Frontal', 'Capó', 'Puertas', 'Ventanas',
  'Cerraduras', 'Cableado Puertas', 'Sellos de Puertas', 'Alerón'
];

const brandsModels = {
  chevrolet: ['Aveo', 'Optra', 'Spark', 'Cruze', 'Captiva', 'Corsa', 'Malibu', 'Orlando', 'S10', 'Silverado', 'Blazer', 'Tracker', 'Camaro', 'Corvette', 'Tahoe', 'Suburban', 'Equinox', 'Trailblazer', 'Colorado', 'Montana', 'Caprice'],
  ford: ['Fiesta', 'Focus', 'Explorer', 'Ranger', 'Escape', 'Fusion', 'Mustang', 'Edge', 'Expedition', 'F-150', 'EcoSport', 'Taurus', 'Transit', 'Ka', 'Figo', 'Endeavour', 'Territory', 'Bronco', 'Maverick', 'Everest'],
  nissan: ['Sentra', 'Frontier', 'X-Trail', 'Versa', 'Tiida', 'March', 'Altima', 'Murano', 'Pathfinder', 'Patrol', 'Qashqai', 'Juke', 'Navara', 'Leaf', 'Kicks', 'Maxima', '370Z', 'GT-R', 'Armada', 'Almera', 'Elantra'],
  jeep: ['Cherokee', 'Wrangler', 'Grand Cherokee', 'Compass', 'Renegade', 'Gladiator', 'Commander', 'Liberty', 'Patriot', 'Wagoneer', 'Grand Wagoneer', 'Comanche', 'CJ-7', 'Willys', 'Scrambler', 'FC-150', 'DJ-5', 'J-Series', 'Forward Control', 'Dispatcher'],
  hyundai: ['Accent', 'Santa Fe', 'Tucson', 'Elantra', 'Getz', 'Sonata', 'i10', 'i20', 'i30', 'Kona', 'Palisade', 'Venue', 'Veloster', 'Genesis', 'H1', 'H100', 'Starex', 'Terracan', 'Trajet', 'Veracruz'],
  fiat: ['Palio', 'Siena', 'Uno', 'Strada', 'Duna', 'Mobi', 'Argo', 'Cronos', 'Toro', 'Ducato', 'Fiorino', 'Linea', 'Grand Siena', 'Idea', 'Punto', '500', '500X', '500L', 'Pulse', 'Fastback'],
  toyota: ['Corolla', 'Hilux', 'Prado', 'RAV4', 'Yaris', 'Fortuner', 'Camry', 'Land Cruiser', 'Avanza', 'Innova', 'Agya', 'Rush', '4Runner', 'Tacoma', 'Tundra', 'Sequoia', 'Sienna', 'Highlander', 'C-HR', 'Vios']
};

const generatePartsForModel = (brand, model) => {
  const parts = [];
  const partTypes = [
    { type: 'motor', parts: motorParts, count: 35 },
    { type: 'frenos', parts: brakeParts, count: 15 },
    { type: 'electrico', parts: electricParts, count: 30 },
    { type: 'general', parts: generalParts, count: 20 }
  ];

  let idCounter = 1;

  partTypes.forEach(({ type, parts: typeParts, count }) => {
    for (let i = 0; i < count; i++) {
      const partIndex = i % typeParts.length;
      const price = calculatePrice(type, i);
      
      parts.push({
        id: `${brand}-${model}-${type}-${idCounter++}`,
        nombre: `${typeParts[partIndex]} ${brand} ${model}`,
        type: type,
        marca: brand,
        modelo: model,
        precio: price
      });
    }
  });

  return parts;
};

const calculatePrice = (type, index) => {
  const basePrices = {
    motor: 15 + (index % 30),
    frenos: 10 + (index % 20),
    electrico: 5 + (index % 25),
    general: 3 + (index % 15)
  };
  return parseFloat((basePrices[type] * (1 + (index % 10) / 10)).toFixed(2));
};

const autoParts = Object.entries(brandsModels).flatMap(([brand, models]) =>
  models.flatMap(model => generatePartsForModel(brand, model))
);

export default autoParts;