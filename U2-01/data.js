const data = {
  item1: {
    id: "1",
    title: "¿Qué es un sistema operativo?",
    first: "Un conjunto de programas que controlan la ejecución de los programas de aplicación",
    second: "Un programa que actúa como interfaz entre el usuario y el hardware del computador",
    third: "Ambas respuestas son correctas",
    fourth: "Ninguna de las anteriores",
    answer: 3
  },
  item2: {
    id: "2",
    title: "¿Cuál de las siguientes no es una función de un sistema operativo?",
    first: "Simplificar el manejo de la computadora",
    second: "Gestionar recursos de hardware",
    third: "Hacer que el hardware funcione sin programas",
    fourth: "Proporcionar seguridad y eficiencia",
    answer: 3
  },
  item3: {
    id: "3",
    title: "¿Qué objetivo tiene la capacidad de evolución de un sistema operativo?",
    first: "Simplificar la estructura del kernel",
    second: "Reducir el uso de recursos en hardware antiguo",
    third: "Garantizar que solo una versión del sistema operativo sea compatible",
    fourth: "Ampliar el sistema con nuevos servicios y actualizaciones",
    answer: 4
  },
  item4: {
    id: "4",
    title: "¿Qué componente del sistema operativo siempre se encuentra en ejecución?",
    first: "El núcleo (kernel)",
    second: "El intérprete de comandos",
    third: "El gestor de archivos",
    fourth: "Las utilidades de usuario",
    answer: 1
  },
  item5: {
    id: "5",
    title: "¿Qué responsabilidad tiene el núcleo del sistema operativo?",
    first: "Proveer interfaces gráficas de usuario",
    second: "Gestionar el acceso seguro al hardware",
    third: "Configurar las aplicaciones de usuario",
    fourth: "Implementar los controladores de dispositivos de usuario",
    answer: 2
  },
  item6: {
    id: "6",
    title: "¿Qué son los usuarios privilegiados en un sistema operativo?",
    first: "Usuarios sin restricciones que pueden realizar cualquier operación en el sistema",
    second: "Cuentas de usuario estándar con permisos adicionales para instalar aplicaciones",
    third: "Cuentas que no requieren autenticación para acceder al sistema",
    fourth: "Usuarios invitados con acceso limitado a los recursos del sistema",
    answer: 1
  },
  item7: {
    id: "7",
    title: "¿Qué estructura organizativa tienen los sistemas de archivos modernos?",
    first: "Lineal",
    second: "Basada en tablas",
    third: "Jerárquica en forma de árbol",
    fourth: "Circular",
    answer: 3
  },
  item8: {
    id: "8",
    title: "¿Qué técnica utiliza la memoria virtual?",
    first: "Asignar segmentos únicos por proceso",
    second: "Evitar el uso de memoria secundaria",
    third: "Gestionar la memoria principal como bloques de tamaño fijo llamados páginas",
    fourth: "Almacenar páginas completas en memoria secundaria",
    answer: 3
  },
  item9: {
    id: "9",
    title: "¿Qué función realiza el sistema de particionamiento de discos?",
    first: "Gestiona los controladores de dispositivos",
    second: "Distribuye los permisos de usuario en el disco",
    third: "Asigna bloques de memoria al procesador",
    fourth: "Organiza el almacenamiento en particiones lógicas y físicas",
    answer: 4
  },
  item10: {
    id: "10",
    title: "¿Qué es un sistema operativo monolítico?",
    first: "Un sistema con múltiples niveles de abstracción",
    second: "Un sistema donde todas las funciones se ejecutan en modo kernel",
    third: "Un sistema basado exclusivamente en microkernels",
    fourth: "Un sistema con funciones divididas en módulos separados",
    answer: 2
  },
  item11: {
    id: "11",
    title: "¿Qué característica distingue a los sistemas operativos cliente/servidor?",
    first: "No soportan multitarea",
    second: "Carecen de microkernel",
    third: "La mayoría de los servicios se implementan como procesos de usuario",
    fourth: "No requieren comunicación entre procesos",
    answer: 3
  },
  item12: {
    id: "12",
    title: "¿Qué ventaja tiene un sistema operativo distribuido?",
    first: "Evita el uso de múltiples procesadores",
    second: "Permite a los usuarios ver el sistema como si fuera uno solo",
    third: "Garantiza que los recursos nunca se compartan",
    fourth: "Elimina la necesidad de protocolos de red",
    answer: 2
  },
  item13: {
    id: "13",
    title: "¿Qué define un sistema operativo de tiempo real?",
    first: "Solo ejecuta procesos no prioritarios",
    second: "Garantiza respuestas rápidas a eventos en tiempo crítico",
    third: "Opera exclusivamente en sistemas embebidos",
    fourth: "Depende de hardware específico para funcionar",
    answer: 2
  },
  item14: {
    id: "14",
    title: "¿Qué permite la técnica de SPOOL en los sistemas operativos?",
    first: "Solapar operaciones de entrada/salida con el uso de la CPU",
    second: "Optimizar el almacenamiento de datos en disco",
    third: "Asignar memoria adicional a procesos interactivos",
    fourth: "Ejecutar procesos en paralelo utilizando múltiples núcleos",
    answer: 1
  },
  item15: {
    id: "15",
    title: "¿Qué es una llamada al sistema?",
    first: "Un error generado por los procesos en ejecución",
    second: "Una función exclusiva para gestionar archivos",
    third: "Un mecanismo para que los procesos soliciten servicios al sistema operativo",
    fourth: "Una interrupción generada por el hardware",
    answer: 3
  },
  item16: {
    id: "16",
    title: "¿Qué ventaja tienen los sistemas operativos con interfaces gráficas (GUI)?",
    first: "Simplifican la interacción del usuario con el sistema",
    second: "Reducen los requisitos de hardware",
    third: "Aumentan la velocidad de procesamiento de datos",
    fourth: "Eliminan la necesidad de controladores de dispositivos",
    answer: 1
  },
  item17: {
    id: "17",
    title: "¿Qué componente del sistema operativo gestiona las interrupciones?",
    first: "El planificador de tareas",
    second: "El núcleo (kernel)",
    third: "El gestor de archivos",
    fourth: "El intérprete de comandos",
    answer: 2
  },
  item18: {
    id: "18",
    title: "¿Qué es el middleware en un sistema operativo distribuido?",
    first: "Un tipo de interfaz gráfica avanzada",
    second: "Una herramienta de desarrollo para hardware específico",
    third: "Un módulo para ejecutar procesos en tiempo real",
    fourth: "Una capa de software que facilita la gestión de sistemas distribuidos",
    answer: 4
  },
  item19: {
    id: "19",
    title: "¿Qué garantiza la autenticación en un sistema operativo?",
    first: "Que los recursos se distribuyan equitativamente",
    second: "Que el sistema operativo funcione en modo seguro",
    third: "Que solo usuarios autorizados accedan al sistema",
    fourth: "Que los dispositivos de E/S operen correctamente",
    answer: 3
  },
  item20: {
    id: "20",
    title: "¿Qué caracteriza a un sistema operativo de tiempo compartido?",
    first: "Opera exclusivamente con procesos en segundo plano",
    second: "Maximiza el uso del procesador en cada tarea",
    third: "Asigna ráfagas de tiempo a cada proceso interactivo",
    fourth: "Elimina la multitarea para aumentar la eficiencia",
    answer: 3
  }
};
