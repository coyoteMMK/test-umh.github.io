const data = {

  item1: {
    id: "1",
    title: "Respecto a IPv6 indica la afirmación errónea",
    first: "El número de campos en la cabecera fija es mayor",
    second: "La cabecera de extensión de encriptación no aparece en IPv4",
    third: "El orden de las cabeceras de extensión es fijo",
    fourth: "Se pueden realizar abreviaturas en la dirección de 128 bits",
    answer: 1,
  },

  item2: {
    id: "2",
    title: "Las direcciones de IPv6 que se utilizan dentro de un mismo enlace o red local para gestión de la propia red se denominan",
    first: "Local de Enlace",
    second: "Globales",
    third: "De bucle interno",
    fourth: "Local de Sitio",
    answer: 1,
  },

  item3: {
    id: "3",
    title: "Indica el número de puerto para el protocolo DNS en escucha en un servidor",
    first: "Ninguna de las anteriores",
    second: "TCP 53",
    third: "UDP 53",
    fourth: "TCP 7",
    answer: 3,
  },

  item4: {
    id: "4",
    title: "Indica cuál de los siguientes NO es un protocolo para la asignación dinámica de direcciones IP",
    first: "RARP",
    second: "BOOTP",
    third: "DHCP",
    fourth: "DNS",
    answer: 4,
  },

  item5: {
    id: "5",
    title: "Indica cuál de los siguientes campos ha sido eliminado de la cabecera fija en IPv6",
    first: "IP origen",
    second: "Offset",
    third: "TTL",
    fourth: "Versión",
    answer: 2,
  },

  item6: {
    id: "6",
    title: "Indica la afirmación errónea respecto al protocolo TCP",
    first: "Los puertos TCP y UDP tienen rangos distintos",
    second: "Asignación de puertos puede ser estática o dinámica",
    third: "Se puede utilizar el mismo puerto para TCP y UDP en el mismo momento",
    fourth: "Al igual que UDP utilizará el mecanismo de puertos",
    answer: 1,
  },

  item7: {
    id: "7",
    title: "Dentro del servicio de correo de internet, el protocolo utilizado para gestionar el correo entrante de otros MTA's se denomina:",
    first: "HTTP",
    second: "POP3",
    third: "SMTP",
    fourth: "NEWS",
    answer: 3,
  },

  item8: {
    id: "8",
    title: "En la terminología NAT, las direcciones que son sujetas a la traducción se denominan.",
    first: "Direcciones Dinámicas",
    second: "Ninguna de las anteriores",
    third: "Direcciones Interiores",
    fourth: "Direcciones Externas",
    answer: 3,
  },

  item9: {
    id: "9",
    title: "La conexión TCP es",
    first: "semi duplex",
    second: "full duplex",
    third: "Ninguna de las anteriores",
    fourth: "half duplex",
    answer: 2,
  },

  item10: {
    id: "10",
    title: "Respecto a FTP, indica la afirmación errónea:",
    first: "Define un sistema de autenticación y autorización",
    second: "Soluciona los problemas de transferencias y gestión de ficheros entre distintas plataformas.",
    third: "Permite un acceso interactivo mediante un conjunto de comandos",
    fourth: "Utiliza el puerto 21 de UTP",
    answer: 4,
  },

  item11: {
    id: "11",
    title: "Respecto al protocolo TCP indica la afirmación errónea:",
    first: "Ninguno de los protocolos IPv4, IPv6 o UDP fiabilidad en la comunicación de datos",
    second: "Proporciona un servicio orientado a la conexión, fiable y ordenado",
    third: "TCP utiliza el mecanismo de puertos.",
    fourth: "TCP ofrece un protocolo de transporte pero sin proporcionar fiabilidad",
    answer: 4,
  },

  item12: {
    id: "12",
    title: "El bit activado en el campo código cuando se requiere el establecimiento de conexión es:",
    first: "SYN",
    second: "PUSH",
    third: "ACK",
    fourth: "URG",
    answer: 1,
  },

  item13: {
    id: "13",
    title: "Cuando un servidor web recibe una petición de dirección que no localiza, devuelve el código:",
    first: "200",
    second: "505",
    third: "400",
    fourth: "404",
    answer: 4,
  },

  item14: {
    id: "14",
    title: "En la estimación del RTT, indica la fórmula utilizada",
    first: "RTT_estimado = (1-alfa)*RTT_estimado + alfa*RTT_medido",
    second: "Ninguna de las anteriores",
    third: "RTT_estimado = alfa*RTT_medido",
    fourth: "RTT_estimado = (1+alfa)*RTT_estimado - alfa*RTT_medido",
    answer: 1,
  },

  item15: {
    id: "15",
    title: "La dirección de bucle local en IPv6 es",
    first: "::127:1",
    second: "127::1",
    third: "::1",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },

  item16: {
    id: "16",
    title: "Los puertos son un mecanismo para",
    first: "Diferenciar direcciones IP",
    second: "Diferenciar diferentes interfaces en un host",
    third: "Diferenciar aplicaciones de red dentro de una misma máquina",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },

  item17: {
    id: "17",
    title: "La utilización de direcciones IPs dinámicas mediante DHCP implica la actualización de la base de datos del servidor:",
    first: "DNS",
    second: "Ninguna de las anteriores",
    third: "Web",
    fourth: "Correo",
    answer: 1,
  },
  
  item18: {
    id: "18",
    title: "Dentro de NAT, la traducción que permite la sobrecarga de direcciones internas globales hace uso de:",
    first: "PAT",
    second: "NAT Estática",
    third: "NAT Dinámica",
    fourth: "Ninguna de las anteriores",
    answer: 1,
  },

  item19: {
    id: "19",
    title: "Respecto a las características de IPv6, indica la afirmación errónea:",
    first: "La cabecera es más pequeña en tamaño que IPv4",
    second: "Utiliza un sistema de encaminamiento jerárquico",
    third: "Permite un formato más flexible de cabecera",
    fourth: "Establece un control de ámbitos",
    answer: 1,
  },

  item20: {
    id: "20",
    title: "Respecto a las generalidades de NAT, indica la afirmación errónea",
    first: "Ninguna de la anteriores",
    second: "Conjunta a NAT, es decir, se definieron simultáneamente.",
    third: "Posterior a NAT.",
    fourth: "Anterior a la definición de NAT",
    answer: 4,
  },

  item21: {
    id: "21",
    title: "Indica la afirmación errónea de UDP",
    first: "Protocolo complejo porque necesita almacenar el estado en emisor y receptor",
    second: "No hay establecimiento de conexión (sin retardo adicional)",
    third: "Tamaño de cabecera reducido",
    fourth: "Permite comunicaciones broadcast/multicast",
    answer: 1,
  },
  
  item22: {
    id: "22",
    title: "La forma de especificar un objeto o un recurso en Internet se denomina:",
    first: "Ninguna de las anteriores",
    second: "WWW",
    third: "LINK",
    fourth: "URL",
    answer: 4,
  },

  item23: {
    id: "23",
    title: "El ámbito relacionado con intranets y redes privadas es",
    first: "De sitio",
    second: "Global",
    third: "Ninguna de las anteriores",
    fourth: "De enlace",
    answer: 1,
  },

  item24: {
    id: "24",
    title: "En el protocolo DHCP, el primer mensaje que manda el cliente DHCP es:",
    first: "DHCPREQUEST",
    second: "Ninguna de las anteriores",
    third: "DHCPOFFER",
    fourth: "DHCPDISCOVER",
    answer: 4,
  },

  item25: {
    id: "25",
    title: "Si necesitamos enviar información binaria en un correo (no ASCII), necesitamos hacer uso de:",
    first: "Ninguna de las anteriores",
    second: "IMAP",
    third: "MIME",
    fourth: "PGP",
    answer: 3,
  },

  item26: {
    id: "26",
    title: "La longitud de la cabecera básica de IPv6 es",
    first: "Ninguna de las anteriores",
    second: "20 bytes",
    third: "10 palabras de 32 bits",
    fourth: "5 palabras de 32 bits",
    answer: 3,
  },

  item27: {
    id: "27",
    title: "En el formato de un segmento TCP, indica la afirmación errónea:",
    first: "Puerto fuente y puerto destino identifican a las aplicaciones, en los dos extremos de la conexión",
    second: "Número de secuencia identifica la secuencia del primer octeto de datos del segmento en el flujo de datos del emisor.",
    third: "Número de reconocimiento indica cual es el siguiente octeto de datos que se espera recibir",
    fourth: "La longitud de la cabecera (longc) se expresa en bytes",
    answer: 4,
  },

  item28: {
    id: "28",
    title: "Indica cuál de las siguientes no ha sido una motivación para el desarrollo de IPv6",
    first: "Escasez de direcciones",
    second: "Tablas de encaminamiento cada vez más grandes en IPv4",
    third: "Todas son razones que han motivado la aparición de IPv6",
    fourth: "Asignación de direcciones no coordinada de IPv4",
    answer: 3,
  },

  item29: {
    id: "29",
    title: "En UDP, el responsable de la corrección de los errores es:",
    first: "El nivel de transporte",
    second: "El nivel de aplicación",
    third: "TCP",
    fourth: "El nivel de red",
    answer: 2,
  },

  item30: {
    id: "30",
    title: "En TCP, el flujo de datos es tratado como una secuencia de",
    first: "Bytes",
    second: "Bits",
    third: "Ninguna de las anteriores",
    fourth: "Segmentos",
    answer: 1,
  },

  item31: {
    id: "31",
    title: "En una conexión TCP, ante una llegada en orden de un segmento, donde no hay huecos y todo está previamente reconocido",
    first: "Envío de un ACK duplicado, indicando el número de secuencia esperado",
    second: "Envío inmediato de un ACK, si el segmento comienza en la parte baja del hueco",
    third: "Enviar inmediatamente un ACK acumulativo.",
    fourth: "ACK retrasado. Espera 500ms al siguiente segmento. Si no se genera, envía ACK",
    answer: 4,
  },
  
  
  item32: {
    id: "32",
    title: "Respecto al formato de trama de UDP, indica la afirmación errónea:",
    first: "Los puertos de origen y destino son obligatorios",
    second: "Los mensajes UDP se dividen en dos partes: cabecera y campo de datos.",
    third: "La longitud incluye todo el mensaje",
    fourth: "El checksum es opcional. Cuando no se emplea se pone a cero.",
    answer: 1,
  },

  item33: {
    id: "33",
    title: "En un servidor DNS, indica cómo se denomina el tipo de solicitud más eficiente de los vistos:",
    first: "Solicitud Directa",
    second: "Ninguna de las anteriores",
    third: "Solicitud Iterativa",
    fourth: "Solicitud Recursiva",
    answer: 3,
  },

  item34: {
    id: "34",
    title: "Tanto el protocolo Telnet, y SMTP entre otros utilizan el formato de codificación denominado:",
    first: "UTF-8",
    second: "NVT",
    third: "ASCII-8",
    fourth: "Ninguna de las anteriores",
    answer: 2,
  },

  item35: {
    id: "35",
    title: "En los números de secuencia y reconocimiento de un segmento TCP, indica la afirmación errónea:",
    first: "Un reconocimiento de un byte posterior reconoce todos los bytes anteriores",
    second: "El número de secuencia de envío se corresponde con el número de secuencia del primer octeto en el campo de datos del segmento",
    third: "El número de secuencia de envío se corresponde con el número de secuencia del primer octeto en el campo de datos del segmento",
    fourth: "Todas son correctas",
    answer: 4,
  },

  item36: {
    id: "36",
    title: "Respecto al temporizador en una conexión TCP, indica la afirmación errónea:",
    first: "Si se elige un Timeout demasiado corto tendríamos Timeouts prematuros",
    second: "Debe ser un valor mayor que RTT",
    third: "Como el RTT es estable a lo largo de una conexión TCP, este parámetro se define en el establecimiento de la conexión",
    fourth: "Si se elige un Timeout demasiado largo tendríamos una lenta reacción a los segmentos perdidos",
    answer: 3,
  },

  item37: {
    id: "37",
    title: "Indica cuál de los siguientes no es un ámbito válido para direcciones de IPv6",
    first: "AnyCast",
    second: "BroadCast",
    third: "Unicast",
    fourth: "Multicast",
    answer: 2,
  },

  item38: {
    id: "38",
    title: "El ámbito del protocolo de transporte es",
    first: "Ninguna de las anteriores",
    second: "Host origen-host destino",
    third: "Host-router",
    fourth: "Router a router",
    answer: 2,
  },

  item39: {
    id: "39",
    title: "El servicio que permite el acceso limitado a la LAN interna desde el exterior mediante el uso de puertos se denomina:",
    first: "Port Filtering",
    second: "Port Switching",
    third: "Port Forwarding",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },

  item40: {
    id: "40",
    title: "Si deseamos crear un dominio DNS de tipo alias, lo haremos mediante un registro de tipo",
    first: "CNAME",
    second: "A",
    third: "Ninguna de las anteriores",
    fourth: "MX",
    answer: 1,
  },
};
