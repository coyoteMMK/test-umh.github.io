const data = {
  item1: {
    id: "1",
    title: "¿Qué ocurre si le asignamos a un proceso menos páginas de las que forman su conjunto de trabajo (working set)?",
    first: "Aumentará el número de cambios de contexto en el sistema.",
    second:
      "Disminuirá el tamaño de su tabla de páginas.",
    third:
      "Que el proceso no podrá ejecutarse",
    fourth:
      "El proceso generará fallos de página continuamente.",
    answer: 4,
  },
  item2: {
    id: "2",
    title: "¿Cuál de estos algoritmos de reemplazo de páginas se apoya en el bit de referencia?",
    first:
      "FIFO.",
    second:
      "OPT.",
    third: 
      "SJF.",
    fourth:
      "Algoritmo del reloj / segunda oportunidad.",
    answer: 4,
  },
  item3: {
    id: "3",
    title: "Tenemos un sistema de gestión de memoria con segmentación, con direcciones lógicas de 32 bits. Si cada proceso es capaz de manejar hasta 64 segmentos, ¿cuál es el tamaño máximo que puede llegar a tener un segmento?",
    first:
      "16 MB.",
    second:
      "64 MB.",
    third:
      "1 MB.",
    fourth:
      "8 MB.",
    answer: 2,
  },
  item4: {
    id: "4",
    title: "¿Qué es la MMU?",
    first:
      "Es el módulo del hardware encargado de la traducción de direcciones lógicas a direcciones físicas.",
    second:
      "Es el módulo del sistema operativo encargado de detectar accesos a posiciones de memoria indebidas.",
    third:
      "Es el módulo del sistema informático encargado de resolver los fallos de página y recuperar las páginas de la memoria secundaria.",
    fourth:
      "Es el módulo hardware encargado de gestionar el intercambio de memoria y swap área.",
    answer: 1,
  },
  item5: {
    id: "5",
    title: "La TLB es una estructura usada para:",
    first:
      "Reducir el tiempo de la traducción de direcciones de memoria.",
    second:
      "Almacenar el estado de un proceso cuando ocurre un cambio de contexto.",
    third:
      "Almacenar el estado de las páginas no válidas de un proceso.",
    fourth:
      "Almacenar los punteros a las pilas de los procesos",
    answer: 1,
  },
  item6: {
    id: "6",
    title: "En un sistema que usa gestión de memoria paginada simple, cierto proceso necesita ocupar 2000 bytes de memoria principal. Si el tamaño de página utilizado es 512 bytes, ¿cuánta fragmentación provoca el proceso?",
    first:
      "Al menos 464 bytes de fragmentación externa.",
    second:
      "Al menos 48 bytes de fragmentación externa.",
    third:
      "Al menos 48 bytes de fragmentación interna.",
    fourth:
      "Al menos 64 bytes de fragmentación interna.",
    answer: 3,
  },
  item7: {
    id: "7",
    title: "Tenemos un sistema de gestión de memoria paginada simple. Las direcciones lógicas son de 32 bits y las direcciones físicas son de 48 bits. Si el tamaño de página es de 16 KB, ¿cuántas páginas distintas es capaz de manejar un proceso al mismo tiempo?",
    first:
      "218 páginas.",
    second:
      "224 páginas.",
    third:
      "216 páginas.",
    fourth:
      "212 páginas.",
    answer: 1,
  },
  item8: {
    id: "8",
    title: "En un sistema de memoria paginada se ejecutan varios procesos pesados (procesos) e hilos. ¿Cuántas tablas de páginas diferentes existen en un momento dado?",
    first:
      "Sólo una multientrada gestionada por la MMU.",
    second:
      "Tantas como procesos pesados hay.",
    third:
      "Tantas como hilos hay.",
    fourth:
      "Tantas como la suma de procesos pesados e hilos.",
    answer: 2,
  },
  item9: {
    id: "9",
    title: "¿Qué característica peculiar tiene la instrucción test-and-set?",
    first:
      "Se ejecuta de forma atómica.",
    second:
      "Sólo funciona en multiprocesadores.",
    third:
      "Ejecuta dos acciones de forma simultánea (paralela).",
    fourth: 
      "Ejecuta el test y espera interrupción para el set.",
    answer: 1,
  },
  item10: {
    id: "10",
    title: "Tenemos una variable entera x que actualmente vale 1. Dos hilos acceden simultáneamente a x. Uno de ellos ejecuta la sentencia x=x+1 y el otro la sentencia x=x-1. Una vez que se ejecuten esas sentencias, ¿cuál será el valor de x?",
    first:
      "1.",
    second:
      "0, 1 o 2.",
    third:
      "0 o 2.",
    fourth:
      "0",
    answer: 2,
  },
  item11: {
    id: "11",
    title: "¿Cuál es el problema de utilizar espera activa para resolver la sincronización entre procesos?",
    first:
      "Se utiliza improductivamente tiempo del procesador.",
    second:
      "No se resuelve del todo la sincronización, por ejemplo, si varios hilos ejecutan justo al mismo tiempo la espera activa.",
    third:
      "No funciona en sistemas multiprocesadores de memoria compartida.",
    fourth:
      "Que hay que esperar la activación por parte del S.O. para continuar la ejecución.",
    answer: 1,
  },
  item12: {
    id: "12",
    title: "Tenemos tres procesos en la cola de preparados. El primero quiere ejecutarse durante 3 mseg., otro durante 2 mseg. y el último 5 mseg. Sabemos que dentro de 3 mseg. llegará un proceso que pretende ejecutarse durante 1 mseg. Si la CPU actualmente está libre, ¿qué algoritmo de planificación producirá más cambios de contexto para esta carga de trabajo?",
    first:
      "FCFS.",
    second:
      "Round-Robin con Q=2mseg.",
    third: "SJF expulsivo.",
    fourth:
      "Round-Robin con Q=8mseg.",
    answer: 2,
  },
  item13: {
    id: "13",
    title:
      "¿Cuál es la diferencia entre un proceso «pesado» y un hilo (thread)?",
    first: "Un proceso pesado es una aplicación en ejecución, mientras que un hilo es una actividad concurrente dentro de una aplicación.",
    second: "Un proceso pesado puede contener un hilo o ninguno, mientras que un hilo puede contener uno o más procesos pesados.",
    third: "Un proceso pesado corre siempre en modo usuario, mientras que un hilo puede correr en modo usuario o modo supervisor/modo núcleo.",
    fourth: "Un hilo puede pertenecer a varios procesos pero un proceso a un único hilo.",
    answer: 1,
  },
  item14: {
    id: "14",
    title: "Para implementar de forma eficaz un esquema de protección de memoria basado en la pareja de registros base y límite, ¿cuál de estas características debe estar presente en el hardware?",
    first:"Un temporizador controlable por software.",
    second: "Un procesador con dos modos de operación (user/kernel).",
    third: "Una jerarquía de memorias de al menos dos niveles.",
    fourth:
      "El controlador de interrupciones",
    answer: 2,
  },
  item15: {
    id: "15",
    title: "El núcleo del sistema operativo:",
    first: "Está cargado en memoria principal de forma permanente.",
    second: "Contiene los programas del sistema.",
    third: "Su tamaño depende del número de procesos a gestionar.",
    fourth: "Virtualiza las distintas interfaces que puede ofrecer el sistema operativo.",
    answer: 1,
  },
  item16: {
    id: "16",
    title: "¿El hardware puede activar directamente al sistema operativo?",
    first: "Sí, por ejemplo, mediante una interrupción.",
    second: "No, el sistema operativo sólo se activa mediante software.",
    third: "No, se requiere una instrucción TRAP.",
    fourth: "No, todos los eventos del hardware deben pasar por el núcleo.",
    answer: 1,
  },
  item17: {
    id: "17",
    title: "Si dispusiéramos de memoria infinita, ¿qué servicio dejaría de tener sentido?",
    first:
      "La gestión de zonas de la memoria libres y ocupadas.",
    second:
      "La protección del área de memoria de los procesos.",
    third:
      "La protección del área de memoria ocupada por el sistema operativo.",
    fourth: "La memoria virtual paginada.",
    answer: 4,
  },
  item18: {
    id: "18",
    title: "¿Cuál de estos algoritmos de planificación de CPU por definición no puede ser expulsivo?",
    first:
      "FCFS.",
    second: "Round Robin.",
    third: "SJF.",
    fourth: "SJF con prioridades.",
    answer: 1,
  },
  item19: {
    id: "19",
    title: "Se tienen dos procesos: P1 y P2, de tiempos de ejecución 25 y 30 ms, respectivamente. El planificador a corto plazo actúa según el algoritmo Round Robin con quantum de 10 ms. ¿Cuál será el tiempo de retorno o regreso de P2? ",
    first:
      "45 ms.",
    second:
      "55 ms.",
    third:
      "60 ms.",
    fourth:
      "70 ms.",
    answer: 1,
  },
  item20: {
    id: "20",
    title: "El controlador de E/S y la memoria intercambian datos directamente, sin la intervención de la CPU, cuando se tiene:",
    first:
      "E/S controlada por programa",
    second:
      "E/S por interrupciones",
    third: "DMA",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },
  item21: {
    id: "21",
    title: "La sincronización mediante monitor:",
    first: "Esta implícita, basta con invocar al procedimiento correspondiente del monitor",
    second: "Se consigue porque existe una cola asociada a cada procedimiento del monitor",
    third: "Se consigue porque existe una única cola asociada a todos los procedimientos del monitor",
    fourth:
      "Se consigue mediante la utilización de variables de condición",
    answer: 4,
  },
  item22: {
    id: "22",
    title: "En el enfoque Núcleo Fuera de Todo Proceso, ¿cómo interactúan los procesos de usuario con el núcleo del sistema operativo?",
    first:
      "A través de comunicación interprocesos (IPC).",
    second:
      "Comparten el espacio de direcciones con el núcleo.",
    third:
      "Por medio de llamadas al sistema y solicitudes de servicios.",
    fourth:
      "Ejecutando el núcleo como una biblioteca compartida.",
    answer: 3,
  },
  item23: {
    id: "23",
    title: "¿Qué representa el valor del contador en la implementación interna de un semáforo en un sistema operativo?",
    first:
      "El número total de hilos en espera.",
    second: "La cantidad de recursos gestionados por el semáforo.",
    third:
      "El tiempo transcurrido desde la última operación V (Despertar).",
    fourth:
      "La prioridad asignada a los procesos en la cola de espera.",
    answer: 2,
  },
  item24: {
    id: "24",
    title:
      "¿Cuál de las siguientes métricas es especialmente relevante en sistemas interactivos y afecta la percepción de la velocidad del sistema por parte del usuario?",
    first:
      "Throughput (Rendimiento)",
    second: "Tiempo de Respuesta Promedio",
    third: "Inanición (Starvation)",
    fourth: "Criterios de Justicia (Fairness)",
    answer: 2,
  },
  item25: {
    id: "25",
    title:
      "En el esquema de segmentación, ¿qué información contiene la tabla de descriptores de segmento?",
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
  item26: {
    id: "26",
    title: "¿Cuál es una ventaja del paso de mensajes en comparación con los semáforos y monitores?",
    first: "Mayor eficiencia en sistemas de memoria compartida.",
    second: "Comunicación explícita entre procesos.",
    third: "Menor complejidad de implementación.",
    fourth: "Flexibilidad en la sincronización.",
    answer: 2,
  },
  item27: {
    id: "27",
    title:
      "¿Qué función cumple el número de marco de página en una entrada típica de la tabla de páginas en un sistema de memoria virtual?",
    first:
      "Indica la dirección lógica de la página.",
    second:
      "Representa el desplazamiento dentro de la página.",
    third: "Es un índice directo a la ubicación física de la página.",
    fourth:
      "Define los permisos de acceso a la página.",
    answer: 3,
  },
  item28: {
    id: "28",
    title: "¿Qué implica el concepto de reubicación en la gestión de memoria?",
    first: "La capacidad de cargar varios procesos en la memoria principal simultáneamente.",
    second: "Ajustar las direcciones de memoria de un programa para ejecutarse en diferentes ubicaciones de memoria.",
    third: "La asignación de espacio de direcciones fijo para cada proceso.",
    fourth:
      "La carga dinámica de programas en tiempo de ejecución.",
    answer: 2,
  },
  item29: {
    id: "29",
    title:
      "¿Cuál de las siguientes afirmaciones describe mejor la relación entre OpenMP y los hilos a nivel de usuario (ULT)?",
    first: "OpenMP utiliza hilos a nivel de kernel (KLT) para la paralelización en sistemas distribuidos.",
    second:
      "OpenMP no utiliza hilos, sino procesos separados en sistemas distribuidos.",
    third: "OpenMP utiliza hilos a nivel de usuario (ULT) para la paralelización en sistemas de memoria compartida.",
    fourth: "OpenMP se enfoca en la comunicación entre procesos en sistemas de memoria distribuida.",
    answer: 3,
  },
  item30: {
    id: "30",
    title:
      "¿Cuál de las siguientes afirmaciones describe correctamente el proceso de traducción de direcciones en un sistema de paginación simple sin memoria virtual? ",
    first: "Las direcciones lógicas se traducen directamente en direcciones físicas sin necesidad de una tabla de páginas.",
    second:
      "Las direcciones lógicas se dividen en segmentos y se traducen a direcciones físicas mediante una tabla de segmentos.",
    third: "Las direcciones lógicas se dividen en páginas, que se asignan a marcos de página en la memoria física utilizando una tabla de páginas.",
    fourth: "Las direcciones lógicas se traducen a direcciones físicas utilizando un algoritmo de reemplazo de páginas.",
    answer: 3,
  },
  item31: {
    id: "31",
    title: "¿Cuál es una característica clave del direccionamiento uno a muchos (broadcast) en el paso de mensajes?",
    first: "Solo un proceso puede recibir el mensaje enviado.",
    second: "El mensaje se envía a un proceso receptor específico y único.",
    third: "Varios procesos pueden recibir el mismo mensaje desde un canal compartido.",
    fourth: "El mensaje se envía a múltiples destinatarios, pero cada uno recibe una copia única del mensaje.",
    answer: 3,
  },
  item32: {
    id: "32",
    title: "¿Cuál de las siguientes es una ventaja de los monitores sobre los semáforos?",
    first: "Los monitores requieren manejo manual de la exclusión mutua.",
    second:
      "Los monitores permiten la exclusión mutua implícita, simplificando la programación concurrente.",
    third:
      "Los monitores son menos seguros y propensos a errores comparados con los semáforos.",
    fourth:
      "Los monitores son más flexibles que los semáforos para cualquier problema de sincronización.",
    answer: 2,
  },
  item33: {
    id: "33",
    title:
      "¿Cuál es una ventaja de utilizar la función intercambiar() o swap() para la exclusión mutua en sistemas multiprocesador?",
    first: "Requiere intervención manual para cada operación.",
    second: "Asegura que las operaciones se realicen de forma indivisible y eficiente en un entorno concurrente.",
    third: "No garantiza la exclusión mutua y depende del programador manejar las condiciones de carrera.",
    fourth: "Es más sencilla de implementar que cualquier otra técnica de sincronización.",
    answer: 2,
  },
  item34: {
    id: "34",
    title:
      "¿Cuándo es más recomendable utilizar procesos en lugar de hilos en una aplicación?",
    first:
      "Cuando se requiere un alto grado de aislamiento y seguridad entre unidades de ejecución.",
    second:
      "Cuando las tareas son altamente dependientes y requieren comunicación constante.",
    third:
      "Cuando la aplicación necesita maximizar la velocidad de cambio de contexto.",
    fourth:
      "Cuando se necesita acceso compartido a la misma memoria por todos los hilos.",
    answer: 1,
  },
};
