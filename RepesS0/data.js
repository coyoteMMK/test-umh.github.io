const data = {
  item1: {
    id: "1",
    title: "El repartidor (dispatcher) se encarga de:",
    first: "Planificar los distintos trabajos",
    second:
      "Definir las políticas de planificación",
    third:
      "Realizar el cambio de contexto",
    fourth:
      "Desbloquear los procesos que están esperando una E/S cuando ésta finaliza",
    answer: 3,
  },
  item2: {
    id: "2",
    title: "El planificador (scheduler) es la parte del sistema operativo encargada de:",
    first:
      "Realizar el cambio de contexto entre los procesos.",
    second:
      "Determinar el orden de ejecución entre los procesos",
    third: 
      "Mantener la tabla de procesos",
    fourth:
      "Descargar los procesos a disco cuando la memoria del sistema escasea.",
    answer: 2,
  },
  item3: {
    id: "3",
    title: "¿Cuándo puede un proceso entrar en un monitor?",
    first:
      "Sólo cuando tiene definidas variables de condición.",
    second:
      "Sólo es necesario que el monitor se encuentre “vacío”.",
    third:
      "Hace falta que el monitor esté vacío y no haya procesos esperando en ninguna cola de condición.",
    fourth:
      "Ninguna del resto de las contestaciones es correcta.",
    answer: 3,
  },
  item4: {
    id: "4",
    title: "El semáforo elimina la espera activa porque:",
    first:
      "Se inicializa al número máximo de recursos que se comparten",
    second:
      "Las operaciones de wait y signal no se pueden emplear en bucles",
    third:
      "Deshabilita el uso de interrupciones dentro de la sección crítica.",
    fourth:
      "Se implementa con una cola de tareas a la cual se añaden los procesos que están en espera del recurso.",
    answer: 4,
  },
  item5: {
    id: "5",
    title: "Los monitores proporcionan exclusión mutua porque: ",
    first:
      "Sólo un proceso puede estar activo cada vez para ejecutar un procedimiento del monitor ",
    second:
      "Utilizan variables de condición",
    third:
      "No proporcionan exclusión mutua sólo garantizan la sincronización",
    fourth:
      "Se diseñan como procedimientos encapsulados en un módulo",
    answer: 1,
  },
  item6: {
    id: "6",
    title: "Para permitir un mayor grado de multiprogramación",
    first:
      "Es preferible un sistema con un tamaño de página grande.",
    second:
      "El tamaño de página es indiferente.",
    third:
      "Es mejor optar por páginas de un tamaño pequeño.",
    fourth:
      "Ninguna del resto de las respuestas es correcta.",
    answer: 3,
  },
  item7: {
    id: "7",
    title: "Un hilo ",
    first:
      "Es un procedimiento de un proceso que tiene asignado recursos. ",
    second:
      "Es la unidad propietaria de los recursos",
    third:
      "Comparte la pila de ejecución con los otros hilos.",
    fourth:
      "Ninguna de las anteriores es cierta.",
    answer: 4,
  },
  item8: {
    id: "8",
    title: "En un sistema multiprocesador ",
    first:
      "Solo pueden ejecutarse hilos del mismo proceso concurrentemente.",
    second:
      "Varios hilos de un mismo proceso se pueden ejecutar simultáneamente.",
    third:
      "Se pueden ejecutar varios hilos pero en el procesador asignado al proceso. ",
    fourth:
      "Ninguna de las anteriores es correcta",
    answer: 2,
  },
  item9: {
    id: "9",
    title: "La operación wait de un semáforo y la cwait de una variable de condición de un monitor se diferencian en:",
    first:
      "Que cwait siempre se suspende el proceso que la invoca y wait no siempre",
    second:
      "Que en el caso de la variable de condición no se elimina la espera activa",
    third:
      "No existe diferencia pues en ambos casos siempre sirve para lograr la exclusión mutua de la sección crítica",
    fourth: 
      "No existe diferencia pues en ambos casos siempre sirve como mecanismo de sincronización",
    answer: 1,
  },
  item10: {
    id: "10",
    title: "En un sistema que utiliza gestión de memoria real con particiones dinámicas, en un momento determinado la lista de huecos está compuesta por huecos de tamaño 10 KB, 15 KB, 17 KB y 12 KB. ¿Qué política de asignación utiliza el sistema, si ante una solicitud de un bloque de 13 KB lo coloca en el bloque de 17 KB?",
    first:
      "Ninguna del resto de las respuestas es correcta.",
    second:
      "Mejor ajuste.",
    third:
      "Primer ajuste.",
    fourth:
      "Peor ajuste.",
    answer: 4,
  },
  item11: {
    id: "11",
    title: "La fragmentación interna ",
    first:
      "Se produce con paginación y con segmentación.",
    second:
      "Solo se produce en el último segmento de la tabla de segmentos del proceso",
    third:
      "Se produce sólo cuando tenemos un sistema de memoria con paginación o particiones estáticas",
    fourth:
      "Ninguna las anteriores es correcta.",
    answer: 3,
  },
  item12: {
    id: "12",
    title: "En Linux, la llamada al sistema exec():",
    first:
      "Crea un nuevo proceso con la misma imagen del proceso actual y con un PID diferente.",
    second:
      "Cambia la imagen (código) del proceso actual y le asigna un nuevo PID.",
    third: "Carga una nueva imagen de código en la memoria del proceso actual.",
    fourth:
      "Ejecuta el proceso hijo indicado en el parámetro de la llamada.",
    answer: 3,
  },
  item13: {
    id: "13",
    title:
      "¿Cuál es la misión del planificador de largo plazo o planificador de alto nivel?",
    first: "Realizar el despacho de los procesos que están en la cola de preparados, y en particular realizar los cambios de contexto.",
    second: "En los sistemas de tiempo real, realizar una planificación previa de la carga de trabajo que se va a enviar al sistema, para asegurar que se cumplen los plazos de ejecución.",
    third: "Regular la admisión de nuevos procesos a la cola de preparados, para mantener el grado de multiprogramación por debajo de un límite.",
    fourth: "Permitir la entrada de procesos en el sistema con un instante de ejecución posterior en el tiempo.",
    answer: 3,
  },
  item14: {
    id: "14",
    title: "Si en un algoritmo Round Robin el cuanto de tiempo Q se hace excesivamente corto:",
    first:"El algoritmo degenera en un SJF.",
    second: "El algoritmo degenera en un FCFS.",
    third: "Disminuye la productividad del procesador porque se realizan muchos cambios de contexto.",
    fourth:
      "Aumenta el impacto del efecto convoy (los procesos largos se mantienen en ejecución mientras los cortos se quedan esperando) si existe una combinación de procesos de larga y de corta duración.",
    answer: 3,
  },
  item15: {
    id: "15",
    title: "¿Cuál de estos algoritmos de reemplazo de páginas se apoya en el bit de referencia?",
    first: "FIFO.",
    second: "OPT.",
    third: "SJF.",
    fourth: "Algoritmo del reloj / segunda oportunidad.",
    answer: 4,
  },
  item16: {
    id: "16",
    title: "La TLB es una estructura usada para:",
    first: "Reducir el tiempo de la traducción de direcciones de memoria.",
    second: "Almacenar el estado de un proceso cuando ocurre un cambio de contexto.",
    third: "Almacenar el estado de las páginas no válidas de un proceso.",
    fourth: "Almacenar los punteros a las pilas de los procesos",
    answer: 1,
  },
  item17: {
    id: "17",
    title: "¿Cuál es la diferencia entre un proceso «pesado» y un hilo (thread)?",
    first:
      "Un proceso pesado es una aplicación en ejecución, mientras que un hilo es una actividad concurrente dentro de una aplicación.",
    second:
      "Un proceso pesado puede contener un hilo o ninguno, mientras que un hilo puede contener uno o más procesos pesados.",
    third:
      "Un proceso pesado corre siempre en modo usuario, mientras que un hilo puede correr en modo usuario o modo supervisor/modo núcleo.",
    fourth: "Un hilo puede pertenecer a varios procesos pero un proceso a un único hilo.",
    answer: 1,
  },
  item18: {
    id: "18",
    title: "El controlador de E/S y la memoria intercambian datos directamente, sin la intervención de la CPU, cuando se tiene:",
    first:"E/S controlada por programa",
    second: "E/S por interrupciones",
    third: "DMA",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },
  item19: {
    id: "19",
    title: "En el esquema de segmentación, ¿qué información contiene la tabla de descriptores de segmento?",
    first:
      "Dirección física completa de cada segmento.",
    second:
      "Tamaño y dirección base de cada segmento.",
    third:
      "Nombres y tamaños de los segmentos.",
    fourth:
      "Números de página y desplazamientos.",
    answer: 2,
  },
  item20: {
    id: "20",
    title: "¿Cuál es una ventaja del paso de mensajes en comparación con los semáforos y monitores? ",
    first:
      "Mayor eficiencia en sistemas de memoria compartida.",
    second:
      "Comunicación explícita entre procesos.",
    third: "Menor complejidad de implementación.",
    fourth: "Flexibilidad en la sincronización.",
    answer: 2,
  },
};

