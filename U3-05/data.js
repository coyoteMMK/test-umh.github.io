const data = {
  item1: {
    id: "1",
    title: "¿Qué es un semáforo en el contexto de sistemas operativos?",
    first: "Una señal de hardware que controla la ejecución de procesos",
    second: "Una estructura de datos que sincroniza procesos mediante señales",
    third: "Un sistema de planificación basado en prioridades",
    fourth: "Un mecanismo para evitar la fragmentación de memoria",
    answer: 2
  },
  item2: {
    id: "2",
    title: "¿Qué operación realiza wait(S) sobre un semáforo S?",
    first: "Incrementa el valor del semáforo",
    second: "Bloquea el semáforo y detiene el proceso",
    third: "Decrementa el valor del semáforo y bloquea si es negativo",
    fourth: "Despierta a todos los procesos bloqueados en el semáforo",
    answer: 3
  },
  item3: {
    id: "3",
    title: "¿Qué ocurre si un semáforo binario tiene valor 0 al realizar wait(S)?",
    first: "El proceso continúa su ejecución",
    second: "El semáforo se inicializa automáticamente a 1",
    third: "El proceso que llamó a wait(S) se bloquea",
    fourth: "El semáforo elimina todos los procesos en la cola",
    answer: 3
  },
  item4: {
    id: "4",
    title: "¿Qué operación realiza signal(S) sobre un semáforo S?",
    first: "Decrementa el valor del semáforo",
    second: "Incrementa el valor del semáforo y desbloquea un proceso si es necesario",
    third: "Resetea el semáforo a su valor inicial",
    fourth: "Elimina todos los procesos de la cola del semáforo",
    answer: 2
  },
  item5: {
    id: "5",
    title: "¿Qué problema resuelve el uso de semáforos en sistemas concurrentes?",
    first: "Planificación de procesos",
    second: "Exclusión mutua y sincronización entre procesos",
    third: "Gestión de memoria compartida",
    fourth: "Optimización del uso del procesador",
    answer: 2
  },
  item6: {
    id: "6",
    title: "¿Qué garantiza un semáforo binario inicializado a 1?",
    first: "Acceso simultáneo a recursos compartidos",
    second: "Exclusión mutua para un único proceso en la sección crítica",
    third: "Sincronización entre procesos sin bloqueo",
    fourth: "Eliminación de condiciones de carrera",
    answer: 2
  },
  item7: {
    id: "7",
    title: "¿Qué tipo de semáforo puede almacenar valores mayores a 1?",
    first: "Semáforo binario",
    second: "Semáforo general",
    third: "Semáforo débil",
    fourth: "Semáforo de contador negativo",
    answer: 2
  },
  item8: {
    id: "8",
    title: "¿Qué ocurre si signal(S) se ejecuta en un semáforo binario cuyo valor ya es 1?",
    first: "El semáforo incrementa su valor a 2",
    second: "El semáforo mantiene su valor en 1",
    third: "El sistema lanza una excepción",
    fourth: "El proceso llamante se bloquea",
    answer: 2
  },
  item9: {
    id: "9",
    title: "¿Qué diferencia hay entre semáforos fuertes y débiles?",
    first: "Los fuertes utilizan FIFO para la cola de bloqueados, los débiles no garantizan este orden",
    second: "Los débiles no permiten sincronización entre procesos",
    third: "Los fuertes eliminan condiciones de carrera, los débiles no",
    fourth: "Los fuertes requieren más memoria que los débiles",
    answer: 1
  },
  item10: {
    id: "10",
    title: "¿Qué sucede si un proceso intenta acceder a una sección crítica sin usar semáforos?",
    first: "La ejecución del proceso se detiene automáticamente",
    second: "Se generan condiciones de carrera o inconsistencias",
    third: "El sistema operativo bloquea todos los procesos",
    fourth: "El acceso al recurso compartido queda permanentemente bloqueado",
    answer: 2
  },
  item11: {
    id: "11",
    title: "¿Qué problema puede surgir con el uso incorrecto de semáforos?",
    first: "Inanición de procesos",
    second: "Fragmentación de memoria",
    third: "Incompatibilidad con sistemas distribuidos",
    fourth: "Pérdida de prioridad en procesos críticos",
    answer: 1
  },
  item12: {
    id: "12",
    title: "¿Qué sucede en la operación wait(S) si el valor del semáforo S es mayor a 0?",
    first: "El valor se incrementa",
    second: "El proceso se bloquea",
    third: "El valor se decrementa y el proceso continúa",
    fourth: "El semáforo se reinicia a su valor inicial",
    answer: 3
  },
  item13: {
    id: "13",
    title: "¿Cómo se evita el interbloqueo con semáforos?",
    first: "Usando semáforos binarios exclusivamente",
    second: "Definiendo un orden estricto para la adquisición de recursos",
    third: "Incrementando el valor de todos los semáforos a 1",
    fourth: "Bloqueando todos los procesos simultáneamente",
    answer: 2
  },
  item14: {
    id: "14",
    title: "¿Qué función tiene signal(S) en el contexto del problema productor-consumidor?",
    first: "Aumentar el tamaño del buffer dinámicamente",
    second: "Desbloquear procesos consumidores o productores según corresponda",
    third: "Evitar que el buffer se llene",
    fourth: "Asegurar la exclusión mutua entre consumidores",
    answer: 2
  },
  item15: {
    id: "15",
    title: "¿Qué sucede cuando un semáforo general tiene valor negativo?",
    first: "Los procesos se bloquean hasta que el valor sea positivo",
    second: "El sistema genera un error de ejecución",
    third: "El semáforo prioriza los procesos de mayor prioridad",
    fourth: "Indica la cantidad de procesos bloqueados esperando el recurso",
    answer: 4
  },
  item16: {
    id: "16",
    title: "¿Qué asegura la sincronización entre procesos con semáforos?",
    first: "Que todos los procesos se ejecuten en paralelo",
    second: "Que las operaciones en recursos compartidos sean atómicas",
    third: "Que los procesos sean asignados a la CPU de manera justa",
    fourth: "Que no haya fragmentación de memoria",
    answer: 2
  },
  item17: {
    id: "17",
    title: "¿Qué operación no es válida para un semáforo?",
    first: "init(S, valor)",
    second: "wait(S)",
    third: "signal(S)",
    fourth: "lock(S)",
    answer: 4
  },
  item18: {
    id: "18",
    title: "¿Qué componente del sistema operativo gestiona los semáforos?",
    first: "La tabla de procesos",
    second: "El núcleo del sistema operativo",
    third: "El planificador de tareas",
    fourth: "La tabla de memoria",
    answer: 2
  },
  item19: {
    id: "19",
    title: "¿Qué modelo de sincronización se utiliza en semáforos binarios?",
    first: "FIFO",
    second: "FIFO solo si está bloqueado",
    third: "LIFO",
    fourth: "Aleatorio",
    answer: 1
  },
  item20: {
    id: "20",
    title: "¿Qué problema se resuelve con el uso de semáforos en lectores-escritores?",
    first: "Interbloqueo entre lectores",
    second: "Sincronización y acceso exclusivo entre lectores y escritores",
    third: "Evitar la inanición de procesos lectores",
    fourth: "Asegurar la equidad entre escritores concurrentes",
    answer: 2
  }
};
