export const translations = {
  en: {
    title: 'Understanding Delta Time in Game Development',
    subtitle:
      'Learn why frame-independent movement is crucial for consistent gameplay',
    introduction:
      'Delta time is essential for creating smooth, consistent animations and movement in games across different devices and frame rates.',
    whatIs: 'What is Delta Time?',
    whatIsContent:
      'Delta time is the time elapsed between the current frame and the previous frame. Using this value ensures consistent movement regardless of frame rate.',
    whyImportant: 'Why is it Important?',
    whyImportantContent:
      'Without delta time, game physics and movements can vary dramatically between devices with different performance capabilities.',
    demo: {
      title: 'Delta Time Demonstration',
      targetFps: 'Target FPS:',
      directUpdate: {
        title: 'Direct Update',
        description:
          'Updates position directly based on frame rate. Can be inconsistent across different devices.',
      },
      deltaUpdate: {
        title: 'Delta Time Update',
        description:
          'Updates position based on actual time passed. Consistent movement regardless of frame rate.',
      },
    },
    codeExamples: {
      title: 'Implementation Examples',
      mathTitle: 'Mathematical Formula',
      mathDescription:
        'Where deltaTime is the time elapsed since the last frame in seconds',
    },
    videoExplaining: {
      title: "Still don't understand what Delta Time is?",
      description:
        'Check out these Youtubers who explain very well what Delta Time is for and its importance.',
      videoID: 'yGhfUcPjXuE',
    },
  },
  es: {
    title: 'Entendiendo Delta Time en el Desarrollo de Juegos',
    subtitle:
      'Aprende por qué el movimiento independiente de los frames es crucial para una jugabilidad consistente',
    introduction:
      'Delta time es esencial para crear animaciones y movimientos suaves y consistentes en juegos a través de diferentes dispositivos y tasas de frames.',
    whatIs: '¿Qué es Delta Time?',
    whatIsContent:
      'Delta time es el tiempo transcurrido entre el frame actual y el anterior. Usar este valor asegura un movimiento consistente sin importar la tasa de frames.',
    whyImportant: '¿Por qué es Importante?',
    whyImportantContent:
      'Sin delta time, la física del juego y los movimientos pueden variar dramáticamente entre dispositivos con diferentes capacidades de rendimiento.',
    demo: {
      title: 'Demostración de Delta Time',
      targetFps: 'FPS Objetivo:',
      directUpdate: {
        title: 'Actualización Directa',
        description:
          'Actualiza la posición directamente basada en los frames. Puede ser inconsistente entre dispositivos.',
      },
      deltaUpdate: {
        title: 'Actualización con Delta Time',
        description:
          'Actualiza la posición basada en el tiempo real transcurrido. Movimiento consistente sin importar los FPS.',
      },
    },
    codeExamples: {
      title: 'Ejemplos de Implementación',
      mathTitle: 'Fórmula Matemática',
      mathDescription:
        'Donde deltaTime es el tiempo transcurrido desde el último frame en segundos',
    },
    videoExplaining: {
      title: '¿Aun sigues sin entender que es el Delta Time?',
      description:
        'Checkea a estos Youtubers que explican muy bien para que es el Delta Time y su importancia.',
      videoID: 'ix6FAPEF_HA',
    },
  },
};
