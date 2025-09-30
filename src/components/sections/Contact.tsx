'use client';

import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

type Props = {
  title?: string;
  subtitle?: string;
  addressLabel?: string;
  addressHref?: string;
  email?: string;
  phone?: string;
};

export default function Contact({
  title = 'Escríbenos',
  subtitle = '¿Tienes un reto de ciberseguridad o preguntas sobre nuestros servicios? Contacta con nosotros.',
  addressLabel = 'Plaza del Castillo, 31001 Pamplona, Navarra',
  addressHref = 'https://www.google.com/maps?q=Plaza%20del%20Castillo%2C%2031001%20Pamplona&output=embed',
  email = 'contacto@cosmaguard.io', // ← поменяешь при желании
  phone = '+34 000 000 000',        // ← и это тоже
}: Props) {
  return (
    <section
      id="contacto"
      className="mx-auto mt-20 max-w-7xl scroll-mt-[var(--nav-h)] px-4 md:mt-24"
      aria-labelledby="contact-title"
    >
      <header className="mb-8 text-center md:mb-10">
        <h2
          id="contact-title"
          className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-white/75">{subtitle}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* MAPA */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 ring-1 ring-white/5">
          {/* верхняя «матрица»-линиЯ */}
          <div className="absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 opacity-90" />
          <div className="aspect-[4/3] md:aspect-[16/11]">
            <iframe
              title="Mapa de Pamplona"
              src={addressHref}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* нижняя «матрица»-линиЯ */}
          <div className="absolute inset-x-0 bottom-0 z-10 h-[3px] bg-gradient-to-r from-emerald-300 via-cyan-400 to-emerald-300 opacity-90" />
        </div>

        {/* INFO */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5 md:p-8">
          <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 opacity-90" />

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">CosmaGuard</h3>
              <p className="mt-1 text-white/70">
                MSSP especializado en pentesting, ASM y respuesta para empresas en España y la UE.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-[2px] size-5 text-emerald-300" aria-hidden />
                <div>
                  <div className="text-sm font-semibold text-white">Oficina · Pamplona</div>
                  <div className="text-white/80">{addressLabel}</div>
                  <a
                    href={addressHref.replace('&output=embed', '')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200"
                  >
                    Ver en Google Maps <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-[2px] size-5 text-emerald-300" aria-hidden />
                <div>
                  <div className="text-sm font-semibold text-white">Email</div>
                  <a href={`mailto:${email}`} className="text-white/80 hover:text-white">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-[2px] size-5 text-emerald-300" aria-hidden />
                <div>
                  <div className="text-sm font-semibold text-white">Teléfono</div>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-white/80 hover:text-white">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-[2px] size-5 text-emerald-300" aria-hidden />
                <div>
                  <div className="text-sm font-semibold text-white">Horario</div>
                  <div className="text-white/80">Lunes–Viernes · 09:00–18:00 (CET)</div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-white/55">
              También trabajamos en remoto en toda España y la UE. Firmamos NDA/DPA y coordinamos ventanas de prueba sin afectar a producción.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
