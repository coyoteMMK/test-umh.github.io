const data = {
  item1: {
    id: "1",
    title: "¿Qué problema surge al compartir recursos globales en sistemas monoprocesador?",
    first: "Los procesos no pueden comunicarse entre sí",
    second: "Los procesos se ejecutan secuencialmente",
    third: "Los recursos globales se bloquean permanentemente",
    fourth: "El acceso concurrente a los recursos puede generar condiciones de carrera",
    answer: 4
  },
  item2: {
    id: "2",
    title: "¿Qué garantiza la exclusión mutua en un sistema concurrente?",
    first: "Que ningún proceso acceda a recursos compartidos",
    second: "Que dos procesos no ejecuten simultáneamente su sección crítica",
    third: "Que todos los procesos se bloqueen durante una operación crítica",
    fourth: "Que los procesos se ejecuten en paralelo sin interferencias",
    answer: 2
  },
  item3: {
    id: "3",
    title: "¿Qué problema resuelve el algoritmo de Dekker?",
    first: "Inanición en sistemas distribuidos",
    second: "Interbloqueo en acceso a memoria",
    third: "Exclusión mutua en sistemas de dos procesos",
    fourth: "Sincronización entre procesos no cooperativos",
    answer: 3
  },
  item4: {
    id: "4",
    title: "¿Qué situación describe una condición de carrera?",
    first: "Dos procesos cooperan para resolver una tarea",
    second: "Dos procesos acceden y manipulan un recurso compartido de forma no controlada",
    third: "Un proceso consume más recursos que otros en el sistema",
    fourth: "Un proceso se bloquea al acceder a un recurso inexistente",
    answer: 2
  },
  item5: {
    id: "5",
    title: "¿Qué requisito no pertenece a la exclusión mutua?",
    first: "Un proceso no puede permanecer indefinidamente en su sección crítica",
    second: "No se permite el interbloqueo ni la inanición",
    third: "La exclusión mutua debe garantizarse solo en sistemas monoprocesador",
    fourth: "Un proceso en su sección crítica no puede ser interrumpido por otro",
    answer: 3
  },
  item6: {
    id: "6",
    title: "¿Qué técnica hardware puede garantizar la exclusión mutua?",
    first: "Instrucciones atómicas como Test and Set",
    second: "Algoritmos de exclusión como Dekker",
    third: "Controladores de interrupción",
    fourth: "Técnicas de segmentación de memoria",
    answer: 1
  },
  item7: {
    id: "7",
    title: "¿Qué es una sección crítica en un programa?",
    first: "Una parte del programa donde se accede a recursos exclusivos",
    second: "Una región del programa que no requiere sincronización",
    third: "Un bloque de código que no puede ser interrumpido por el kernel",
    fourth: "Una parte del programa que siempre se ejecuta en modo kernel",
    answer: 1
  },
  item8: {
    id: "8",
    title: "¿Qué desventaja tiene la espera activa en exclusión mutua?",
    first: "Genera interbloqueos en sistemas multiprocesador",
    second: "Consume tiempo del procesador mientras espera",
    third: "Evita que los procesos entren en la sección crítica",
    fourth: "Impide la sincronización entre procesos cooperantes",
    answer: 2
  },
  item9: {
    id: "9",
    title: "¿Qué asegura el uso de semáforos en sistemas concurrentes?",
    first: "Un acceso más rápido a los recursos compartidos",
    second: "Una gestión óptima de memoria virtual",
    third: "La sincronización y exclusión mutua entre procesos",
    fourth: "La ejecución secuencial de procesos no cooperativos",
    answer: 3
  },
  item10: {
    id: "10",
    title: "¿Qué problema puede surgir con el uso de semáforos mal implementados?",
    first: "Bloqueo vital (livelock)",
    second: "Fallo en la exclusión mutua",
    third: "Interferencias en la sincronización de hilos",
    fourth: "Aumento de la prioridad de los procesos",
    answer: 1
  },
  item11: {
    id: "11",
    title: "¿Qué modelo de interacción entre procesos no requiere exclusión mutua?",
    first: "Cooperación por comunicación",
    second: "Cooperación por compartición",
    third: "Procesos no cooperantes",
    fourth: "Multiprogramación básica",
    answer: 1
  },
  item12: {
    id: "12",
    title: "¿Qué tipo de problema resuelve el uso de monitores?",
    first: "Exclusión mutua y sincronización",
    second: "Gestión de memoria en sistemas distribuidos",
    third: "Interbloqueo en sistemas monoprocesador",
    fourth: "Ejecución concurrente en sistemas monoprogramados",
    answer: 1
  },
  item13: {
    id: "13",
    title: "¿Qué característica tiene una solución basada en paso de mensajes?",
    first: "Requiere acceso directo a la memoria compartida",
    second: "Evita el uso de variables globales",
    third: "Garantiza exclusión mutua automáticamente",
    fourth: "Bloquea los procesos al enviar datos",
    answer: 2
  },
  item14: {
    id: "14",
    title: "¿Qué solución de exclusión mutua utiliza instrucciones Test and Set?",
    first: "Soluciones software basadas en espera activa",
    second: "Soluciones hardware atómicas",
    third: "Soluciones del sistema operativo",
    fourth: "Monitores",
    answer: 2
  },
  item15: {
    id: "15",
    title: "¿Qué ventaja tiene el algoritmo de Peterson frente al de Dekker?",
    first: "Mayor eficiencia en sistemas multiprocesador",
    second: "Es aplicable a un número ilimitado de procesos",
    third: "Evita la inanición en sistemas distribuidos",
    fourth: "Garantiza la exclusión mutua sin alternancia estricta",
    answer: 4
  },
  item16: {
    id: "16",
    title: "¿Qué problema puede ocurrir en un sistema con múltiples procesos compitiendo por un recurso?",
    first: "Condición de carrera",
    second: "Inanición de recursos",
    third: "Interrupción involuntaria",
    fourth: "Sincronización automática",
    answer: 1
  },
  item17: {
    id: "17",
    title: "¿Qué garantiza el uso de exclusión mutua en sistemas multiprocesador?",
    first: "Evitar la alternancia estricta",
    second: "Prevenir condiciones de carrera",
    third: "Reducir el tiempo de espera de procesos",
    fourth: "Eliminar la necesidad de sincronización",
    answer: 2
  },
  item18: {
    id: "18",
    title: "¿Qué problema se resuelve con monitores en concurrencia?",
    first: "Interbloqueo",
    second: "Inanición",
    third: "Exclusión mutua y sincronización",
    fourth: "Fallo en operaciones atómicas",
    answer: 3
  },
  item19: {
    id: "19",
    title: "¿Qué ventaja tiene el uso de instrucciones atómicas en exclusión mutua?",
    first: "Simplifican la implementación de sincronización",
    second: "Eliminan la necesidad de algoritmos de exclusión",
    third: "Garantizan acceso seguro a recursos compartidos",
    fourth: "Evitan interbloqueos automáticamente",
    answer: 3
  },
  item20: {
    id: "20",
    title: "¿Qué desventaja tiene la exclusión mutua basada en hardware?",
    first: "Mayor complejidad de implementación",
    second: "Aumento del consumo de tiempo del procesador",
    third: "Dificultad para evitar interbloqueos",
    fourth: "Incompatibilidad con sistemas distribuidos",
    answer: 2
  }
};
