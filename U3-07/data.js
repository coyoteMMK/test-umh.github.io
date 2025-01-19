const data = {
  item1: {
    id: "1",
    title: "¿Qué ventaja ofrece el paso de mensajes sobre los semáforos y monitores?",
    first: "Permite la comunicación en sistemas distribuidos",
    second: "Elimina la necesidad de exclusión mutua",
    third: "Garantiza una ejecución más rápida en sistemas monoprocesador",
    fourth: "Requiere menos recursos de hardware",
    answer: 1
  },
  item2: {
    id: "2",
    title: "¿Qué primitiva se utiliza para enviar un mensaje en sistemas de paso de mensajes?",
    first: "receive(mensaje)",
    second: "send(destino, mensaje)",
    third: "send(buzón, mensaje)",
    fourth: "send(proceso, mensaje, tiempo)",
    answer: 2
  },
  item3: {
    id: "3",
    title: "¿Qué tipo de sincronización implica un envío bloqueante y recepción bloqueante?",
    first: "Comunicación asíncrona",
    second: "Comunicación síncrona o rendez-vous",
    third: "Sincronización débil",
    fourth: "Exclusión mutua implícita",
    answer: 2
  },
  item4: {
    id: "4",
    title: "¿Qué problema puede surgir con un envío no bloqueante?",
    first: "Condiciones de carrera",
    second: "Reenvíos continuos del emisor",
    third: "Interbloqueo entre procesos",
    fourth: "Pérdida de datos compartidos",
    answer: 2
  },
  item5: {
    id: "5",
    title: "¿Qué tipo de direccionamiento requiere conocer el identificador del proceso receptor?",
    first: "Direccionamiento indirecto",
    second: "Direccionamiento dinámico",
    third: "Direccionamiento directo",
    fourth: "Direccionamiento estático",
    answer: 3
  },
  item6: {
    id: "6",
    title: "¿Qué esquema utiliza buzones para desacoplar emisor y receptor?",
    first: "Direccionamiento directo",
    second: "Direccionamiento indirecto",
    third: "Direccionamiento mixto",
    fourth: "Direccionamiento estático",
    answer: 2
  },
  item7: {
    id: "7",
    title: "¿Qué modelo permite difundir un mensaje a múltiples receptores?",
    first: "Modelo uno a uno",
    second: "Modelo uno a muchos",
    third: "Modelo muchos a uno",
    fourth: "Modelo muchos a muchos",
    answer: 2
  },
  item8: {
    id: "8",
    title: "¿Qué formato permite mensajes con cabecera y cuerpo separados?",
    first: "Mensajes de longitud fija",
    second: "Mensajes de longitud variable",
    third: "Mensajes con formato rígido",
    fourth: "Mensajes con formato distribuido",
    answer: 2
  },
  item9: {
    id: "9",
    title: "¿Qué disciplina de cola permite priorizar mensajes urgentes?",
    first: "FIFO",
    second: "Prioridades",
    third: "Selección manual",
    fourth: "Orden aleatorio",
    answer: 2
  },
  item10: {
    id: "10",
    title: "¿Qué asegura un sistema de paso de mensajes en Unix al usar tuberías con nombre?",
    first: "Comunicación entre procesos relacionados",
    second: "Comunicación entre procesos no relacionados",
    third: "Sincronización implícita",
    fourth: "Bloqueo de todos los procesos en la cola",
    answer: 2
  },
  item11: {
    id: "11",
    title: "¿Qué función realiza msgget en sistemas Unix?",
    first: "Recibe un mensaje de la cola",
    second: "Envía un mensaje a la cola",
    third: "Crea o accede a una cola de mensajes",
    fourth: "Elimina una cola de mensajes",
    answer: 3
  },
  item12: {
    id: "12",
    title: "¿Qué técnica es común en sistemas distribuidos para evitar pérdida de mensajes?",
    first: "Dirección indirecta",
    second: "Confirmaciones o acuses de recibo (ACK)",
    third: "Uso exclusivo de buzones estáticos",
    fourth: "Formato de mensaje con cabecera redundante",
    answer: 2
  },
  item13: {
    id: "13",
    title: "¿Qué ventaja tiene el modelo de paso de mensajes con buzones dinámicos?",
    first: "Mayor rendimiento en sistemas monoprocesador",
    second: "Asociación flexible entre emisores y receptores",
    third: "Elimina la necesidad de exclusión mutua",
    fourth: "Minimiza la latencia en la comunicación",
    answer: 2
  },
  item14: {
    id: "14",
    title: "¿Qué problema puede surgir si una recepción bloqueante espera un mensaje que no llega?",
    first: "Interbloqueo",
    second: "Inanición",
    third: "Bloqueo indefinido",
    fourth: "Reenvíos continuos",
    answer: 3
  },
  item15: {
    id: "15",
    title: "¿Qué modelo de sincronización utiliza sockets en Unix?",
    first: "Sincronización directa",
    second: "Sincronización distribuida",
    third: "Paso de mensajes mediante flujo de datos",
    fourth: "Exclusión mutua global",
    answer: 3
  },
  item16: {
    id: "16",
    title: "¿Qué esquema permite seleccionar mensajes específicos en una cola?",
    first: "FIFO",
    second: "Prioridades",
    third: "Selección por tipo",
    fourth: "Selección dinámica",
    answer: 3
  },
  item17: {
    id: "17",
    title: "¿Qué problema puede solucionar el uso de una cola de mensajes con prioridad?",
    first: "Reenvíos continuos",
    second: "Inanición de procesos de baja prioridad",
    third: "Bloqueos en las primitivas send y receive",
    fourth: "Pérdida de sincronización",
    answer: 2
  },
  item18: {
    id: "18",
    title: "¿Qué componente gestiona los buzones en un sistema operativo?",
    first: "El kernel del sistema operativo",
    second: "El usuario final",
    third: "La biblioteca de comunicación",
    fourth: "El planificador de tareas",
    answer: 1
  },
  item19: {
    id: "19",
    title: "¿Qué asegura el uso de send no bloqueante y receive bloqueante en exclusión mutua?",
    first: "Evitar condiciones de carrera",
    second: "Incrementar el paralelismo",
    third: "Garantizar sincronización entre procesos",
    fourth: "Eliminar interbloqueos",
    answer: 3
  },
  item20: {
    id: "20",
    title: "¿Qué ventaja tiene el paso de mensajes frente a memoria compartida?",
    first: "Evita condiciones de carrera sin necesidad de exclusión mutua",
    second: "Reduce la sobrecarga en sistemas distribuidos",
    third: "Asegura que todos los procesos compartan la misma memoria",
    fourth: "Minimiza la necesidad de sincronización",
    answer: 1
  }
};
