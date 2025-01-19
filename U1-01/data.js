const data = {
  item1: {
    id: "1",
    title: "¿Cuál es la función principal del procesador en un computador?",
    first: "Controlar el funcionamiento del computador y realizar el procesamiento de datos",
    second: "Almacenar datos y programas",
    third: "Transferir datos entre el computador y el entorno externo",
    fourth: "Gestionar dispositivos de E/S únicamente",
    answer: 1
  },
  item2: {
    id: "2",
    title: "¿Qué otro nombre recibe la memoria principal?",
    first: "Memoria virtual",
    second: "Memoria secundaria",
    third: "Memoria física o real",
    fourth: "Memoria cache",
    answer: 3
  },
  item3: {
    id: "3",
    title: "¿Qué permite reducir los accesos a memoria principal?",
    first: "El uso de módulos de E/S",
    second: "Los registros visibles para el usuario",
    third: "La memoria secundaria",
    fourth: "El uso del contador de programa",
    answer: 2
  },
  item4: {
    id: "4",
    title: "¿Qué significa LIFO en el contexto de una pila?",
    first: "Last In First Out",
    second: "Linear In First Out",
    third: "Last In Fast Out",
    fourth: "Longest Instruction Fast Output",
    answer: 1
  },
  item5: {
    id: "5",
    title: "¿Qué registro contiene la dirección de la próxima instrucción a ejecutarse?",
    first: "RI (Registro de Instrucción)",
    second: "PSW (Program Status Word)",
    third: "PC (Program Counter)",
    fourth: "MAR (Memory Address Register)",
    answer: 3
  },
  item6: {
    id: "6",
    title: "¿Qué estructura almacena información sobre la ubicación de páginas en memoria?",
    first: "Mapa de memoria",
    second: "Tabla de páginas",
    third: "Puntero de segmento",
    fourth: "Registro índice",
    answer: 2
  },
  item7: {
    id: "7",
    title: "¿Qué operación realiza el registro de datos de memoria (RDAM)?",
    first: "Contener la dirección de memoria para la próxima lectura",
    second: "Contener los datos leídos o a escribir en memoria",
    third: "Controlar el flujo de datos entre procesador y E/S",
    fourth: "Indicar la dirección del próximo bloque de memoria",
    answer: 2
  },
  item8: {
    id: "8",
    title: "¿Qué mecanismo permite interrumpir la ejecución del procesador para sincronizar dispositivos?",
    first: "Operaciones DMA",
    second: "Ciclos de instrucción",
    third: "Saltos condicionales",
    fourth: "Interrupciones",
    answer: 4
  },
  item9: {
    id: "9",
    title: "¿Qué clase de interrupción puede ser causada por un desbordamiento?",
    first: "De temporizador",
    second: "De programa",
    third: "De E/S",
    fourth: "Por fallo de hardware",
    answer: 2
  },
  item10: {
    id: "10",
    title: "¿Qué registro traduce direcciones virtuales en físicas?",
    first: "MAR (Memory Address Register)",
    second: "MMU (Memory Management Unit)",
    third: "PSW (Program Status Word)",
    fourth: "RDIM (Registro de Dirección de Memoria)",
    answer: 2
  },
  item11: {
    id: "11",
    title: "¿Qué estructura contiene una copia de parte de la memoria principal para acceso rápido?",
    first: "Memoria secundaria",
    second: "Memoria virtual",
    third: "Memoria cache",
    fourth: "Tabla de páginas",
    answer: 3
  },
  item12: {
    id: "12",
    title: "¿Qué unidad se encarga de interpretar y ejecutar instrucciones máquina?",
    first: "Unidad Aritmético-Lógica (ALU)",
    second: "Unidad de Control",
    third: "Procesador de Interrupciones",
    fourth: "MMU (Memory Management Unit)",
    answer: 2
  },
  item13: {
    id: "13",
    title: "¿Qué es una memoria segmentada?",
    first: "Una memoria organizada en bloques de tamaño fijo",
    second: "Una memoria dividida en segmentos, cada uno con su base y límite",
    third: "Una memoria utilizada exclusivamente para registros",
    fourth: "Una memoria de acceso rápido como la cache",
    answer: 2
  },
  item14: {
    id: "14",
    title: "¿Qué hace el puntero de segmento?",
    first: "Almacena la dirección física del próximo bloque de datos",
    second: "Contiene el identificador del segmento actual",
    third: "Apunta al comienzo de un segmento en memoria segmentada",
    fourth: "Guarda temporalmente datos intermedios durante un cálculo",
    answer: 3
  },
  item15: {
    id: "15",
    title: "¿Qué indicador en el PSW señala que el resultado de una operación es cero?",
    first: "Bit de desbordamiento",
    second: "Bit cero",
    third: "Bit de interrupción",
    fourth: "Bit negativo",
    answer: 2
  },
  item16: {
    id: "16",
    title: "¿Qué tipo de memoria es volátil?",
    first: "Memoria principal",
    second: "Memoria secundaria",
    third: "Memoria cache",
    fourth: "Disco duro",
    answer: 1
  },
  item17: {
    id: "17",
    title: "¿Qué componente utiliza el principio de proximidad para mejorar el rendimiento?",
    first: "Procesador",
    second: "Memoria cache",
    third: "Disco duro",
    fourth: "Unidad de Control",
    answer: 2
  },
  item18: {
    id: "18",
    title: "¿Qué operación realiza un registro acumulador (AC)?",
    first: "Almacenar temporalmente resultados de operaciones aritméticas",
    second: "Contener direcciones de memoria virtual",
    third: "Supervisar el acceso a dispositivos de E/S",
    fourth: "Controlar las instrucciones en modo núcleo",
    answer: 1
  },
  item19: {
    id: "19",
    title: "¿Qué componente gestiona el acceso a memoria en operaciones DMA?",
    first: "Unidad de Control",
    second: "Bus de Control",
    third: "Controlador de DMA",
    fourth: "MMU",
    answer: 3
  },
  item20: {
    id: "20",
    title: "¿Qué sucede cuando se ejecuta una instrucción TRAP?",
    first: "Se interrumpe el programa y se pasa al modo núcleo",
    second: "Se ejecuta una operación privilegiada sin interrupción",
    third: "Se salta a una nueva instrucción condicional",
    fourth: "Se bloquea el acceso a los registros de usuario",
    answer: 1
  },
  item21: {
    id: "21",
    title: "¿Qué elemento del procesador realiza operaciones aritméticas y lógicas?",
    first: "Unidad de Control",
    second: "ALU (Unidad Aritmético-Lógica)",
    third: "Registros de propósito general",
    fourth: "Bus de datos",
    answer: 2
  },
  item22: {
    id: "22",
    title: "¿Qué mecanismo permite dividir programas en partes más pequeñas para ejecutarlas de forma eficiente?",
    first: "Paginación",
    second: "Segmentación",
    third: "Memoria virtual",
    fourth: "Multitarea",
    answer: 1
  },
  item23: {
    id: "23",
    title: "¿Cuál es el propósito de la memoria cache?",
    first: "Aumentar el tamaño de la memoria principal",
    second: "Almacenar datos frecuentemente utilizados para acceso rápido",
    third: "Gestionar las direcciones virtuales",
    fourth: "Proporcionar almacenamiento persistente para datos grandes",
    answer: 2
  },
  item24: {
    id: "24",
    title: "¿Qué tipo de memoria utiliza un disco duro convencional?",
    first: "Memoria volátil",
    second: "Memoria magnética",
    third: "Memoria flash",
    fourth: "Memoria óptica",
    answer: 2
  },
  item25: {
    id: "25",
    title: "¿Qué sistema gestiona las prioridades entre múltiples procesos?",
    first: "Planificador de tareas",
    second: "Controlador de memoria",
    third: "Interfaz del sistema operativo",
    fourth: "Bus de control",
    answer: 1
  }
};
