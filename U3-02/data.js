const data = {
  item1: {
    id: "1",
    title: "¿Qué define el modo privilegiado en una CPU?",
    first: "El acceso limitado a recursos del hardware",
    second: "El acceso completo al repertorio de instrucciones de la CPU",
    third: "La ejecución exclusiva de procesos de usuario",
    fourth: "El control de interrupciones del usuario",
    answer: 2
  },
  item2: {
    id: "2",
    title: "¿Qué sucede si una aplicación intenta ejecutar una instrucción privilegiada en modo usuario?",
    first: "El sistema operativo reinicia el proceso",
    second: "El sistema operativo mata el proceso",
    third: "El hardware ignora la instrucción",
    fourth: "El kernel convierte la instrucción en una llamada al sistema",
    answer: 2
  },
  item3: {
    id: "3",
    title: "¿Qué elementos típicos gestiona el sistema operativo al crear un proceso?",
    first: "La tabla de memoria y la tabla de dispositivos",
    second: "El PCB, el espacio en memoria y los enlaces",
    third: "Las interrupciones y los accesos concurrentes",
    fourth: "Los descriptores de recursos compartidos",
    answer: 2
  },
  item4: {
    id: "4",
    title: "¿Qué evento no provoca un cambio a modo kernel?",
    first: "Una instrucción normal de usuario",
    second: "Una interrupción de hardware",
    third: "Una llamada al sistema",
    fourth: "El fin de una operación de E/S",
    answer: 1
  },
  item5: {
    id: "5",
    title: "¿Qué información almacena el PSW (Program Status Word)?",
    first: "La dirección de memoria del PCB",
    second: "El estado del procesador y el modo de ejecución",
    third: "Las estadísticas de uso del sistema",
    fourth: "Los permisos de acceso del proceso actual",
    answer: 2
  },
  item6: {
    id: "6",
    title: "¿Qué transición ocurre cuando el procesador detecta una interrupción?",
    first: "De listo a ejecutando",
    second: "Modo usuario a modo kernel",
    third: "Modo kernel a modo usuario",
    fourth: "De ejecutando a bloqueado",
    answer: 2
  },
  item7: {
    id: "7",
    title: "¿Qué acción se realiza durante el cambio de proceso?",
    first: "El hardware selecciona aleatoriamente el siguiente proceso",
    second: "El sistema operativo salva el contexto del proceso actual",
    third: "El proceso entrante ejecuta su instrucción final",
    fourth: "El proceso actual pasa automáticamente a terminado",
    answer: 2
  },
  item8: {
    id: "8",
    title: "¿Qué función tiene el dispatcher en la gestión de procesos?",
    first: "Realizar el cambio de contexto entre procesos",
    second: "Determinar la prioridad de los procesos",
    third: "Liberar recursos asignados a procesos terminados",
    fourth: "Seleccionar qué proceso es el siguiente en la cola",
    answer: 1
  },
  item9: {
    id: "9",
    title: "¿Qué evento dispara un cambio de proceso?",
    first: "Una operación exitosa de memoria virtual",
    second: "Una interrupción de teclado",
    third: "El agotamiento del quantum asignado",
    fourth: "La ejecución de una instrucción privilegiada",
    answer: 3
  },
  item10: {
    id: "10",
    title: "¿Qué sucede al finalizar una rutina de interrupción?",
    first: "El sistema selecciona un nuevo proceso automáticamente",
    second: "El proceso interrumpido pasa a terminado",
    third: "El dispatcher libera recursos del proceso interrumpido",
    fourth: "El sistema cambia de modo kernel a modo usuario",
    answer: 4
  },
  item11: {
    id: "11",
    title: "¿Qué ocurre si no hay interrupciones pendientes tras un ciclo de instrucción?",
    first: "El hardware entra en estado de reposo",
    second: "El sistema operativo realiza una auditoría",
    third: "El procesador lanza una excepción general",
    fourth: "Se ejecuta el siguiente ciclo de instrucción",
    answer: 4
  },
  item12: {
    id: "12",
    title: "¿Qué define el cambio de modo en una CPU?",
    first: "El cambio entre procesos de usuario y del sistema",
    second: "La modificación de los bits del PSW según el evento",
    third: "El inicio de una nueva cola de planificación",
    fourth: "El almacenamiento del contexto de memoria del proceso",
    answer: 2
  },
  item13: {
    id: "13",
    title: "¿Qué ventaja tiene ejecutar el núcleo fuera de los procesos?",
    first: "Elimina la necesidad de rutinas de kernel dedicadas",
    second: "Permite mayor modularidad del sistema operativo",
    third: "Mejora el rendimiento de los sistemas distribuidos",
    fourth: "Evita la saturación de las tablas de procesos",
    answer: 2
  },
  item14: {
    id: "14",
    title: "¿Qué información inicializa el sistema al crear un proceso?",
    first: "El identificador único (PID) y la prioridad",
    second: "La tabla de buffers y el contexto de usuario",
    third: "Los enlaces de red y los datos del programa",
    fourth: "Los permisos de usuario y las estadísticas de uso",
    answer: 1
  },
  item15: {
    id: "15",
    title: "¿Qué ocurre cuando el quantum asignado a un proceso se agota?",
    first: "El proceso genera una excepción por tiempo excedido",
    second: "El proceso pasa a terminado",
    third: "El proceso entra en espera de recursos",
    fourth: "El proceso se mueve a la cola de listos",
    answer: 4
  },
  item16: {
    id: "16",
    title: "¿Qué sucede si un proceso intenta acceder a memoria restringida?",
    first: "El sistema operativo mata el proceso",
    second: "El hardware lanza una interrupción al sistema operativo",
    third: "El acceso es redirigido a memoria secundaria",
    fourth: "El proceso cambia automáticamente a modo kernel",
    answer: 2
  },
  item17: {
    id: "17",
    title: "¿Qué describe mejor el modo usuario?",
    first: "Permite ejecutar cualquier instrucción del repertorio de la CPU",
    second: "Restringe el acceso a la memoria virtual",
    third: "Limita el acceso directo a recursos críticos del sistema",
    fourth: "Es el modo con mayor prioridad del procesador",
    answer: 3
  },
  item18: {
    id: "18",
    title: "¿Qué función tienen las interrupciones de reloj?",
    first: "Controlar el uso del procesador por los procesos",
    second: "Actualizar el estado de la memoria principal",
    third: "Realizar auditorías periódicas del sistema",
    fourth: "Sincronizar las operaciones de red",
    answer: 1
  },
  item19: {
    id: "19",
    title: "¿Qué ventaja tiene separar el núcleo del sistema operativo en sistemas multiprocesador?",
    first: "Reduce el número de interrupciones por proceso",
    second: "Permite que los procesos compartan la memoria virtual",
    third: "Facilita la programación modular del sistema",
    fourth: "Aumenta la prioridad de las operaciones críticas",
    answer: 3
  },
  item20: {
    id: "20",
    title: "¿Qué acción realiza el kernel al recibir una interrupción de E/S?",
    first: "Reanuda el proceso interrumpido automáticamente",
    second: "Gestiona el evento y decide si cambiar de proceso",
    third: "Bloquea todos los procesos en ejecución",
    fourth: "Actualiza la tabla de memoria del proceso interrumpido",
    answer: 2
  }
};
