const data = {
  item1: {
    id: "1",
    title: "¿Cuál es el objetivo principal de la planificación a corto plazo?",
    first: "Optimizar el uso de recursos y evitar la sobrecarga del sistema",
    second: "Controlar el grado de multiprogramación",
    third: "Decidir qué procesos se admiten al sistema",
    fourth: "Minimizar el tiempo de espera en memoria secundaria",
    answer: 1
  },
  item2: {
    id: "2",
    title: "¿Qué ocurre en un sistema con planificación FCFS?",
    first: "Los procesos se ejecutan en orden de prioridad",
    second: "La CPU selecciona el proceso que lleva más tiempo esperando",
    third: "Los procesos se ejecutan en el orden en el que llegan a la cola",
    fourth: "Los procesos interactivos tienen mayor prioridad",
    answer: 3
  },
  item3: {
    id: "3",
    title: "¿Qué significa el término 'preemptivo' en planificación de procesos?",
    first: "Los procesos no pueden ser interrumpidos hasta que terminen",
    second: "Los procesos pueden ser interrumpidos para asignar la CPU a otro proceso",
    third: "Se asigna prioridad a los procesos más antiguos",
    fourth: "Los procesos interactivos tienen prioridad sobre los de lotes",
    answer: 2
  },
  item4: {
    id: "4",
    title: "¿Qué algoritmo asegura el tiempo medio de respuesta más bajo?",
    first: "FCFS (First Come, First Served)",
    second: "SRTN (Shortest Remaining Time Next)",
    third: "RR (Round Robin)",
    fourth: "Prioridades no preemptivas",
    answer: 2
  },
  item5: {
    id: "5",
    title: "¿Qué característica tiene el algoritmo Round Robin?",
    first: "Es un algoritmo no preemptivo",
    second: "Utiliza un quantum para alternar entre procesos",
    third: "Prioriza procesos de mayor tiempo de ejecución",
    fourth: "Solo funciona en sistemas monoprocesador",
    answer: 2
  },
  item6: {
    id: "6",
    title: "¿Qué ventaja tiene el algoritmo de prioridades con realimentación?",
    first: "Es sencillo de implementar",
    second: "Resuelve el problema de inanición de procesos",
    third: "Garantiza el mínimo tiempo de espera",
    fourth: "No requiere estimaciones del tiempo de ejecución",
    answer: 2
  },
  item7: {
    id: "7",
    title: "¿Qué ocurre en la planificación por colas multinivel?",
    first: "Todos los procesos se ejecutan en una única cola",
    second: "Los procesos interactivos tienen prioridad sobre los procesos por lotes",
    third: "Los procesos se mueven entre colas según su tiempo de ejecución",
    fourth: "Se utiliza un único algoritmo para todos los niveles",
    answer: 2
  },
  item8: {
    id: "8",
    title: "¿Qué tipo de procesos se priorizan en sistemas interactivos?",
    first: "Procesos por lotes",
    second: "Procesos de CPU intensiva",
    third: "Procesos de usuario con alta prioridad",
    fourth: "Procesos interactivos con bajo tiempo de respuesta",
    answer: 4
  },
  item9: {
    id: "9",
    title: "¿Qué criterio busca maximizar el número de procesos completados por unidad de tiempo?",
    first: "Productividad (throughput)",
    second: "Tiempo de espera",
    third: "Tiempo de retorno",
    fourth: "Equidad",
    answer: 1
  },
  item10: {
    id: "10",
    title: "¿Qué desventaja tiene el algoritmo FCFS?",
    first: "Es complejo de implementar",
    second: "Favorece procesos largos sobre los cortos",
    third: "Requiere estimaciones de tiempo de ejecución",
    fourth: "Genera demasiadas interrupciones",
    answer: 2
  },
  item11: {
    id: "11",
    title: "¿Qué ocurre cuando un proceso termina en una planificación Round Robin?",
    first: "Se elimina de la cola y se asigna la CPU al siguiente proceso",
    second: "La CPU permanece inactiva hasta que llegue un nuevo proceso",
    third: "El proceso se mueve a una cola de prioridad más baja",
    fourth: "El quantum se redistribuye entre los procesos restantes",
    answer: 1
  },
  item12: {
    id: "12",
    title: "¿Qué caracteriza al algoritmo SRTN?",
    first: "Es no preemptivo",
    second: "Selecciona el proceso con menor tiempo restante",
    third: "Asigna un quantum fijo a cada proceso",
    fourth: "Funciona solo con procesos interactivos",
    answer: 2
  },
  item13: {
    id: "13",
    title: "¿Qué objetivo tiene la planificación a largo plazo?",
    first: "Optimizar el uso de la CPU",
    second: "Controlar el grado de multiprogramación",
    third: "Minimizar el tiempo de respuesta",
    fourth: "Garantizar que los procesos interactivos tengan prioridad",
    answer: 2
  },
  item14: {
    id: "14",
    title: "¿Qué objetivo busca la equidad en la planificación de procesos?",
    first: "Priorizar procesos interactivos",
    second: "Garantizar que todos los procesos sean tratados de forma justa",
    third: "Minimizar el tiempo de retorno",
    fourth: "Optimizar la productividad",
    answer: 2
  },
  item15: {
    id: "15",
    title: "¿Qué algoritmo utiliza múltiples colas con diferentes prioridades?",
    first: "SRTN",
    second: "Round Robin",
    third: "MLQ (Multi-Level Queue)",
    fourth: "FCFS",
    answer: 3
  },
  item16: {
    id: "16",
    title: "¿Qué ocurre si el quantum en Round Robin es demasiado pequeño?",
    first: "Los procesos interactivos sufren inanición",
    second: "Se priorizan los procesos de CPU intensiva",
    third: "El tiempo de respuesta aumenta drásticamente",
    fourth: "Se genera una sobrecarga por cambios de contexto",
    answer: 4
  },
  item17: {
    id: "17",
    title: "¿Qué métrica mide el intervalo entre el lanzamiento y la finalización de un proceso?",
    first: "Tiempo de respuesta",
    second: "Tiempo de espera",
    third: "Tiempo de retorno",
    fourth: "Productividad",
    answer: 3
  },
  item18: {
    id: "18",
    title: "¿Qué característica tiene el algoritmo de planificación por prioridades?",
    first: "No permite interrupciones",
    second: "Prioriza procesos según su antigüedad",
    third: "Puede causar inanición en procesos de baja prioridad",
    fourth: "Siempre utiliza colas FIFO",
    answer: 3
  },
  item19: {
    id: "19",
    title: "¿Qué ventaja tiene la planificación a medio plazo?",
    first: "Minimiza la fragmentación externa",
    second: "Permite gestionar la memoria swap eficientemente",
    third: "Optimiza el tiempo de retorno de los procesos",
    fourth: "Garantiza la exclusión mutua entre procesos",
    answer: 2
  },
  item20: {
    id: "20",
    title: "¿Qué ocurre si no hay planificación a corto plazo en un sistema operativo?",
    first: "Los procesos se ejecutan en paralelo sin restricciones",
    second: "La CPU puede permanecer inactiva aunque haya procesos listos",
    third: "Todos los procesos terminan simultáneamente",
    fourth: "Los recursos del sistema se asignan de manera aleatoria",
    answer: 2
  }
};
