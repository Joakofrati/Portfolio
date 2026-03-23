import { Project } from '../models/project'; // Asegúrate que la ruta al modelo sea correcta

export const PROJECTS: Project[] = [
  {
    id: 'tracking-logistico',
    title: 'Tracking Logístico',
    description: 'Ecosistema Web y Móvil para gestión de flotas.',
    fullDescription: `
      Como Lead Full Stack Engineer, lideré la arquitectura y desarrollo de esta solución integral para una empresa de transporte. Fue un proyecto colaborativo donde trabajé junto a la diseñadora Romina Botana, quien estuvo a cargo del diseño visual y UX.
      
      El sistema permite monitorear viajes en tiempo real, gestionar choferes y generar reportes de auditoría. Para la app móvil, priorizamos una interfaz minimalista y libre de distracciones, ideal para el uso en cabina.

      *Demo Disclaimer: El enlace proporcionado despliega una versión antigua (Legacy) con fines puramente demostrativos. La interfaz actual y las funcionalidades de producción vigentes son las que se reflejan en las capturas de la galería de imágenes.*
    `,
    tags: ['Angular', 'Django', 'MySQL', 'ANDROID-STUDIO'],
    image: 'assets/logitrack.png', 
    link: 'https://frontgestionviajes.vercel.app/#inicio', 
    gallery: [
      { src: 'assets/logitrack/admin.png', caption: 'Panel de Administración: Gestión de flota.' },
      { src: 'assets/logitrack/chofer.jfif', caption: 'App Móvil: Reporte de viajes.' }
    ],
    features: [
      'Team Leadership: Rol de Lead Full Stack definiendo la arquitectura técnica.',
      'UI/UX Design: Diseño visual de alta fidelidad realizado por Romina Botana.',
      'Arquitectura Híbrida: Web (Admin) + App Android (Chofer).',
      'Optimización: Batching de coordenadas GPS en LocalStorage.'
    ]
  },
  {
    id: 'editor-histologico',
    title: 'Editor Histológico IA',
    description: 'Herramienta médica con edición de canvas.',
    fullDescription: `
      Aplicación web diseñada para agilizar el diagnóstico patológico. 
      Combina un modelo de Inteligencia Artificial (U-Net) que pre-detecta células en imágenes de biopsias, con un editor gráfico tipo "Photoshop" que permite al médico corregir los resultados manualmente.
    `,
    tags: ['Angular', 'Python', 'MySQL', 'Cloudinary'],
    image: 'assets/tesis.png',
    link: '#',
    gallery: [], // Agrega fotos si tienes
    features: [
      'IA Integration: Procesamiento de imágenes con Python y OpenCV.',
      'Canvas Interactivo: Herramientas de dibujo (Lápiz, Goma) sobre la imagen.',
      'Optimización: Algoritmo de reducción de puntos para mejorar el rendimiento del navegador.',
      'Gestión de Estado: Sistema de Undo/Redo (Ctrl+Z) personalizado.'
    ]
  },
  {
    id: 'matesferba-ecommerce',
    title: 'MatesFerba E-commerce',
    description: 'Personalización avanzada en Tiendanube.',
    fullDescription: `
      Implementación de una tienda online para la venta de mates y accesorios utilizando la plataforma Tiendanube.
      El desafío principal radicó en las restricciones del plan básico, que impide el acceso al código HTML y JavaScript.
      Para lograr el diseño solicitado por el cliente, realicé una reingeniería visual completa de la plantilla predeterminada, utilizando exclusivamente CSS avanzado para manipular el layout y la estética sin tocar la estructura base.
    `,
    tags: ['CSS3', 'Tiendanube', 'E-commerce', 'UI Design'],
    image: 'assets/matesferba.png', 
    link: '#', 
    gallery: [],
    features: [
      'CSS Architecture: Uso intensivo de selectores avanzados para reestructurar la interfaz visual.',
      'Constraint Solving: Adaptación total de la identidad de marca en un entorno de código cerrado (SaaS).',
      'API: integraciones con métodos de pago.'
    ]
  },
  {
    id: 'roguelike-deckbuilder',
    title: 'Roguelike Deckbuilder',
    description: 'Juego de estrategia complejo en Unity.',
    fullDescription: `
      Prototipo de un videojuego de estrategia que mezcla mecánicas de construcción de mazos con combate automático.
      Me encargué del diseño de la arquitectura del juego, separando la lógica de las cartas de la representación visual.
    `,
    tags: ['Unity', 'C#', 'Game Design'],
    image: 'assets/tcg.png',
    link: '#',
    gallery: [],
    features: [
      'Game Loop: Sistema de rondas y resolución de combate automático.',
      'Arquitectura Modular: ScriptableObjects para la gestión de datos de cartas.',
      'IA Enemiga: Lógica de toma de decisiones básica para oponentes.'
    ]
  },
  {
    id: 'simulador-campus',
    title: 'Simulador Campus',
    description: 'Gemelo digital interactivo multijugador.',
    fullDescription: `
      Simulación 3D del campus universitario creada en Unity, con capacidad multijugador en tiempo real que permite a varios usuarios recorrer el mismo mundo simultáneamente.
      Mi rol principal fue el desarrollo de la Interfaz de Usuario (UI) y los sistemas de navegación inteligente.
      
      *Nota de instalación: El enlace descarga una Build de Windows en formato .rar. Al tratarse de un ejecutable académico sin firma digital, es posible que Windows o el navegador muestren advertencias de seguridad estándar. El archivo es seguro y debe ejecutarse omitiendo dichas alertas.*
    `,
    tags: ['Unity', '3D-Modeling', 'UI', 'C#', 'Multiplayer'],
    image: 'assets/campus.png',
    link: 'https://drive.google.com/file/d/15cWx8NzAKKgdZYXqe6u_AcUHEaWyno_L/view?usp=sharing',
    gallery: [],
    features: [
      'Multiplayer: Sincronización en red para compartir el entorno con otros usuarios.',
      'Pathfinding: Sistema de navegación NavMesh que respeta veredas y caminos.',
      'UI Contextual: Mapas dinámicos que cambian al entrar a edificios.',
      'Minimapa: Radar en tiempo real de la posición del usuario.'
    ]
  },
  {
    id: 'chatbot-automation',
    title: 'Chatbot Automation',
    description: 'Integración WhatsApp Business.',
    fullDescription: `
      Solución de automatización para una empresa de venta de equipamiento 4x4.
      Integra la API de WhatsApp Business para responder consultas frecuentes, notificar a los vendedores, guardar datos de leads y crear campañas masivas.
    `,
    tags: ['API', 'Botconversa', 'Automation'],
    image: 'assets/botconversa.png',
    link: '#',
    gallery: [],
    features: [
      'Integración API: Conexión directa con WhatsApp Business.',
      'Flujos Lógicos: Árboles de decisión para clasificar la intención del cliente.',
      'Automatización: Respuestas 24/7 sin intervención humana.'
    ]
  },
  {
    id: 'scripts-tools',
    title: 'Scripts & Tools',
    description: 'Automatización con Python.',
    fullDescription: `
      Colección de scripts desarrollados para automatizar tareas repetitivas y conectar servicios.
      Realice herramientas para procesar datos de APIs de música y cine, y generar playlists automáticas.
    `,
    tags: ['Python', 'Spotify API', 'ETL'],
    image: 'assets/scripts.png',
    link: '#',
    gallery: [],
    features: [
      'ETL: Extracción, limpieza y carga de datos entre APIs.',
      'Scripting: Automatización de flujos de trabajo personales.',
      'Manejo de Datos: Parsing y normalización de información JSON.'
    ]
  },
  
];