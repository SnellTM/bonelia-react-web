import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Truck, Sparkles, MapPin, Clock, Instagram, Star, PackageCheck, Menu, X } from 'lucide-react'
import './styles.css'

const WSP_1 = '5493624294313'
const WSP_2 = '5493624910570'

const sabores = [
  {
    nombre: 'Budín de Vainilla',
    bajada: 'Suave y delicado.',
    precio: '$ 3.000',
    descripcion: 'Clásico, esponjoso y perfecto para una merienda con café o mate.',
    color: '#e7bd86',
    detalles: ['300 g aprox.', 'Clásico', 'Recién horneado']
  },
  {
    nombre: 'Budín de Chocolate',
    bajada: 'Chocolate intenso.',
    precio: '$ 4.000',
    descripcion: 'Budín húmedo de chocolate con chips por dentro y chips por arriba, chocolatoso sin exagerar.',
    color: '#563029',
    detalles: ['300 g aprox.', 'Con chips', 'Húmedo']
  },
  {
    nombre: 'Budín de Limón',
    bajada: 'Fresco y aromático.',
    precio: '$ 3.500',
    descripcion: 'Budín húmedo con glaseado de jugo de limón, ralladura amarilla y tres rodajas caramelizadas comestibles.',
    color: '#d6b443',
    detalles: ['300 g aprox.', 'Glaseado de limón', '3 rodajas caramelizadas']
  },
  {
    nombre: 'Budín de Naranja',
    bajada: 'Cítrico y suave.',
    precio: '$ 3.500',
    descripcion: 'Sabor familiar, perfumado y fresco para acompañar una tarde dulce.',
    color: '#d87332',
    detalles: ['300 g aprox.', 'Aromático', 'Cítrico']
  },
  {
    nombre: 'Budín de Frutos Secos',
    bajada: 'Con frutos secos seleccionados.',
    precio: '$ 5.000',
    descripcion: 'Budín de vainilla con frutos secos por dentro, glaseado blanco y más frutos secos por encima.',
    color: '#a06b45',
    detalles: ['300 g aprox.', 'Con frutos secos', 'Glaseado blanco']
  }
]

function wsp(sabor = '', numero = WSP_1) {
  const texto = sabor
    ? `Hola Bonelia 💕 quiero hacer un pedido de ${sabor}.\n\nNombre:\nCantidad:\nRetiro o envío:\nMedio de pago:`
    : `Hola Bonelia 💕 quiero hacer un pedido.\n\nNombre:\nSabor:\nCantidad:\nRetiro o envío:\nMedio de pago:`
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
}

function Logo({ chico = false }) {
  return <div className={`logo ${chico ? 'logo-chico' : ''}`}>
    <div className="logo-b">B</div>
    {chico && <div><strong>BONELIA</strong><span>Budines artesanales</span></div>}
  </div>
}

function BudinVisual({ sabor }) {
  const isLimon = sabor.nombre.includes('Limón')
  const isChoco = sabor.nombre.includes('Chocolate')
  const isFrutos = sabor.nombre.includes('Frutos')
  return <div className="budin-wrap">
    <motion.div className="decor-dot dot-1" style={{ background: sabor.color }} animate={{ y:[0,-12,0], rotate:[0,8,0] }} transition={{ repeat:Infinity, duration:4 }} />
    <motion.div className="decor-dot dot-2" style={{ background: sabor.color }} animate={{ y:[0,10,0], rotate:[0,-8,0] }} transition={{ repeat:Infinity, duration:5 }} />
    <motion.div className={`budin ${isChoco ? 'choco' : ''}`} animate={{ y:[0,-8,0] }} transition={{ repeat:Infinity, duration:5, ease:'easeInOut' }}>
      <div className={`glaseado ${isChoco ? 'glaseado-choco' : ''}`}></div>
      {isLimon && <div className="limones"><span></span><span></span><span></span></div>}
      {isLimon && <div className="ralladura">{Array.from({length:18}).map((_,i)=><i key={i} style={{left:`${8+i*5}%`, top:`${34+(i%3)*7}px`, transform:`rotate(${i*18}deg)`}} />)}</div>}
      {isChoco && <div className="chips">{[12,28,43,61,78].map((x,i)=><i key={i} style={{left:`${x}%`, top:`${28+(i%2)*22}px`}} />)}</div>}
      {isFrutos && <div className="nueces">{[13,25,38,54,70,84].map((x,i)=><i key={i} style={{left:`${x}%`, top:`${26+(i%2)*20}px`, transform:`rotate(${i*24}deg)`}} />)}</div>}
    </motion.div>
    <div className="sombra"></div>
  </div>
}

