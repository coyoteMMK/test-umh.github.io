const data = {
  item1: {
    id: "1",
    title: "¿Qué función cumple la reubicación en la gestión de memoria?",
    first: "Permite compartir segmentos de memoria entre procesos",
    second: "Asegura que todos los procesos utilicen direcciones físicas consecutivas",
    third: "Restringe el acceso a zonas críticas de memoria",
    fourth: "Traduce direcciones lógicas a direcciones físicas durante la ejecución",
    answer: 4
  },
  item2: {
    id: "2",
    title: "¿Qué tipo de fragmentación generan las particiones estáticas de igual tamaño?",
    first: "Fragmentación externa",
    second: "Fragmentación interna",
    third: "Fragmentación dinámica",
    fourth: "No generan fragmentación",
    answer: 2
  },
  item3: {
    id: "3",
    title: "¿Qué característica tiene la segmentación simple?",
    first: "Elimina la fragmentación interna pero genera fragmentación externa",
    second: "Garantiza que todos los segmentos tengan el mismo tamaño",
    third: "Es invisible para el programador y el compilador",
    fourth: "No permite compartir segmentos entre procesos",
    answer: 1
  },
  item4: {
    id: "4",
    title: "¿Qué técnica utiliza registros base y límite para la protección de memoria?",
    first: "Paginación simple",
    second: "Reubicación dinámica",
    third: "Compactación",
    fourth: "Segmentación simple",
    answer: 4
  },
  item5: {
    id: "5",
    title: "¿Qué ventaja tiene la paginación frente a las particiones dinámicas?",
    first: "Elimina tanto la fragmentación interna como la externa",
    second: "Requiere menos memoria para gestionar las tablas de páginas",
    third: "Permite que las páginas no estén almacenadas en marcos consecutivos",
    fourth: "Es más sencilla de implementar en hardware antiguo",
    answer: 3
  },
  item6: {
    id: "6",
    title: "¿Qué representa el bit de presencia en una tabla de páginas?",
    first: "Si la página está en la memoria principal",
    second: "El nivel de prioridad de la página",
    third: "El tamaño de la página en bytes",
    fourth: "El índice del marco en el que está la página",
    answer: 1
  },
  item7: {
    id: "7",
    title: "¿Qué mecanismo permite traducir direcciones lógicas a físicas en la paginación?",
    first: "El registro base",
    second: "La tabla de segmentos",
    third: "La tabla de páginas",
    fourth: "El búfer de traducción anticipada (TLB)",
    answer: 3
  },
  item8: {
    id: "8",
    title: "¿Qué ocurre si una dirección lógica apunta a una página que no está en memoria?",
    first: "El proceso continúa su ejecución normalmente",
    second: "Se genera un fallo de página",
    third: "La dirección se marca como inválida",
    fourth: "La página es reemplazada automáticamente",
    answer: 2
  },
  item9: {
    id: "9",
    title: "¿Qué caracteriza al sistema de memoria virtual?",
    first: "Permite que todo el proceso resida en memoria principal",
    second: "Divide los procesos en bloques de tamaño fijo llamados segmentos",
    third: "Utiliza direcciones lógicas que se traducen en físicas durante la ejecución",
    fourth: "Evita el uso de tablas de páginas o segmentos",
    answer: 3
  },
  item10: {
    id: "10",
    title: "¿Qué algoritmo de asignación busca el bloque más pequeño que se ajuste al proceso?",
    first: "First Fit",
    second: "Next Fit",
    third: "Best Fit",
    fourth: "Worst Fit",
    answer: 3
  },
  item11: {
    id: "11",
    title: "¿Qué ventaja tiene la memoria virtual para los procesos grandes?",
    first: "Los procesos grandes no necesitan dividirse en bloques",
    second: "Elimina la necesidad de tablas de páginas",
    third: "Permite que el proceso sea más grande que la memoria principal disponible",
    fourth: "Evita los fallos de página",
    answer: 3
  },
  item12: {
    id: "12",
    title: "¿Qué problema resuelve el sistema de colegas en la gestión de memoria?",
    first: "La fragmentación interna",
    second: "La compactación dinámica",
    third: "La fragmentación externa",
    fourth: "El tiempo de acceso a la memoria",
    answer: 3
  },
  item13: {
    id: "13",
    title: "¿Qué ocurre en el algoritmo FIFO al reemplazar una página?",
    first: "Se elimina la página más antigua en la memoria",
    second: "Se prioriza la página con menor tiempo de uso",
    third: "Se reemplaza la página con el menor número de referencias",
    fourth: "Se elimina la página con el bit de uso a 0",
    answer: 1
  },
  item14: {
    id: "14",
    title: "¿Qué significa el principio de localidad en la gestión de memoria?",
    first: "Los programas acceden frecuentemente a las mismas páginas en un periodo corto",
    second: "Los programas ocupan toda la memoria disponible",
    third: "La memoria se organiza en bloques de tamaño fijo",
    fourth: "Los accesos a memoria son aleatorios para evitar fragmentación",
    answer: 1
  },
  item15: {
    id: "15",
    title: "¿Qué caracteriza a una tabla de páginas multinivel?",
    first: "Tiene un tamaño fijo para todos los procesos",
    second: "Divide la tabla principal en tablas más pequeñas",
    third: "Es más rápida que las tablas de páginas simples",
    fourth: "Elimina la necesidad del TLB",
    answer: 2
  },
  item16: {
    id: "16",
    title: "¿Qué ventaja tiene la segmentación frente a la paginación?",
    first: "Elimina la fragmentación externa",
    second: "Es invisible al programador",
    third: "Permite organizar la memoria según la lógica del programa",
    fourth: "Requiere menos memoria para las tablas de segmentos",
    answer: 3
  },
  item17: {
    id: "17",
    title: "¿Qué política de reemplazo es imposible de implementar directamente?",
    first: "FIFO",
    second: "LRU",
    third: "Óptima",
    fourth: "Reloj",
    answer: 3
  },
  item18: {
    id: "18",
    title: "¿Qué función realiza el bit de modificado en una tabla de páginas?",
    first: "Indica si la página está presente en memoria",
    second: "Marca si la página ha sido modificada desde su carga",
    third: "Controla la prioridad de acceso de la página",
    fourth: "Se utiliza para indexar la tabla de páginas",
    answer: 2
  },
  item19: {
    id: "19",
    title: "¿Qué asegura el TLB en sistemas con paginación?",
    first: "Traducción más rápida de direcciones frecuentes",
    second: "Reducción de la fragmentación externa",
    third: "Eliminación de fallos de página",
    fourth: "Asignación dinámica de marcos",
    answer: 1
  },
  item20: {
    id: "20",
    title: "¿Qué problema puede causar el uso de Best Fit en particiones dinámicas?",
    first: "Fragmentación externa significativa",
    second: "Mayor uso de memoria secundaria",
    third: "Aumento en el tiempo de búsqueda de bloques",
    fourth: "Inanición de procesos largos",
    answer: 3
  }
};
