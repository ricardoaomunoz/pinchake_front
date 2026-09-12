import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      tours: 'Tours',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'TREKKING AND ADVENTURE IN THE COLOMBIAN ANDES',
      title: 'PINCHAKE TREKKING & ADVENTURE',
      body: 'Local mountain guides delivering high-altitude treks across Colombia. We create safe, memorable journeys while promoting conservation of Andean ecosystems and culture.',
      primaryCta: 'View Tours',
      secondaryCta: 'Plan Your Trek',
    },
    about: {
      title: 'About Pinchake',
      cards: {
        one: {
          title: 'Local Andean Guides',
          subtitle: 'Colombia Based',
          text: 'We are a Colombian guiding team specialized in trekking and high-mountain adventures across the Andes.',
        },
        two: {
          title: 'High-Altitude Expertise',
          subtitle: 'Safety First',
          text: 'Routes are designed with safety, acclimatization, and responsible trekking practices in mind.',
        },
        three: {
          title: 'Conservation Focus',
          subtitle: 'Respect the Mountains',
          text: 'We promote the conservation of Andean ecosystems while supporting local communities.',
        },
      },
    },
    features: {
      curated: {
        title: 'Curated Routes',
        text: 'High-mountain treks across Colombia with clear itineraries and experienced local guides.',
      },
      altitude: {
        title: 'Altitude Ready',
        text: 'We plan acclimatization and pacing to keep your trek safe and enjoyable.',
      },
      conservation: {
        title: 'Conservation Minded',
        text: 'Leave-no-trace practices and respect for Andean ecosystems are part of every trip.',
      },
      groups: {
        title: 'Small Groups',
        text: 'Personal attention, flexible pacing, and a better connection to the mountains.',
      },
    },
    contact: {
      title: 'Have questions about a trek?',
      body: 'Tell us your preferred dates and fitness level, and we will suggest the best Andean route.',
      cta: 'Contact Us',
    },
    reviews: {
      title: 'Customer Reviews',
    },
    newsletter: {
      title: 'Get Trek Updates',
      email: 'Your Email Address',
      cta: 'Subscribe',
    },
    info: {
      title: 'Pinchake Trekking & Adventure',
      body: 'We are a local guiding team dedicated to trekking in the Colombian Andes. Our trips highlight safety, community, and conservation.',
      cta: 'Learn More',
    },
    business: {
      title: 'Keep in Touch with Pinchake',
      body: 'Reach out for custom treks, group trips, or itinerary advice for the Colombian Andes.',
    },
    form: {
      title: 'Send Us a Message',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Your Need & Description',
      cta: 'Send message',
    },
    tours: {
      heading: 'Trekking Tours',
      subheading: "Explore Colombia's high-mountain routes with local guides.",
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      tours: 'Rutas',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'TREKKING Y AVENTURA EN LOS ANDES COLOMBIANOS',
      title: 'PINCHAKE TREKKING & AVENTURA',
      body: 'Guías locales de montaña para rutas de alta montaña en Colombia. Creamos experiencias seguras e inolvidables y promovemos la conservación de los ecosistemas andinos.',
      primaryCta: 'Ver Rutas',
      secondaryCta: 'Planear Trek',
    },
    about: {
      title: 'Sobre Pinchake',
      cards: {
        one: {
          title: 'Guías Andinos Locales',
          subtitle: 'Colombia',
          text: 'Somos un equipo colombiano especializado en trekking y aventuras de alta montaña en los Andes.',
        },
        two: {
          title: 'Experiencia en Altura',
          subtitle: 'Seguridad Primero',
          text: 'Diseñamos rutas con seguridad, aclimatación y prácticas responsables de trekking.',
        },
        three: {
          title: 'Conservación',
          subtitle: 'Respeto por la Montaña',
          text: 'Promovemos la conservación de los ecosistemas andinos y apoyamos comunidades locales.',
        },
      },
    },
    features: {
      curated: {
        title: 'Rutas Curadas',
        text: 'Trekking de alta montaña en Colombia con itinerarios claros y guías locales expertos.',
      },
      altitude: {
        title: 'Listos para la Altura',
        text: 'Planificamos aclimatación y ritmo para una experiencia segura y agradable.',
      },
      conservation: {
        title: 'Conservación Activa',
        text: 'Prácticas leave-no-trace y respeto por los ecosistemas andinos.',
      },
      groups: {
        title: 'Grupos Pequeños',
        text: 'Atención personalizada, ritmo flexible y mayor conexión con la montaña.',
      },
    },
    contact: {
      title: '¿Tienes preguntas sobre un trek?',
      body: 'Cuéntanos tus fechas y tu nivel físico y te sugerimos la mejor ruta andina.',
      cta: 'Contáctanos',
    },
    reviews: {
      title: 'Reseñas de Clientes',
    },
    newsletter: {
      title: 'Recibe Novedades',
      email: 'Tu correo electrónico',
      cta: 'Suscribirme',
    },
    info: {
      title: 'Pinchake Trekking & Aventura',
      body: 'Equipo local de guías dedicado al trekking en los Andes colombianos. Seguridad, comunidad y conservación en cada ruta.',
      cta: 'Conoce Más',
    },
    business: {
      title: 'Mantente en Contacto',
      body: 'Escríbenos para treks a medida, grupos o asesoría de itinerarios en los Andes.',
    },
    form: {
      title: 'Envíanos un Mensaje',
      name: 'Nombre',
      email: 'Correo',
      subject: 'Asunto',
      message: 'Describe tu necesidad',
      cta: 'Enviar mensaje',
    },
    tours: {
      heading: 'Rutas de Trekking',
      subheading: 'Explora rutas de alta montaña en Colombia con guías locales.',
    },
  },
}

const savedLocale = localStorage.getItem('pinchake_locale')
const browserLocale = navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
const locale = savedLocale || browserLocale

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages,
})

export default i18n