function App() {
  const [sabor, setSabor] = React.useState(sabores[2])
  const [menu, setMenu] = React.useState(false)
  return <main>
    <nav className="nav">
      <a href="#inicio"><Logo chico /></a>
      <div className="links"><a href="#sabores">Sabores</a><a href="#pedidos">Pedidos</a><a href="#contacto">Contacto</a></div>
      <a className="btn mini" href={wsp()} target="_blank">Pedir</a>
      <button className="hamb" onClick={()=>setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    </nav>
    {menu && <div className="mobile"><a href="#sabores">Sabores</a><a href="#pedidos">Pedidos</a><a href="#contacto">Contacto</a></div>}

    <section id="inicio" className="hero section">
      <div className="flores flores-a"></div><div className="flores flores-b"></div>
      <motion.div className="hero-text" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
        <span className="pill"><Sparkles size={16}/> Pedidos jueves y viernes · cupos limitados</span>
        <h1>BONELIA</h1>
        <h2>Budines artesanales recién horneados</h2>
        <p>Caseros, cercanos y con presentación cuidada. Hechos para compartir, regalar o darse un gusto dulce cuando el día lo pide.</p>
        <div className="acciones"><a className="btn" href={wsp()} target="_blank"><MessageCircle/> Hacer pedido</a><a className="btn claro" href="#sabores">Ver sabores</a></div>
      </motion.div>
      <motion.div className="hero-card" initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
        <Logo />
        <BudinVisual sabor={sabor}/>
        <div className="hero-info"><span>Sabor destacado</span><strong>{sabor.nombre}</strong><p>{sabor.bajada}</p></div>
      </motion.div>
    </section>

    <section id="sabores" className="section sabores-section">
      <div className="titulo"><span>Sabores</span><h2>La carta dulce de Bonelia</h2><p>Una base simple y clara para vender: sabores actuales, descripciones reales y botones directos para pedir por WhatsApp.</p></div>
      <div className="cards">
        {sabores.map((s,i)=><motion.button key={s.nombre} className={`card ${sabor.nombre===s.nombre?'activa':''}`} onClick={()=>setSabor(s)} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} whileHover={{y:-6}}>
          <div className="card-visual" style={{'--accent':s.color}}><BudinVisual sabor={s}/></div><h3>{s.nombre}</h3><p>{s.bajada}</p><strong>{s.precio}</strong>
        </motion.button>)}
      </div>
      <motion.div className="detalle" key={sabor.nombre} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
        <div className="detalle-visual"><BudinVisual sabor={sabor}/></div>
        <div className="detalle-text"><span>Seleccionado</span><h2>{sabor.nombre}</h2><p>{sabor.descripcion}</p><div className="tags">{sabor.detalles.map(d=><em key={d}>{d}</em>)}</div><div className="detalle-row"><strong>{sabor.precio}</strong><a className="btn" href={wsp(sabor.nombre)} target="_blank"><MessageCircle/> Pedir este sabor</a></div></div>
      </motion.div>
    </section>

    <section id="pedidos" className="section pedidos">
      <div className="titulo"><span>Pedidos</span><h2>Cómo comprar</h2><p>La página tiene que lograr que la persona vea, entienda y te escriba sin vueltas.</p></div>
      <div className="pasos">
        {[[Heart,'Elegí','Mirá los sabores y elegí el budín que querés reservar.'],[MessageCircle,'Escribinos','El botón abre WhatsApp con el mensaje de pedido armado.'],[Truck,'Coordinamos','Definimos retiro en Parodi 236 o envío según zona.'],[PackageCheck,'Disfrutá','Tu budín sale cuidado, fresco y listo para compartir.']].map(([Icon,t,txt],i)=><div className="paso" key={t}><Icon/><span>Paso {i+1}</span><h3>{t}</h3><p>{txt}</p></div>)}
      </div>
    </section>

    <section className="section cta">
      <div className="cta-box"><Logo/><h2>Pedidos abiertos para el fin de semana</h2><p>Tomamos pedidos jueves y viernes. Cupos limitados para mantener calidad y organizar los horneados.</p><div className="acciones"><a className="btn claro-full" href={wsp()} target="_blank">WhatsApp principal</a><a className="btn trans" href={wsp('',WSP_2)} target="_blank">WhatsApp alternativo</a></div></div>
      <div className="info-grid">
        {[[Clock,'Días de pedido','Jueves y viernes para el fin de semana.'],[MapPin,'Zona','Resistencia, Chaco. Retiro en Parodi 236 o envío a coordinar.'],[Instagram,'Instagram','Cuenta en preparación.'],[Star,'Próximamente','Boxes, sabores especiales y ediciones de temporada.']].map(([Icon,t,txt])=><div className="info" key={t}><Icon/><h3>{t}</h3><p>{txt}</p></div>)}
      </div>
    </section>

    <footer id="contacto"><Logo/><h2>BONELIA</h2><p>Budines artesanales recién horneados</p><div className="direccion"><strong>Resistencia, Chaco</strong><span>Parodi 236 · Retiros y envíos a coordinar</span></div><div className="acciones center"><a className="btn" href={wsp()} target="_blank">WhatsApp principal</a><a className="btn claro" href={wsp('',WSP_2)} target="_blank">WhatsApp alternativo</a></div><small>© Bonelia · Hechos con amor, como nuestros budines.</small></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
