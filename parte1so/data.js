const data = {
  item1: {
    id: "1",
    title: "En un sistema con planificación expulsiva SRTF llegan los procesos en los momentos indicados en la tabla para ejecutarse, y cada uno necesita la cantidad de tiempo indicada para ejecutarse. Proceso Momento de llegada Necesidad de CPU llegada/cpu P1 0/7 P2 4/4 P3 9/3 El tiempo de retorno de cada proceso es:",
    first: "T1=7 T2=7 T3=7",
    second:
      "T1=8 T2=4 T3=7",
    third:
      "T1=7 T2=7 T3=4 ",
    fourth:
      "T1=7 T2=7 T3=5",
    answer: 4,
  },
  item2: {
    id: "2",
    title: "El repartidor (dispatcher) se encarga de:",
    first:
      "Planificar los distintos trabajos",
    second:
      "Definir las políticas de planificación",
    third: 
      "Realizar el cambio de contexto.",
    fourth:
      "Desbloquear los procesos que están esperando una E/S cuando ésta finaliza",
    answer: 3,
  },
  item3: {
    id: "3",
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
  item4: {
    id: "4",
    title: "El cambio de contexto:",
    first:
      "Lo realiza el scheduler.",
    second:
      "Modifica la entrada en la tabla de procesos del proceso desalojado",
    third:
      "Siempre se origina por una interrupción",
    fourth:
      "Se produce siempre que el proceso abandona la cola de procesos en espera y pasa a la cola de procesos preparados",
    answer: 3,
  },
  item5: {
    id: "5",
    title: "En un sistema operativo basado en procesos, ¿cómo se maneja el núcleo del sistema operativo en relación con los procesos de usuario?",
    first:
      "El núcleo se ejecuta en un espacio de direcciones separado de todos los procesos de usuario y no interactúa con ellos directamente.",
    second:
      "El núcleo se ejecuta dentro del espacio de direcciones de un proceso de usuario específico como una biblioteca compartida.",
    third:
      "El núcleo se ejecuta como un proceso especial conocido como proceso cero o proceso del sistema, interactuando con otros procesos del sistema mediante IPC.",
    fourth:
      "El núcleo se ejecuta como un módulo cargado en el espacio de direcciones de un proceso de usuario, permitiendo la personalización del sistema operativo.",
    answer: 3,
  },
  item6: {
    id: "6",
    title: "¿Cuál de los siguientes componentes es comúnmente encontrado en cada entrada de la tabla de páginas en un sistema de memoria virtual?",
    first:
      "El número de página lógica y su dirección de memoria secundaria.",
    second:
      "El número de marco de página (frame number) y bits de control.",
    third:
      "La dirección física completa y el tamaño de la página.",
    fourth:
      "La dirección lógica y el número de páginas en memoria. ",
    answer: 2,
  },
  item7: {
    id: "7",
    title: "El semaforo elimina la espera activa porque:",
    first:
      "Se inicializa al número máximo de recursos que se comparten",
    second:
      "Las operaciones de wait y signal se implementan como acciones indivisibles",
    third:
      "El semaforo no elimina la espera activa",
    fourth:
      "Se implementa con una cola de tareas a la cual se añaden los procesos que estan en espera del recurso.",
    answer: 4,
  },
  item8: {
    id: "8",
    title: "Los monitores proporcionan exclusion mutua porque:",
    first:
      "Sólo un proceso puede estar activo cada vez para ejecutar un procedimiento del monitor",
    second:
      "Para ello utilizan variables de condición",
    third:
      "No proporcionan exclusión mútua sólo garantizan la sincronización",
    fourth:
      "Se diseñan como procedimientos encapsulados en un módulo",
    answer: 1,
  },
  item9: {
    id: "9",
    title: "El algoritmo de Peterson corresponde a:",
    first:
      "Una estrategia de sincronización de procesos",
    second:
      "Un método para mantener el grado de multiprogamación a un valor dado",
    third:
      "Un algoritmo que evita la espera activa",
    fourth: 
      "Una solución al problema de la exclusión mutua",
    answer: 4,
  },
  item10: {
    id: "10",
    title: "Si se usa un semáforo para lograr la sincronización de procesos",
    first:
      "Éste debe inicilizarse al número de procesos que se desean sincronizar",
    second:
      "Se deben incluir variables de condición, pues el semaforo sólo proporciona exclusión mutua ",
    third:
      "Las operaciones wait y signal se utilizan dentro del mismo proceso ",
    fourth:
      "Las operaciones wait y signal se utilizan en procesos separados",
    answer: 4,
  },
  item11: {
    id: "11",
    title: "La operacion wait de un semáforo y la cwait (delay) de una varialbe de condición de un monitor se diferencian en:",
    first:
      "Que en el caso de la variable de condición siempre se suspende el proceso que la invoca",
    second:
      "Que en el caso de la variable de condición no se elimina la espera activa",
    third:
      "No existe diferencia pues en ambos casos siempre sirve para lograr la exclusión mutua de la sección crítica",
    fourth:
      "No existe diferencia pues en ambos casos siempre sirve como mecanismo de sincronización",
    answer: 1,
  },
  item12: {
    id: "12",
    title: "En un Sistema de memoria paginada con un tamaño de marco de página de 2KB",
    first:
      "El offset máximo de una página es 2^16",
    second:
      "El offset máximo de una página es 2^12 ",
    third: "El offset máximo de una página es 2^11",
    fourth:
      "El offset máximo de una página es 2^10",
    answer: 3,
  },
  item13: {
    id: "13",
    title:
      "Señala la respuesta correcta en relación a los algoritmos de planificación de procesos apropiativos",
    first: "Nunca fuerzan a que el proceso en ejecución abandone la CPU si está realizando una operación de E/S ",
    second: "Fuerzan a que el proceso en CPU abandone la CPU únicamente cuando se le acaba el quantum",
    third: "Son más costosos en relación al tiempo que se tarda en cambiar de proceso pero dan mejor servicio al conjunto de procesos.",
    fourth: "Son más efectivas cuanta menos memoria principal esté asignada al conjunto de procesos",
    answer: 3,
  },
  item14: {
    id: "14",
    title: "En un sistema de memoria virtual",
    first:"No es necesario el intercambio",
    second: "El intercambio se realizará solo con las páginas que están en el estado suspendido",
    third: "El sistema operativo nunca traerá a memoria una página de un proceso bloqueado",
    fourth:
      "Con el intercambio parte de las páginas de un proceso pueden estar en memoria secundaria",
    answer: 4,
  },
  item15: {
    id: "15",
    title: "Si nuestro sistema operativo soporta memoria virtual, cuando tratamos de acceder a una página que no ha sido cargada, ¿cómo se detecta?",
    first: "Porque el bus de direcciones tiene una dirección inválida",
    second: "Porque no existe el marco de página en memoria principal",
    third: "Gracias a los bits de control de su entrada en la tabla de páginas.",
    fourth: "Ninguna de las afirmaciones anteriores es correcta",
    answer: 3,
  },
  item16: {
    id: "16",
    title: "La operación wait de un semáforo y la cwait de una variable de condición de un monitor se diferencian en:",
    first: "Que en el caso de la variable de condición no se elimina la espera activa",
    second: "Que cwait siempre se suspende el proceso que la invoca y wait no siempre",
    third: "No existe diferencia pues en ambos casos siempre sirve para lograr la exclusión mutua de la sección crítica",
    fourth: "No existe diferencia pues en ambos casos siempre sirve como mecanismo de sincronización",
    answer: 2,
  },
  item17: {
    id: "17",
    title: "En el bloque de control de procesos",
    first:
      "Existe información para la planificación de la CPU",
    second:
      "No existe información para la planificación de la CPU, esta se almacena en el Planificador.",
    third:
      "La única información de planificación existente son los punteros a las colas de planificación.",
    fourth: "Ninguna de las anteriores es correcta.",
    answer: 1,
  },
  item18: {
    id: "18",
    title: "Un proceso abandona el estado de ejecución y pasa directamente al de listo para ejecución",
    first:
      "Ninguna del resto de las respuestas es correcta.",
    second: "Sólo cuando el proceso ha ejecutado una operación sleep.",
    third: "Necesariamente se utiliza una política de planificación preemtiva.",
    fourth: "Únicamente en políticas de planificación no preemtivas",
    answer: 1,
  },
  item19: {
    id: "19",
    title: "Cuando un proceso está en el estado “Nuevo”:",
    first:
      "Su código, datos y PCB ya están cargados en memoria.",
    second:
      "Solo su código y datos están en memoria principal.",
    third:
      "El PCB existe pero ni datos ni código están en memoria.",
    fourth:
      "Solo el PCB y el código están cargados en memoria, los datos se cargan al entrar a listo.",
    answer: 3,
  },
  item20: {
    id: "20",
    title: "Para permitir un mayor grado de multiprogramación",
    first:
      "Es preferible un sistema con un tamaño de página grande.",
    second:
      "El tamaño de página es indiferente.",
    third: "Es mejor optar por páginas de un tamaño pequeño.",
    fourth: "Ninguna del resto de las respuestas es correcta.",
    answer: 3,
  },
  item21: {
    id: "21",
    title: "El planificador a corto plazo",
    first: "Rebaja el grado de multiprogramación del sistema.",
    second: "Elige procesos para pasarlos a ejecución.",
    third: "Pasa procesos de esperando a bloqueado suspendido.",
    fourth:
      "Pasa procesos de creados a ejecutando.",
    answer: 2,
  },
  item22: {
    id: "22",
    title: "Las llamadas al sistema",
    first:
      "Son órdenes que tiene definidas el shell del sistema para realizar distintas funciones.",
    second:
      "Son funciones internas del shell del sistema y sólo éste puede utilizarlas.",
    third:
      "Se ejecutan en modo kernel si el usuario lo solicita.",
    fourth:
      "Siempre se ejecutan en modo kernel.",
    answer: 4,
  },
  item23: {
    id: "23",
    title: "Un hilo",
    first:
      "Es un procedimiento de un proceso que tiene asignado recursos.",
    second: "Es la unidad propietaria de los recursos",
    third:
      "Comparte la pila de ejecución con los otros hilos.",
    fourth:
      "Ninguna de las anteriores es cierta.",
    answer: 4,
  },
  item24: {
    id: "24",
    title:
      "Para la programación con hilos",
    first:
      "Se necesitan mecanismos de exclusión mutua para acceder a los recursos compartidos lectura/escritura.",
    second: "Se necesitan mecanismos de exclusión mutua para acceder a todos los recursos compartidos",
    third: "Se necesitan mecanismos de exclusión mutua para acceder a los recursos compartidos solo lectura.",
    fourth: "Pueden acceder a los recursos compartidos del proceso sin ninguna restricción.",
    answer: 1,
  },
  item25: {
    id: "25",
    title:
      "En un sistema multiprocesador",
    first:
      "Solo pueden ejecutarse hilos del mismo proceso concurrentemente.",
    second:
      "Varios hilos de un mismo proceso se pueden ejecutar simultáneamente.",
    third:
      "Se pueden ejecutar varios hilos pero en el procesador asignado al proceso.",
    fourth:
      "Ninguna de las anteriores es correcta.",
    answer: 2,
  },
  item26: {
    id: "26",
    title: "Un proceso que entra en el sistema a las 12:00 horas, empieza su ejecución a las 12:02 y termina a las 12:30.",
    first: "La utilización de la CPU es de 28 minutos.",
    second: "El tiempo de respuesta es de 2 minutos, el tiempo de retorno es de 28 minutos.",
    third: "El tiempo de espera es de 2 minutos.",
    answer: 2,
  },
  item27: {
    id: "27",
    title:
      "En un sistema que utiliza gestión de memoria real con particiones dinámicas, en un momento determinado la lista de huecos está compuesta por huecos de tamaño 10 KB, 15 KB, 17 KB y 12 KB. ¿Qué política de asignación utiliza el sistema, si ante una solicitud de un bloque de 13 KB lo coloca en el bloque de 17 KB?",
    first:
      "Ninguna del resto de las respuestas es correcta.",
    second:
      "Primer ajuste.",
    third: "Peor ajuste.",
    fourth:
      "Mejor ajuste.",
    answer: 3,
  },
  item28: {
    id: "28",
    title: "La fragmentación interna",
    first: "Se produce con paginación y con segmentación.",
    second: "Solo se produce en el último segmento de la tabla de segmentos del proceso",
    third: "Se produce sólo cuando tenemos un sistema de memoria con paginación o particiones estáticas",
    fourth:
      "Ninguna las anteriores es correcta.",
    answer: 3,
  },
  item29: {
    id: "29",
    title:
      "¿Cuál de las siguientes afirmaciones NO es correcta?",
    first: "Los semáforos solucionan el problema de la espera activa",
    second:
      "Los semáforos solucionan el problema de la exclusión mutua y la sincronización",
    third: "Los semáforos binarios sólo pueden ser usados simultáneamente por dos procesos",
    fourth: "Los semáforos de cuenta pueden ser usados simultáneamente por cualquier número de procesos.",
    answer: 3,
  },
  item30: {
    id: "30",
    title:
      "Los métodos de planificación de procesos multicolas:",
    first: "Están especialmente indicados para entornos multiprocesadores.",
    second:
      "Permiten aplicar políticas diferentes a distintas clases de procesos.",
    third: "Evitan que los procesos largos monopolicen el uso de CPU.",
    fourth: "Los procesos siempre pasan de una cola a otra.",
    answer: 2,
  },
  item31: {
    id: "31",
    title: "En Linux, la llamada al sistema exec():",
    first: "Crea un nuevo proceso con la misma imagen del proceso actual y con un PID diferente.",
    second: "Cambia la imagen (código) del proceso actual y le asigna un nuevo PID.",
    third:
      "Carga una nueva imagen de código en la memoria del proceso actual.",
    fourth: "Ejecuta el proceso hijo indicado en el parámetro de la llamada.",
    answer: 3,
  },
  item32: {
    id: "32",
    title: "¿Cuál es la misión del planificador de largo plazo o planificador de alto nivel?",
    first: "Realizar el despacho de los procesos que están en la cola de preparados, y en particular realizar los cambios de contexto.",
    second:
      "En los sistemas de tiempo real, realizar una planificación previa de la carga de trabajo que se va a enviar al sistema, para asegurar que se cumplen los plazos de ejecución.",
    third:
      "Regular la admisión de nuevos procesos a la cola de preparados, para mantener el grado de multiprogramación por debajo de un límite.",
    fourth:
      "Permitir la entrada de procesos en el sistema con un instante de ejecución posterior en el tiempo.",
    answer: 3,
  },
  item33: {
    id: "33",
    title:
      "En un algoritmo de planificación Round Robin, ¿cuál de estas funciones queda a cargo del sistema de interrupciones?",
    first: "Recibir la señal del temporizador cuando finaliza un cuanto de tiempo.",
    second: "Crear el bloque de control de proceso (BCP) de los procesos recién creados.",
    third: "Actualizar las estadísticas de consumo de tiempo de cada proceso",
    fourth: "Realizar el dispatch del proceso.",
    answer: 1,
  },
  item34: {
    id: "34",
    title:
      "La CPU de un computador está ejecutando ahora mismo un proceso P que entró en CPU hace 3 mseg. y sabemos que le restan otros 5 mseg. para terminar su ráfaga. Sabemos que dentro de 2 mseg. llegará al sistema un nuevo proceso Q que pretende ejecutar una ráfaga de CPU de 2 mseg. Si no ocurre ninguna incidencia más, ¿qué proceso estará ejecutándose en la CPU dentro de 3 mseg.?",
    first:
      "Si el algoritmo de planificación es un SJF no expulsivo, el proceso Q.",
    second:
      "Si el algoritmo de planificación es un SJF expulsivo, el proceso Q.",
    third:
      "Si el algoritmo de planificación es un FCFS, el proceso Q.",
    fourth:
      "Si el algoritmo de planificación es un FCFS expulsivo, el proceso Q.",
    answer: 2,
  },
  item35: {
    id: "35",
    title: "Llega una interrupción procedente de un dispositivo de E/S mientras un proceso de usuario se está ejecutando. ¿Qué suele ocurrir justo a continuación?",
    first: "Se conmuta a modo kernel y se ejecuta la rutina de servicio de interrupción correspondiente.",
    second: "Se conmuta a modo usuario para que el proceso gestione con la E/S de acuerdo con sus necesidades.",
    third: "Se atiende la interrupción de forma inmediata, en el modo de operación en el que se encontraba el procesador en el momento de ocurrir la operación.",
    fourth: "No puede llegar una interrupción de E/S si el proceso está ejecutando su quantum, sólo llega entre quantums.",
    answer: 1,
  },
  item36: {
    id: "36",
    title: "Si en un algoritmo Round Robin el cuanto de tiempo Q se hace excesivamente corto:",
    first: "El algoritmo degenera en un SJF.",
    second: "El algoritmo degenera en un FCFS.",
    third: "Disminuye la productividad del procesador porque se realizan muchos cambios de contexto.",
    fourth: "Aumenta el impacto del efecto convoy (los procesos largos se mantienen en ejecución mientras los cortos se quedan esperando) si existe una combinación de procesos de larga y de corta duración.",
    answer: 3,
  },
};
