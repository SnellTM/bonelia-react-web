import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, Flower2, Instagram, MapPin, Menu, MessageCircle, PackageCheck, Sparkles, Star, Truck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WHATSAPP_NUMBERS = {
  principal: '5493624294313',
  alternativo: '5493624910570',
};

const brand = {
  location: 'Resistencia, Chaco',
  address: 'Parodi 236',
  orderDays: 'Jueves y viernes',
};

const flavors = [
  {
    id: 'vainilla',
    name: 'Budín de Vainilla',
    short: 'Clásico, suave y esponjoso.',
    description: 'Un budín simple, húmedo y delicado. Ideal para merienda, café o para regalar cuando querés quedar bien sin complicarte.',
    price: '$ 3.000',
    accent: '#E8BE83',
    details: ['300 g aprox.', 'Sabor clásico', 'Recién horneado'],
  },
  {
    id: 'chocolate',
    name: 'Budín de Chocolate',
    short: 'Chocolatoso, húmedo y tentador.',
    description: 'Budín de chocolate con chips por dentro y chips por arriba. Intenso, húmedo y bien chocolatoso, pero sin exagerar la cantidad de chips.',
    price: '$ 4.000',
    accent: '#5B3028',
    details: ['300 g aprox.', 'Con chips', 'Chocolate intenso'],
  },
  {
    id: 'limon',
    name: 'Budín de Limón',
    short: 'Glaseado de limón y rodajas caramelizadas.',
    description: 'Budín húmedo de limón con glaseado blanco hecho con jugo de limón y ralladura amarilla. Lleva tres rodajas de limón caramelizadas y comestibles.',
    price: '$ 3.500',
    accent: '#D4A735',
    details: ['300 g aprox.', 'Glaseado de limón', '3 rodajas caramelizadas'],
  },
  {
    id: 'naranja',
    name: 'Budín de Naranja',
    short: 'Cítrico, aromático y suave.',
    description: 'Un sabor fresco y familiar, con perfume a naranja y textura húmeda. Perfecto para acompañar mates, café o una tarde tranquila.',
    price: '$ 3.500',
    accent: '#D66F2A',
    details: ['300 g aprox.', 'Aromático', 'Sabor cítrico'],
  },
  {
    id: 'frutos-secos',
    name: 'Budín de Frutos Secos',
    short: 'Vainilla con frutos secos y glaseado.',
    description: 'Budín sabor vainilla con frutos secos por dentro. Arriba lleva glaseado blanco y más frutos secos para una terminación artesanal y elegante.',
    price: '$ 5.000',
    accent: '#9E6B45',
    details: ['300 g aprox.', 'Con frutos secos', 'Glaseado blanco'],
  },
];

function whatsappLink(flavor = '', phone = WHATSAPP_NUMBERS.principal) {
  const text = flavor
    ? `Hola Bonelia 💕 quiero hacer un pedido de ${flavor}.\n\nNombre:\nCantidad:\nRetiro o envío:\nMedio de pago:`
    : `Hola Bonelia 💕 quiero hacer un pedido.\n\nNombre:\nSabor:\nCantidad:\nRetiro o envío:\nMedio de pago:`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function LoadFonts() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  }, []);
  return null;
}

function Logo({ small = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`relative flex items-center justify-center rounded-full bg-[#842E3A] text-[#FFF7EF] shadow-xl shadow-[#842E3A]/20 ${small ? 'h-11 w-11' : 'h-20 w-20'}`}>
        <div className="absolute inset-1 rounded-full border border-[#F5D8D1]" />
        <div className="absolute inset-[-5px] rounded-full border border-[#B86A70]/60" />
        <span className={`${small ? 'text-3xl' : 'text-6xl'} leading-none`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>B</span>
      </div>
      {small && (
        <div className="leading-tight">
          <p className="text-xl tracking-[0.22em] text-[#3B211B]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>BONELIA</p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#A25C62]">Budines artesanales</p>
        </div>
      )}
    </div>
  );
}

function FlowerPattern({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
        <path d="M38 284C112 201 178 132 302 52" stroke="#A94E59" strokeWidth="1.2" strokeLinecap="round" opacity=".45" />
        {Array.from({ length: 15 }).map((_, i) => {
          const x = 58 + i * 15;
          const y = 262 - i * 13;
          return <ellipse key={i} cx={x} cy={y} rx="9" ry="20" transform={`rotate(${i % 2 ? -42 : 39} ${x} ${y})`} fill="#F4C8C4" stroke="#A94E59" strokeWidth=".9" opacity=".42" />;
        })}
      </svg>
    </div>
  );
}

