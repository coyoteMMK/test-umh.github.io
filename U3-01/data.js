const data = {
  item1: {
    id: "1",
    title: "¿Qué es un proceso en el contexto de sistemas operativos?",
    first: "Un programa que actúa como intermediario entre el hardware y el usuario",
    second: "Un programa en ejecución en un computador",
    third: "Un conjunto de recursos asignados a un programa",
    fourth: "Una tabla de datos en memoria",
    answer: 2
  },
  item2: {
    id: "2",
    title: "¿Qué información no se encuentra típicamente en un PCB?",
    first: "Identificador único del proceso",
    second: "Estado actual del proceso",
    third: "Datos del contexto del procesador",
    fourth: "Código fuente del programa",
    answer: 4
  },
  item3: {
    id: "3",
    title: "¿Qué elemento se usa para almacenar datos intermedios durante una llamada a procedimientos?",
    first: "El PCB",
    second: "La pila asociada al proceso",
    third: "El contador de programa",
    fourth: "La tabla de dispositivos",
    answer: 2
  },
  item4: {
    id: "4",
    title: "¿Cuál de las siguientes no es una estructura de control utilizada por el sistema operativo?",
    first: "Tablas de procesos",
    second: "Tablas de memoria",
    third: "Tablas de recursos compartidos",
    fourth: "Tablas de dispositivos",
    answer: 3
  },
  item5: {
    id: "5",
    title: "¿Qué define el estado de un proceso?",
    first: "Su prioridad asignada",
    second: "Su posición en memoria virtual",
    third: "Su interacción con el sistema operativo y los recursos",
    fourth: "Su contador de programa",
    answer: 3
  },
  item6: {
    id: "6",
    title: "¿Qué ocurre cuando un proceso pasa al estado de bloqueado?",
    first: "Es eliminado de la cola de listos",
    second: "Es llevado a memoria secundaria",
    third: "Es suspendido permanentemente",
    fourth: "Es puesto en espera hasta que ocurra un evento",
    answer: 4
  },
  item7: {
    id: "7",
    title: "¿Qué describe mejor al modelo de cinco estados de los procesos?",
    first: "Incluye los estados Nuevo, Listo, Ejecutando, Bloqueado y Terminado",
    second: "Define cómo se eliminan los procesos",
    third: "Describe el uso de memoria virtual",
    fourth: "Se aplica solo a sistemas distribuidos",
    answer: 1
  },
  item8: {
    id: "8",
    title: "¿Qué elemento del PCB permite al sistema operativo reanudar un proceso tras una interrupción?",
    first: "El identificador del proceso (PID)",
    second: "Los datos de contexto del procesador",
    third: "Los punteros de pila",
    fourth: "La tabla de memoria",
    answer: 2
  },
  item9: {
    id: "9",
    title: "¿Qué función tiene el planificador a corto plazo?",
    first: "Seleccionar qué procesos se cargan en memoria principal",
    second: "Asignar la CPU a los procesos en la cola de listos",
    third: "Gestionar la memoria virtual de los procesos",
    fourth: "Monitorear los procesos bloqueados",
    answer: 2
  },
  item10: {
    id: "10",
    title: "¿Qué característica distingue al estado de suspendido?",
    first: "El proceso está listo para ejecutarse inmediatamente",
    second: "El proceso ha sido enviado a memoria secundaria",
    third: "El proceso ha finalizado su ejecución",
    fourth: "El proceso está en espera de una operación de E/S",
    answer: 2
  },
  item11: {
    id: "11",
    title: "¿Qué ocurre si un proceso intenta acceder a una zona de memoria no asignada?",
    first: "El proceso es suspendido",
    second: "El sistema operativo genera un error de protección",
    third: "El proceso se bloquea temporalmente",
    fourth: "El acceso es redirigido automáticamente",
    answer: 2
  },
  item12: {
    id: "12",
    title: "¿Qué transición ocurre cuando un proceso bloqueado se le asigna el recurso esperado?",
    first: "Bloqueado a Ejecutando",
    second: "Listo a Ejecutando",
    third: "Bloqueado a Listo",
    fourth: "Suspendido a Listo",
    answer: 3
  },
  item13: {
    id: "13",
    title: "¿Qué técnica permite mantener múltiples procesos disponibles en memoria principal sin saturarla?",
    first: "Paginación",
    second: "Intercambio o swapping",
    third: "Segmentación",
    fourth: "Conmutación de contexto",
    answer: 2
  },
  item14: {
    id: "14",
    title: "¿Qué acción puede desencadenar la creación de un nuevo proceso?",
    first: "Una solicitud del usuario",
    second: "Un error de hardware",
    third: "Un proceso hijo finaliza su ejecución",
    fourth: "El proceso padre cambia de estado",
    answer: 1
  },
  item15: {
    id: "15",
    title: "¿Qué ocurre si un proceso hijo termina antes que su padre?",
    first: "El proceso hijo queda en estado suspendido",
    second: "El proceso padre lo elimina de la tabla de procesos",
    third: "El sistema operativo almacena temporalmente su información",
    fourth: "El proceso hijo genera un error",
    answer: 3
  },
  item16: {
    id: "16",
    title: "¿Qué función realiza el contador de programa en un proceso?",
    first: "Controla el uso de recursos del proceso",
    second: "Apunta a la siguiente instrucción a ejecutar",
    third: "Indica el tiempo restante del quantum",
    fourth: "Registra los cambios de contexto",
    answer: 2
  },
  item17: {
    id: "17",
    title: "¿Qué se almacena en la pila de llamadas de un proceso?",
    first: "Las variables globales del programa",
    second: "Las referencias cruzadas entre procesos",
    third: "Los parámetros y datos temporales de las funciones",
    fourth: "El código ejecutable del programa",
    answer: 3
  },
  item18: {
    id: "18",
    title: "¿Qué característica define a un proceso en estado de listo?",
    first: "Tiene todos los recursos necesarios y espera la CPU",
    second: "Está a la espera de que termine una operación de E/S",
    third: "Es el único proceso ejecutándose en el sistema",
    fourth: "Es un proceso que ha sido suspendido por el usuario",
    answer: 1
  },
  item19: {
    id: "19",
    title: "¿Qué información contiene típicamente la tabla de dispositivos?",
    first: "El uso de memoria compartida por los dispositivos",
    second: "Los dispositivos asignados a cada proceso",
    third: "El estado actual de los procesos en ejecución",
    fourth: "La estructura jerárquica de los dispositivos",
    answer: 2
  },
  item20: {
    id: "20",
    title: "¿Qué ventaja tiene el uso de tablas enlazadas para procesos?",
    first: "Reducen el uso de memoria principal",
    second: "Facilitan la búsqueda de información entre procesos relacionados",
    third: "Garantizan el acceso secuencial a los datos del proceso",
    fourth: "Evitan la duplicación de procesos en memoria",
    answer: 2
  }
};
