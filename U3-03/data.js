const data = {
  item1: {
    id: "1",
    title: "¿Qué característica tiene un hilo en comparación con un proceso?",
    first: "Tiene su propio espacio de direcciones virtuales",
    second: "Es independiente del estado del proceso padre",
    third: "Comparte el espacio de direcciones del proceso",
    fourth: "Tiene una pila compartida entre todos los hilos",
    answer: 3
  },
  item2: {
    id: "2",
    title: "¿Qué ventaja ofrece un sistema multihilo?",
    first: "Mayor aislamiento entre tareas concurrentes",
    second: "Menor tiempo de creación y cambio de contexto",
    third: "Elimina la necesidad de sincronización",
    fourth: "Mayor protección de memoria entre hilos",
    answer: 2
  },
  item3: {
    id: "3",
    title: "¿Qué sucede si un hilo modifica una variable global del proceso?",
    first: "Solo afecta al hilo que hizo la modificación",
    second: "Todos los hilos del proceso ven el cambio",
    third: "Se genera una excepción de sincronización",
    fourth: "La variable se bloquea hasta que se libere el recurso",
    answer: 2
  },
  item4: {
    id: "4",
    title: "¿Qué estado no es típico de un hilo?",
    first: "Ejecutando",
    second: "Bloqueado",
    third: "Listo",
    fourth: "Suspendido",
    answer: 4
  },
  item5: {
    id: "5",
    title: "¿Qué sucede cuando se bloquea un hilo en un sistema con ULT?",
    first: "El núcleo selecciona otro hilo del mismo proceso",
    second: "Todo el proceso se bloquea",
    third: "El hilo se mueve a la cola de listos",
    fourth: "El sistema operativo reinicia el proceso",
    answer: 2
  },
  item6: {
    id: "6",
    title: "¿Qué ventaja tiene el modelo de hilos a nivel de usuario (ULT)?",
    first: "Reduce la sobrecarga de cambio a modo kernel",
    second: "Permite aprovechar múltiples procesadores",
    third: "Evita la necesidad de sincronización entre hilos",
    fourth: "Aumenta la seguridad en el acceso a datos compartidos",
    answer: 1
  },
  item7: {
    id: "7",
    title: "¿Qué desventaja tiene el modelo de hilos a nivel de núcleo (KLT)?",
    first: "No permite ejecutar hilos en paralelo",
    second: "Necesita cambios a modo kernel para la planificación",
    third: "Solo soporta un hilo por proceso",
    fourth: "No permite sincronización entre hilos del mismo proceso",
    answer: 2
  },
  item8: {
    id: "8",
    title: "¿Qué modelo combina las ventajas de ULT y KLT?",
    first: "El modelo híbrido",
    second: "El modelo 1:1",
    third: "El modelo M:M",
    fourth: "El modelo de pila compartida",
    answer: 3
  },
  item9: {
    id: "9",
    title: "¿Qué ocurre al finalizar un hilo?",
    first: "Se libera su contexto y pila de ejecución",
    second: "Se bloquea hasta que termine el proceso padre",
    third: "Se guarda su estado en el PCB del proceso",
    fourth: "El sistema operativo elimina el proceso completo",
    answer: 1
  },
  item10: {
    id: "10",
    title: "¿Qué ventaja tiene el uso de hilos en sistemas multiprocesador?",
    first: "Los hilos pueden ejecutarse en paralelo",
    second: "Elimina la necesidad de sincronización de datos",
    third: "Los hilos no comparten recursos del proceso",
    fourth: "Evita el bloqueo en operaciones de E/S",
    answer: 1
  },
  item11: {
    id: "11",
    title: "¿Qué componente gestiona los hilos en un sistema con KLT?",
    first: "La biblioteca de hilos",
    second: "El núcleo del sistema operativo",
    third: "El programador de aplicaciones",
    fourth: "El despachador de hardware",
    answer: 2
  },
  item12: {
    id: "12",
    title: "¿Qué define el modelo 1:1 en hilos?",
    first: "Un hilo de usuario mapeado a un hilo de núcleo",
    second: "Un proceso mapeado a múltiples hilos",
    third: "Múltiples hilos de usuario mapeados a un núcleo",
    fourth: "Un núcleo dedicado a un hilo por proceso",
    answer: 1
  },
  item13: {
    id: "13",
    title: "¿Qué técnica mejora el rendimiento al usar hilos?",
    first: "Evitar el cambio de contexto",
    second: "Compartir datos a través de variables globales",
    third: "Reducir el número de hilos en un proceso",
    fourth: "Usar sincronización y exclusión mutua adecuadas",
    answer: 4
  },
  item14: {
    id: "14",
    title: "¿Qué tipo de hilo puede bloquearse sin afectar a otros hilos del mismo proceso?",
    first: "Hilo de nivel de usuario",
    second: "Hilo de nivel de núcleo",
    third: "Hilo híbrido",
    fourth: "Hilo con pila compartida",
    answer: 2
  },
  item15: {
    id: "15",
    title: "¿Qué permite la biblioteca de hilos en un sistema con ULT?",
    first: "Crear y gestionar hilos sin intervención del núcleo",
    second: "Asignar cada hilo a un procesador específico",
    third: "Evitar el bloqueo en operaciones de E/S",
    fourth: "Sincronizar hilos a través del núcleo",
    answer: 1
  },
  item16: {
    id: "16",
    title: "¿Qué sucede si un hilo de nivel de usuario realiza una llamada bloqueante?",
    first: "El núcleo mueve el hilo a la cola de bloqueados",
    second: "Todo el proceso se bloquea",
    third: "El hilo se mueve a la cola de listos",
    fourth: "El sistema crea un nuevo hilo para continuar",
    answer: 2
  },
  item17: {
    id: "17",
    title: "¿Qué describe mejor un hilo en estado listo?",
    first: "Es el único hilo ejecutándose en el sistema",
    second: "Está esperando ser asignado al procesador",
    third: "Se encuentra bloqueado por una operación de E/S",
    fourth: "Ha finalizado su ejecución pero no ha sido eliminado",
    answer: 2
  },
  item18: {
    id: "18",
    title: "¿Qué estado adquiere un hilo cuando se le asigna la CPU?",
    first: "Ejecutando",
    second: "Listo",
    third: "Bloqueado",
    fourth: "Suspendido",
    answer: 1
  },
  item19: {
    id: "19",
    title: "¿Qué ventaja tiene la planificación a nivel de hilo?",
    first: "Elimina la necesidad de exclusión mutua",
    second: "Permite ejecutar hilos en paralelo en múltiples núcleos",
    third: "Aumenta el aislamiento entre procesos",
    fourth: "Reduce la complejidad de los modelos de hilos",
    answer: 2
  },
  item20: {
    id: "20",
    title: "¿Qué modelo de hilos puede aprovechar mejor un sistema multiprocesador?",
    first: "ULT (User Level Threads)",
    second: "Modelo híbrido",
    third: "KLT (Kernel Level Threads)",
    fourth: "Modelo M:1",
    answer: 3
  }
};
