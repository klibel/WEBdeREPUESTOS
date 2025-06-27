import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
   const navigate = useNavigate();
  const { cartItems } = location.state || { cartItems: [] }; // Extrae los datos del carrito

  const subtotal = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const iva = subtotal * 0.21;
  const total = subtotal + iva;

  // Estado para la fecha y hora
  const [currentDateTime, setCurrentDateTime] = useState('');

  // Función para obtener la fecha y hora actuales
  const getCurrentDateTime = () => {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return now.toLocaleString('es-ES', options); // Cambia 'es-ES' por tu localización si es necesario
  };

  // useEffect para establecer la fecha y hora al cargar el componente
  useEffect(() => {
    setCurrentDateTime(getCurrentDateTime());
  }, []);

  const handlePayment = () => {
    const itemsList = cartItems.map(item => `${item.nombre} (Cantidad: ${item.cantidad})`).join(', ');
    const message = `Artículos: ${itemsList}\nSubtotal: $${subtotal.toFixed(2)}\nIVA (21%): $${iva.toFixed(2)}\nTOTAL: $${total.toFixed(2)}`;
    const phoneNumber = '+584121040377';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappUrl, '_blank');
    navigate('/')
  };
  
  
  //styles
  const windowFacture = {
    minHeight: '94vh',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  }

  const containerFacture= {
    boxShadow: '1px 8px  12px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  const FactureStyle = {
    backgroundColor: 'rgb(255, 255, 255)',
    width: '98.5vw',
    maxWidth: '1200px',
  }

  const zoneTop = {
    backgroundColor: '#C42B2B',
    color: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  }

  const zoneBottom = {
    borderBottom: '2px solid rgba(0, 0, 0, 0.3)',
    overflowY: 'auto',
    maxHeight: '50vh',
    color: '#333'
  }

  const zonePago = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'end'
  }

  return(
  <div style={windowFacture}>
    <div style={{ margin: '17px', fontSize: '14px', color: '#333', fontWeight: 'bold' }}>
      Fecha y Hora: {currentDateTime}
    </div>
    <div style={containerFacture}>
      <div style={FactureStyle}>
        <div style={zoneTop}>
          <p style={{width: '40%', textAlign: 'center', fontSize: '11px'}}>PRODUCTO</p>
          <p style={{width: '20%', textAlign: 'center', fontSize: '11px'}}>CANTIDAD</p>
          <p style={{width: '20%', textAlign: 'center', fontSize: '11px'}}>PRECIO</p>
          <p style={{width: '20%', textAlign: 'center', fontSize: '11px'}}>SUBTOTAL</p>
        </div>
        <div style={zoneBottom}>
          {cartItems.map((item, index) => {
            const subtotalIndividual = item.precio * item.cantidad; // Calcular subtotal individual
            return (
              <div key={index} style={{ width: '100%', height: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: index % 2 === 0 ? 'rgba(0, 0, 0, 0.09)' : '#ffffff' }}>
                <p style={{ width: '40%', textAlign: 'center', fontSize: '10.5px' }}>{item.nombre}</p>
                <p style={{ width: '20%', textAlign: 'center', fontSize: '15px' }}>{item.cantidad}</p>
                <p style={{ width: '20%', textAlign: 'center', fontSize: '15px' }}>${item.precio.toFixed(2)}</p>
                <p style={{ width: '20%', textAlign: 'center', fontSize: '15px' }}>${subtotalIndividual.toFixed(2)}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div style={zonePago}>
        <div style={{width: '20%', height: '100%', display:'flex', flexDirection: 'column'}}>
          <p style={{color: '#333', fontSize: '13px' ,textAlign: 'center', fontWeight: 'bold', marginTop: '10px', marginBottom: '0px'}}>Subtotal</p>
          <p style={{color: '#333', fontSize: '13px',paddingBottom: '8px',textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.27)', fontWeight: 'bold'}}>IVA (21%)</p> 
          <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '16px', margin: '0px'}}>TOTAL:</p>
        </div>
        <div style={{width: '20%', height: '100%', display:'flex', flexDirection: 'column'}}>
          <p style={{color: '#333', fontSize: '13px' ,textAlign: 'center', fontWeight: 'bold', marginTop: '10px', marginBottom: '0px'}}>${subtotal.toFixed(2)}</p>
          <p style={{color: '#333', fontSize: '13px',paddingBottom: '8px',textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.27)', fontWeight: 'bold'}}>${iva.toFixed(2)}</p>
          <p style={{textAlign: 'center', fontWeight: 'bold', color: '#C42B2B', fontSize: '16px', margin: '0px'}}>${total.toFixed(2)}</p>
        </div>
      </div>
      <button style={{backgroundColor: '#C42B2B', border: 'none', color: 'white', width: '35%', height: '35px', maxHeight: '300px',marginBottom: '8px', cursor: 'pointer', marginTop: '15px'}} onClick={handlePayment}>PAGAR</button>
    </div>
  </div>
  )
}

export default Payment;