function SectionTitle({ label, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-[#A94E59]">{label}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl leading-[0.95] text-[#3B211B] md:text-7xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{title}</motion.h2>
      {text && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#745049] md:text-lg">{text}</p>}
    </div>
  );
}

function CakeIllustration({ flavor }) {
  return (
    <motion.div key={flavor.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="relative mx-auto flex aspect-[5/4] w-full max-w-xl items-center justify-center">
      <div className="absolute h-[76%] w-[76%] rounded-full bg-[#F5D6CF] blur-3xl" />
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative w-[86%]">
        <div className="absolute -top-16 left-10 flex gap-4 opacity-90">
          {[0, 1, 2].map((i) => <motion.span key={i} animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }} transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.2 }} className="block h-9 w-9 rounded-full border border-white/60 shadow-lg" style={{ background: flavor.accent }} />)}
        </div>
        <div className="relative h-44 overflow-hidden rounded-[2.5rem] rounded-b-[3.5rem] border border-white/70 bg-gradient-to-b from-[#B6744B] to-[#7E442D] shadow-2xl shadow-[#7E442D]/25">
          <div className="absolute left-0 top-0 h-16 w-full rounded-b-[55%] bg-[#FFF7EF] shadow-inner" />
          {flavor.id === 'limon' && <><div className="absolute left-0 top-4 h-12 w-full rounded-b-[55%] bg-[#FFF7EF]" />{[55, 150, 250].map((x, i) => <div key={i} className="absolute top-2 h-14 w-14 rounded-full border-[5px] border-[#D8B84A] bg-[#F8DB71]/80" style={{ left: x }} />)}{Array.from({ length: 18 }).map((_, i) => <span key={i} className="absolute top-8 h-1 w-3 rounded-full bg-[#D6B33E]" style={{ left: `${8 + i * 5}%`, transform: `rotate(${i * 23}deg)` }} />)}</>}
          {flavor.id === 'chocolate' && <><div className="absolute left-0 top-0 h-16 w-full rounded-b-[55%] bg-[#45231C]" />{[18, 34, 57, 74].map((x, i) => <span key={i} className="absolute top-8 h-4 w-4 rounded-md bg-[#25110E]" style={{ left: `${x}%`, transform: `rotate(${i * 18}deg)` }} />)}</>}
          {flavor.id === 'frutos-secos' && <><div className="absolute left-0 top-3 h-14 w-full rounded-b-[55%] bg-[#FFF7EF]" />{[12, 27, 44, 62, 80].map((x, i) => <span key={i} className="absolute top-7 h-5 w-7 rounded-full bg-[#9E6B45]" style={{ left: `${x}%`, transform: `rotate(${i * 29}deg)` }} />)}</>}
          <div className="absolute inset-x-10 bottom-5 h-5 rounded-full bg-white/10 blur-sm" />
        </div>
        <div className="mx-auto mt-[-3px] h-8 w-[74%] rounded-b-[100%] bg-[#5F3429] opacity-25 blur-sm" />
      </motion.div>
    </motion.div>
  );
}

