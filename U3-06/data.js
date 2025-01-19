const data = {
  item1: {
    id: "1",
    title: "¿Qué es un monitor en sistemas operativos?",
    first: "Una estructura del lenguaje de programación para gestionar procesos concurrentes",
    second: "Un mecanismo hardware para controlar interrupciones",
    third: "Un algoritmo para manejar interbloqueos",
    fourth: "Un gestor de memoria compartida en sistemas distribuidos",
    answer: 1
  },
  item2: {
    id: "2",
    title: "¿Qué elemento no es parte de un monitor?",
    first: "Procedimientos exportados",
    second: "Variables locales",
    third: "Operaciones atómicas del núcleo",
    fourth: "Código de inicialización",
    answer: 3
  },
  item3: {
    id: "3",
    title: "¿Qué asegura un monitor respecto a la exclusión mutua?",
    first: "Solo un proceso activo puede ejecutar un procedimiento del monitor a la vez",
    second: "Los procesos bloqueados se desbloquean automáticamente tras un tiempo predefinido",
    third: "Todos los procedimientos se ejecutan en paralelo sin interferencias",
    fourth: "Los recursos compartidos son inaccesibles desde el monitor",
    answer: 1
  },
  item4: {
    id: "4",
    title: "¿Cómo interactúan los procesos activos con un monitor?",
    first: "Usando los procedimientos exportados del monitor",
    second: "Directamente accediendo a las variables del monitor",
    third: "Modificando las colas de procesos manualmente",
    fourth: "Ejecutando operaciones atómicas fuera del monitor",
    answer: 1
  },
  item5: {
    id: "5",
    title: "¿Qué ventaja tiene el uso de monitores frente a semáforos?",
    first: "Permiten mayor modularidad y estructuración del código",
    second: "Eliminan la necesidad de exclusión mutua",
    third: "Garantizan la ejecución paralela de todos los procesos",
    fourth: "Facilitan la depuración de errores hardware",
    answer: 1
  },
  item6: {
    id: "6",
    title: "¿Qué operación bloquea un proceso en una variable de condición dentro de un monitor?",
    first: "resume(C)",
    second: "delay(C)",
    third: "signal(C)",
    fourth: "wait(C)",
    answer: 2
  },
  item7: {
    id: "7",
    title: "¿Qué ocurre cuando un monitor está ocupado y otro proceso intenta acceder?",
    first: "El proceso es eliminado de la cola de listos",
    second: "El proceso es bloqueado en la cola del monitor",
    third: "El monitor devuelve un error de acceso",
    fourth: "El proceso accede simultáneamente al monitor",
    answer: 2
  },
  item8: {
    id: "8",
    title: "¿Qué responsabilidad tiene un monitor respecto a procesos bloqueados?",
    first: "El proceso activo selecciona manualmente a quién desbloquear",
    second: "El monitor decide qué proceso desbloquear cuando se libera",
    third: "El sistema operativo desbloquea procesos sin intervención del monitor",
    fourth: "El monitor ignora los procesos bloqueados",
    answer: 2
  },
  item9: {
    id: "9",
    title: "¿Qué asegura la cola de cortesía en un monitor?",
    first: "Que los procesos bloqueados se desbloqueen en orden FIFO",
    second: "Que los procesos desbloqueados tienen prioridad sobre los nuevos procesos",
    third: "Que el monitor nunca quede vacío",
    fourth: "Que los procesos activos no puedan acceder al monitor",
    answer: 2
  },
  item10: {
    id: "10",
    title: "¿Qué función tiene la operación csignal(C) en un monitor?",
    first: "Bloquear un proceso en la cola de cortesía",
    second: "Desbloquear un proceso en la cola de la condición C",
    third: "Eliminar un proceso de la cola de monitor",
    fourth: "Suspender la ejecución de todos los procesos en el monitor",
    answer: 2
  },
  item11: {
    id: "11",
    title: "¿Qué ventaja ofrece encapsular variables dentro de un monitor?",
    first: "Asegura que las variables sean accesibles desde cualquier parte del sistema",
    second: "Evita el acceso indebido a los datos compartidos",
    third: "Permite a los procesos activos modificar las variables libremente",
    fourth: "Reduce la necesidad de exclusión mutua",
    answer: 2
  },
  item12: {
    id: "12",
    title: "¿Qué condición permite detectar si hay procesos bloqueados en una cola?",
    first: "delay(C)",
    second: "resume(C)",
    third: "empty(C)",
    fourth: "signal(C)",
    answer: 3
  },
  item13: {
    id: "13",
    title: "¿Qué operación desbloquea todos los procesos en una condición?",
    first: "cbroadcast(C)",
    second: "resume(C)",
    third: "csignal(C)",
    fourth: "wait(C)",
    answer: 1
  },
  item14: {
    id: "14",
    title: "¿Qué asegura la operación cnotify(C)?",
    first: "Notifica a todos los procesos en la cola de condición C",
    second: "Bloquea al proceso activo en la cola de cortesía",
    third: "Permite que un proceso entre en el monitor sin restricciones",
    fourth: "Notifica solo al proceso en la cabecera de la cola C",
    answer: 4
  },
  item15: {
    id: "15",
    title: "¿Qué característica tiene un procedimiento exportado de un monitor?",
    first: "Puede ser llamado desde cualquier proceso del sistema",
    second: "Solo puede acceder a variables locales del monitor",
    third: "No puede aceptar parámetros externos",
    fourth: "Se ejecuta siempre en paralelo con otros procedimientos",
    answer: 2
  },
  item16: {
    id: "16",
    title: "¿Qué problema resuelven las variables de condición en un monitor?",
    first: "El interbloqueo entre procesos",
    second: "La sincronización entre procesos concurrentes",
    third: "La fragmentación de memoria",
    fourth: "El acceso directo a variables globales",
    answer: 2
  },
  item17: {
    id: "17",
    title: "¿Qué acción realiza un monitor al desbloquear un proceso?",
    first: "Ejecuta el proceso directamente",
    second: "Lo mueve a la cola de listos del sistema",
    third: "Elimina el proceso de la cola del monitor",
    fourth: "Libera todas las variables locales del monitor",
    answer: 2
  },
  item18: {
    id: "18",
    title: "¿Qué ventaja tiene el modelo de Hoare frente al de Lampson?",
    first: "Mayor rapidez en la ejecución de procesos",
    second: "Menor número de cambios de proceso",
    third: "Mejor gestión de colas de cortesía",
    fourth: "Mayor compatibilidad con sistemas distribuidos",
    answer: 2
  },
  item19: {
    id: "19",
    title: "¿Qué representa un monitor desde el punto de vista de un proceso activo?",
    first: "Una abstracción de un recurso compartido manejado mediante procedimientos",
    second: "Una herramienta para ejecutar procesos en paralelo",
    third: "Un mecanismo exclusivo para manejar interrupciones",
    fourth: "Un gestor de colas en sistemas distribuidos",
    answer: 1
  },
  item20: {
    id: "20",
    title: "¿Qué define la exclusión mutua en monitores?",
    first: "Dos procesos no pueden estar en la misma cola simultáneamente",
    second: "Los procedimientos del monitor solo pueden ser llamados por el núcleo",
    third: "Un proceso puede acceder a todas las variables locales del monitor",
    fourth: "Dos procesos no pueden ejecutar procedimientos del monitor simultáneamente",
    answer: 4
  }
};
