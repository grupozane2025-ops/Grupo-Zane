// Landing page de Grupo Zane con formulario y consentimiento
// ✅ Se agregaron imágenes reales de tus productos
// ✅ Se incluyó formulario con envío a correo y WhatsApp
// ✅ Ahora con checkbox de consentimiento obligatorio

export default function GrupoZaneLanding() {
  const products = [
    {
      name: "Shampoo Aurumcare Sapuyulo",
      img: "/mnt/data/ChatGPT Image 1 sept 2025, 13_15_45.png",
      desc: "Con extracto natural de sapuyulo, 1 litro.",
    },
    {
      name: "Shampoo Aurumcare Aguacate",
      img: "/mnt/data/ChatGPT Image 1 sept 2025, 13_15_38.png",
      desc: "Hidratación profunda con aguacate, 1 litro.",
    },
    {
      name: "Acondicionadores Aurumcare",
      img: "/mnt/data/ChatGPT Image 1 sept 2025, 13_33_42.png",
      desc: "Línea completa de acondicionadores premium, 500 ml.",
    },
    {
      name: "Exfoliante Avena & Miel",
      img: "/mnt/data/ChatGPT Image 1 sept 2025, 17_34_52.png",
      desc: "Exfoliante corporal y facial, 250 ml.",
    },
    {
      name: "Acondicionador Keratina",
      img: "/mnt/data/ChatGPT Image 1 sept 2025, 17_39_09.png",
      desc: "Reparación y fuerza intensiva, 500 ml.",
    },
    {
      name: "Agua de Rosas",
      img: "/mnt/data/ChatGPT Image 1 sept 2025, 17_39_21.png",
      desc: "Tónico facial hidratante y refrescante, 200 ml.",
    },
  ];

  const planetImages = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527774292745-08ab2d2f6e3b?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <main className="font-sans text-slate-800 bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white grid place-content-center font-bold shadow-sm">GZ</div>
            <span className="font-extrabold tracking-tight text-lg">Grupo Zane</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#productos" className="hover:text-emerald-700">Productos</a>
            <a href="#planeta" className="hover:text-emerald-700">Planeta</a>
            <a href="#contacto" className="hover:text-emerald-700">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Cuidamos a las personas <span className="text-emerald-700">y al planeta</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Productos Aurumcare y Grupo Zane: innovación, calidad y compromiso con la naturaleza.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={products[0].img} alt="Producto destacado" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-3xl shadow"/>
            <div className="grid gap-3">
              <img src={planetImages[0]} alt="Naturaleza" loading="lazy" className="w-full h-32 object-cover rounded-3xl shadow"/>
              <img src={planetImages[1]} alt="Reforestación" loading="lazy" className="w-full h-32 object-cover rounded-3xl shadow"/>
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Nuestros productos</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <article key={i} className="group rounded-3xl border border-slate-200 p-4 hover:shadow-lg transition bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover"/>
              </div>
              <h3 className="mt-4 font-semibold text-lg leading-snug">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Planeta */}
      <section id="planeta" className="bg-emerald-50/60 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Nuestro compromiso con el planeta</h2>
          <p className="mt-2 text-slate-700 max-w-2xl">
            Diseñamos productos pensando en el ciclo completo: selección de materias primas, procesos eficientes y empaques que favorecen la economía circular.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {planetImages.map((src, i) => (
              <img key={i} src={src} alt={`Imagen sostenibilidad ${i+1}`} loading="lazy" className="w-full h-48 object-cover rounded-2xl shadow-sm"/>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-3xl border border-slate-200 p-6 md:p-10 bg-white shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">¿Hablamos?</h3>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Completa el formulario y te contactamos. También enviaremos el mensaje a WhatsApp para acelerar la respuesta.
          </p>

          <form
            className="mt-8 grid md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const consentimiento = fd.get("consentimiento");
              if (!consentimiento) {
                alert("Debes aceptar el aviso de privacidad para continuar.");
                return;
              }

              const nombre = fd.get("nombre")?.toString() || "";
              const email = fd.get("email")?.toString() || "";
              const telefono = fd.get("telefono")?.toString() || "";
              const producto = fd.get("producto")?.toString() || "General";
              const cantidad = fd.get("cantidad")?.toString() || "";
              const mensaje = fd.get("mensaje")?.toString() || "";

              const resumen = `Consulta desde web Grupo Zane%0D%0A%0D%0A` +
                `Nombre: ${encodeURIComponent(nombre)}%0D%0A` +
                `Email: ${encodeURIComponent(email)}%0D%0A` +
                `Teléfono: ${encodeURIComponent(telefono)}%0D%0A` +
                `Producto: ${encodeURIComponent(producto)}%0D%0A` +
                `Cantidad/Presentación: ${encodeURIComponent(cantidad)}%0D%0A` +
                `Mensaje: ${encodeURIComponent(mensaje)}`;

              const mailto = `mailto:ventas@grupozane.com?subject=Solicitud%20de%20cotización%20-%20Grupo%20Zane&body=${resumen}`;
              const waText = `Nueva consulta de ${encodeURIComponent(nombre)}.%0AProducto: ${encodeURIComponent(producto)}.%0ACantidad/Presentación: ${encodeURIComponent(cantidad)}.%0AEmail: ${encodeURIComponent(email)}.%0ATeléfono: ${encodeURIComponent(telefono)}.%0AMensaje: ${encodeURIComponent(mensaje)}`;
              const wa = `https://wa.me/50368263011?text=${waText}`;

              window.open(mailto, "_blank");
              window.open(wa, "_blank");

              const btn = e.currentTarget.querySelector("button[type=submit]");
              if (btn) {
                btn.innerText = "¡Enviado! Te responderemos pronto";
                btn.setAttribute("disabled", "true");
              }
            }}
          >
            <div className="grid gap-1">
              <label className="text-sm font-medium">Nombre</label>
              <input name="nombre" required className="rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" placeholder="Tu nombre" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium">Email</label>
              <input name="email" type="email" required className="rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" placeholder="tucorreo@dominio.com" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium">Teléfono</label>
              <input name="telefono" className="rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" placeholder="+(503) 6826-3011" defaultValue="+(503) 6826-3011" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium">Producto de interés</label>
              <select name="producto" className="rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500">
                <option>Shampoo Aurumcare</option>
                <option>Acondicionador Keratina</option>
                <option>Gotas Capilares</option>
                <option>Mascarilla Argan</option>
                <option>Body Splash Lumina</option>
                <option>Suavizante de Telas</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="grid gap-1 md:col-span-2">
              <label className="text-sm font-medium">Cantidad / Presentación</label>
              <input name="cantidad" className="rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" placeholder="Ej. 24 unidades de 500 ml" />
            </div>
            <div className="grid gap-1 md:col-span-2">
              <label className="text-sm font-medium">Mensaje</label>
              <textarea name="mensaje" rows={4} className="rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" placeholder="Cuéntanos lo que necesitas…" />
            </div>
            <div className="md:col-span-2 flex items-center gap-2">
              <input type="checkbox" name="consentimiento" required className="w-4 h-4 border-slate-300" />
              <label className="text-xs text-slate-600">Acepto el aviso de privacidad y autorizo el uso de mis datos para ser contactado.</label>
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <button type="submit" className="rounded-xl px-5 py-3 bg-emerald-600 text-white shadow hover:bg-emerald-700">
                Enviar por correo y WhatsApp
              </button>
              <a href="mailto:ventas@grupozane.com" className="text-sm text-slate-600 hover:underline">ventas@grupozane.com</a>
              <a href="https://wa.me/50368263011" target="_blank" rel="noreferrer" className="text-sm text-slate-600 hover:underline">WhatsApp +503 6826-3011</a>
            </div>
            <p className="md:col-span-2 mt-2 text-xs text-slate-500">Al enviar, abriremos tu app de correo y WhatsApp con el mensaje prellenado. No compartimos tus datos con terceros.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Grupo Zane. Todos los derechos reservados.</p>
          <p>Hecho con cariño en El Salvador.</p>
        </div>
      </footer>
    </main>
  );
}