export default function BoneliaLandingPage() {
  const [selected, setSelected] = useState(flavors[2]);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7E5DB] text-[#3B211B]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <LoadFonts />
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
        <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-[#FFF7EF]/75 px-4 py-3 shadow-xl shadow-[#8E2F3B]/10 backdrop-blur-xl">
          <a href="#inicio"><Logo small /></a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#6D4941] md:flex"><a className="transition hover:text-[#8E2F3B]" href="#sabores">Sabores</a><a className="transition hover:text-[#8E2F3B]" href="#pedidos">Pedidos</a><a className="transition hover:text-[#8E2F3B]" href="#contacto">Contacto</a></div>
          <div className="flex items-center gap-2"><Button asChild className="hidden rounded-full bg-[#8E2F3B] px-5 text-[#FFF7EF] hover:bg-[#742631] sm:flex"><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> Pedir</a></Button><button onClick={() => setOpenMenu(!openMenu)} className="rounded-full bg-[#F2D2CD] p-3 text-[#8E2F3B] md:hidden">{openMenu ? <X size={18} /> : <Menu size={18} />}</button></div>
        </motion.nav>
        {openMenu && <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/70 bg-[#FFF7EF]/90 p-4 shadow-xl backdrop-blur-xl md:hidden"><a onClick={() => setOpenMenu(false)} href="#sabores" className="block rounded-2xl px-4 py-3 font-semibold text-[#6D4941]">Sabores</a><a onClick={() => setOpenMenu(false)} href="#pedidos" className="block rounded-2xl px-4 py-3 font-semibold text-[#6D4941]">Pedidos</a><a onClick={() => setOpenMenu(false)} href="#contacto" className="block rounded-2xl px-4 py-3 font-semibold text-[#6D4941]">Contacto</a></div>}
      </header>

      <section id="inicio" className="relative min-h-screen px-5 pb-16 pt-36 md:px-10 md:pt-40">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_16%,#FAD0CA,transparent_34%),radial-gradient(circle_at_88%_24%,#F3C9C7,transparent_30%),linear-gradient(180deg,#F8E5DB,#F5DCD3)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.24]" style={{ backgroundImage: 'linear-gradient(90deg, rgba(142,47,59,.18) 1px, transparent 1px), linear-gradient(rgba(142,47,59,.18) 1px, transparent 1px)', backgroundSize: '54px 54px' }} />
        <FlowerPattern className="-left-28 top-28 rotate-12" /><FlowerPattern className="-right-24 bottom-0 rotate-180" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E6B5AE] bg-white/35 px-4 py-2 text-sm font-semibold text-[#8E2F3B] backdrop-blur-sm"><Sparkles size={16} /> Pedidos {brand.orderDays.toLowerCase()} · cupos limitados</motion.div>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}><div className="mb-7 md:hidden"><Logo /></div><h1 className="max-w-3xl text-[5.4rem] leading-[0.78] tracking-[0.08em] text-[#3B211B] md:text-[9.5rem]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>BONELIA</h1><p className="mt-7 max-w-xl text-3xl italic text-[#A94E59] md:text-4xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Budines artesanales recién horneados</p><p className="mt-6 max-w-xl text-lg leading-8 text-[#6D4941]">Caseros, cercanos y con presentación cuidada. Hechos para compartir, regalar o darse un gusto dulce cuando el día lo pide.</p></motion.div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="rounded-full bg-[#8E2F3B] px-7 py-7 text-base text-[#FFF7EF] shadow-lg shadow-[#8E2F3B]/20 hover:bg-[#742631]"><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-5 w-5" /> Hacer pedido</a></Button><Button asChild size="lg" variant="outline" className="rounded-full border-[#B86A70] bg-white/25 px-7 py-7 text-base text-[#8E2F3B] hover:bg-white/55"><a href="#sabores">Ver sabores <ArrowRight className="ml-2 h-5 w-5" /></a></Button></motion.div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">{['300 g aprox.', 'Hechos a pedido', 'Resistencia'].map((item) => <div key={item} className="rounded-3xl border border-white/70 bg-white/30 p-4 text-center text-sm font-semibold text-[#6D4941] backdrop-blur-sm">{item}</div>)}</div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.14, duration: 0.7 }} className="relative hidden md:block"><div className="absolute -left-10 top-10 z-10"><Logo /></div><div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-[#FFF7EF]/45 p-4 shadow-2xl shadow-[#8E2F3B]/15 backdrop-blur-sm"><div className="absolute right-8 top-8 z-20 rounded-full bg-[#8E2F3B] px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[#FFF7EF] shadow-xl">Bonelia</div><div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] bg-[#F2CDC7]"><CakeIllustration flavor={selected} /><div className="absolute bottom-5 left-5 right-5 rounded-[2rem] border border-white/70 bg-[#FFF7EF]/82 p-6 shadow-xl backdrop-blur-lg"><p className="text-xs font-bold uppercase tracking-[0.35em] text-[#A94E59]">Sabor destacado</p><h3 className="mt-1 text-4xl text-[#3B211B]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{selected.name}</h3><p className="mt-2 text-sm leading-6 text-[#6D4941]">{selected.short}</p></div></div></div></motion.div>
        </div>
      </section>

      <section id="sabores" className="relative px-5 py-24 md:px-10"><FlowerPattern className="-right-32 top-10 rotate-90" /><SectionTitle label="Sabores" title="La carta dulce de Bonelia" text="Una base simple y clara para vender: sabores actuales, descripciones reales y botones directos para pedir por WhatsApp." />
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-5">{flavors.map((flavor, index) => <motion.button key={flavor.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ y: -8 }} onClick={() => setSelected(flavor)} className={`group rounded-[2rem] border p-4 text-left shadow-lg shadow-[#8E2F3B]/5 backdrop-blur-sm transition ${selected.id === flavor.id ? 'border-[#8E2F3B] bg-[#FFF7EF]/80' : 'border-white/70 bg-white/32 hover:bg-white/55'}`}><div className="relative mb-5 aspect-square overflow-hidden rounded-[1.5rem] bg-[#F4D6CF]"><div className="absolute inset-0 opacity-25" style={{ background: flavor.accent }} /><CakeIllustration flavor={flavor} /></div><h3 className="text-2xl leading-6 text-[#3B211B]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{flavor.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-[#745049]">{flavor.short}</p><div className="mt-4 flex items-center justify-between"><span className="font-bold text-[#8E2F3B]">{flavor.price}</span><span className="rounded-full bg-[#F2D2CD] p-2 text-[#8E2F3B] transition group-hover:translate-x-1"><ArrowRight size={17} /></span></div></motion.button>)}</div>
        <div className="mx-auto mt-10 grid max-w-7xl overflow-hidden rounded-[3rem] border border-white/70 bg-[#FFF7EF]/55 shadow-2xl shadow-[#8E2F3B]/10 backdrop-blur-sm md:grid-cols-[.9fr_1.1fr]"><div className="relative min-h-[380px] bg-[#F3CEC7] p-6"><div className="absolute inset-0 opacity-20" style={{ background: selected.accent }} /><CakeIllustration flavor={selected} /></div><div className="p-8 md:p-12"><p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-[#A94E59]">Seleccionado</p><h3 className="text-5xl leading-[0.95] text-[#3B211B] md:text-7xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{selected.name}</h3><p className="mt-5 max-w-xl text-lg leading-8 text-[#6D4941]">{selected.description}</p><div className="mt-7 flex flex-wrap gap-3">{selected.details.map((detail) => <span key={detail} className="inline-flex items-center gap-2 rounded-full bg-[#F5DAD6] px-4 py-2 text-sm font-semibold text-[#7B3B43]"><Check size={15} /> {detail}</span>)}</div><div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"><span className="text-3xl font-bold text-[#8E2F3B]">{selected.price}</span><Button asChild size="lg" className="rounded-full bg-[#8E2F3B] px-7 text-[#FFF7EF] hover:bg-[#742631]"><a href={whatsappLink(selected.name)} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-5 w-5" /> Pedir este sabor</a></Button></div></div></div>
      </section>

      <section id="pedidos" className="relative bg-[#FFF7EF]/48 px-5 py-24 md:px-10"><div className="mx-auto max-w-7xl"><SectionTitle label="Pedidos" title="Cómo comprar" text="La página no tiene que ser complicada: tiene que lograr que la persona vea, entienda y te escriba sin vueltas." /><div className="mt-14 grid gap-5 md:grid-cols-4">{[[Flower2, 'Elegí', 'Mirá los sabores y elegí el budín que querés reservar.'], [MessageCircle, 'Escribinos', 'El botón abre WhatsApp con el mensaje de pedido armado.'], [Truck, 'Coordinamos', 'Definimos retiro en Parodi 236 o envío según zona.'], [PackageCheck, 'Disfrutá', 'Tu budín sale cuidado, fresco y listo para compartir.']].map(([Icon, title, text], i) => <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}><Card className="h-full rounded-[2rem] border-white/70 bg-white/45 shadow-lg shadow-[#8E2F3B]/5"><CardContent className="p-7"><div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#F2D2CD] text-[#8E2F3B]"><Icon size={28} /></div><p className="mb-2 text-sm font-bold text-[#A94E59]">Paso {i + 1}</p><h3 className="text-3xl text-[#3B211B]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{title}</h3><p className="mt-3 leading-7 text-[#745049]">{text}</p></CardContent></Card></motion.div>)}</div></div></section>

      <section className="px-5 py-24 md:px-10"><div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-[1fr_1.05fr]"><motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[3rem] bg-[#8E2F3B] p-8 text-[#FFF7EF] shadow-2xl shadow-[#8E2F3B]/25 md:p-12"><Logo /><h2 className="mt-10 max-w-lg text-5xl leading-[0.96] md:text-7xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Pedidos abiertos para el fin de semana</h2><p className="mt-6 max-w-md text-lg leading-8 text-[#F7DCD7]">Tomamos pedidos jueves y viernes. Los cupos son limitados para mantener la calidad y organizar los horneados.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="rounded-full bg-[#FFF7EF] px-7 text-[#8E2F3B] hover:bg-white"><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp principal</a></Button><Button asChild size="lg" variant="outline" className="rounded-full border-[#FFF7EF]/70 bg-transparent px-7 text-[#FFF7EF] hover:bg-[#FFF7EF]/10"><a href={whatsappLink('', WHATSAPP_NUMBERS.alternativo)} target="_blank" rel="noreferrer">WhatsApp alternativo</a></Button></div></motion.div><div className="grid gap-5 md:grid-cols-2">{[[Clock, 'Días de pedido', 'Jueves y viernes para organizar entregas del fin de semana.'], [MapPin, 'Zona', `${brand.location}. Retiro en ${brand.address} o envío a coordinar.`], [Instagram, 'Instagram', 'Cuenta en preparación. Cuando esté lista, conectamos el botón.'], [Star, 'Próximamente', 'Boxes, sabores especiales y ediciones de temporada.']].map(([Icon, title, text], i) => <Card key={title} className="h-full rounded-[2rem] border-white/70 bg-white/45 shadow-lg shadow-[#8E2F3B]/5"><CardContent className="p-7"><Icon className="mb-6 text-[#A94E59]" size={30} /><h3 className="text-3xl text-[#3B211B]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{title}</h3><p className="mt-3 leading-7 text-[#745049]">{text}</p></CardContent></Card>)}</div></div></section>

      <section className="bg-[#FFF7EF]/48 px-5 py-24 md:px-10"><SectionTitle label="Confianza" title="Hecho como en casa, presentado como marca" text="Esta sección después puede llevar reseñas reales, fotos de clientes y capturas de WhatsApp." /><div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">{['Riquísimo, húmedo y con una presentación hermosa.', 'El de chocolate es súper tentador, ideal para merendar.', 'Llegó perfecto y se nota que está hecho con amor.'].map((review) => <Card key={review} className="rounded-[2rem] border-white/70 bg-white/45 shadow-lg shadow-[#8E2F3B]/5"><CardContent className="p-8"><div className="mb-5 flex gap-1 text-[#A94E59]">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={18} fill="currentColor" />)}</div><p className="text-3xl italic leading-9 text-[#3B211B]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>“{review}”</p></CardContent></Card>)}</div></section>

      <footer id="contacto" className="relative px-5 py-20 text-center md:px-10"><FlowerPattern className="-left-32 bottom-0 -rotate-12" /><div className="mx-auto max-w-3xl"><div className="flex justify-center"><Logo /></div><h2 className="mt-7 text-6xl tracking-[0.12em] text-[#3B211B] md:text-8xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>BONELIA</h2><p className="mt-3 text-3xl italic text-[#A94E59]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Budines artesanales recién horneados</p><div className="mx-auto mt-8 max-w-xl rounded-[2rem] border border-white/70 bg-white/35 p-6 text-[#6D4941] shadow-lg shadow-[#8E2F3B]/5 backdrop-blur-sm"><p className="font-bold text-[#3B211B]">{brand.location}</p><p className="mt-1">{brand.address} · Retiros y envíos a coordinar</p></div><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg" className="rounded-full bg-[#8E2F3B] px-8 py-7 text-[#FFF7EF] hover:bg-[#742631]"><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp principal</a></Button><Button asChild size="lg" variant="outline" className="rounded-full border-[#B86A70] bg-white/25 px-8 py-7 text-[#8E2F3B] hover:bg-white/55"><a href={whatsappLink('', WHATSAPP_NUMBERS.alternativo)} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp alternativo</a></Button></div><p className="mt-12 text-sm text-[#8B5B51]">© Bonelia · Hechos con amor, como nuestros budines.</p></div></footer>
    </main>
  );
}
