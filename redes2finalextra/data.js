
const data = {

item1: {
    id: "1",
    title: "Respecto a IPv6 indica la afirmación errónea",
    first: "El orden de las cabeceras de extensión es fijo",
    second: "El número de campos en la cabecera básica es mayor",
    third: "Se pueden realizar abreviaturas en la dirección de 128 bits",
    fourth: "La cabecera de extensión de encriptación no aparece en IPv4",
    answer: 2,
  },

  item3: {
    id: "3",
    title: "Indica cuál de los siguientes campos ha sido eliminado de la cabecera fija Ipv4",
    first: "Ver.",
    second: "TTL",
    third: "DF",
    fourth: "IP Origen",
    answer: 3,
  },

  item9: {
    id: "9",
    title: "Indica cuál NO es una característica de FTP",
    first: "Acceso interactivo mediante un conjunto de comandos",
    second: "Modos de transferencia: BINARY o ASCII",
    third: "Incorpora sistemas de autenticación y autorización",
    fourth: "Presenta problemas de transferencias y gestión de ficheros entre distintas plataformas",
    answer: 4,
  },

  item10: {
    id: "10",
    title: "Indica cuál es la afirmación errónea de la aplicación TELNET",
    first: "Utiliza TCP y el puerto 23 en servidor",
    second: "Permite el acceso a una terminal de un sistema UNIX remoto",
    third: "Define un terminal virtual (NVT) basado en ASCII",
    fourth: "La interfaz gráfica está basada en ventanas",
    answer: 4,
  },

  item11: {
    id: "11",
    title: "El servicio DNS dispone de una estructura jerárquica en los nombres de dominio y con unos servidores principales llamados:",
    first: "Servidores Secuenciales",
    second: "Servidores Raíz",
    third: "Servidores de nombres Iterativos",
    fourth: "Ninguna de las anteriores",
    answer: 2,
  },

  item12: {
    id: "12",
    title: "Indica cuál NO es una característica de DHCP",
    first: "Ofrece protección frente a servidores o usuarios maliciosos",
    second: "Podemos incorporar repetidores DHCP (DHCP relays)",
    third: "El servidor DHCP puede actualizar la IP o el DNS con las nuevas direcciones otorgadas",
    fourth: "Todas son características válidas de DHCP",
    answer: 1,
  },

  item13: {
    id: "13",
    title: "Actualmente, el protocolo de asignación dinámica de direcciones IP más utilizado es:",
    first: "RARP",
    second: "BOOTP",
    third: "DHCP",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },

  item14: {
    id: "14",
    title: "Aquellos servidores que pueden atender a varios clientes al mismo tiempo se denominan:",
    first: "Secuenciales",
    second: "Concurrentes",
    third: "Iterativos",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },

  item15: {
    id: "15",
    title: "Respecto al algoritmo de un cliente TCP indica cuál NO es un paso válido:",
    first: "Crear un socket de tipo SOCK_STREAM (SOCKET)",
    second: "Establecer la conexión con el servidor (CONNECT)",
    third: "Protocolo de aplicación. Diálogo entre cliente y servidor basado en mensajes petición/respuesta (READ, WRITE, SEND, RECV)",
    fourth: "Todos son pasos válidos del algoritmo",
    answer: 4,
  },

  item16: {
    id: "16",
    title: "Para envío de datos en sockets no conectados (UDP) utilizaremos:",
    first: "send",
    second: "read",
    third: "sendto",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },

  item17: {
    id: "17",
    title: "Respecto al comando ACCEPT indica la afirmación errónea:",
    first: "Solo se usa en servidores TCP",
    second: "El socket que se pasa como argumento ya tiene definida una asociación",
    third: "Cuando se invoca, bloquea el programa hasta que llegue una petición de conexión sobre el socket",
    fourth: "Si se tienen peticiones encoladas intenta establecer una conexión con la primera",
    answer: 3,
  },

  item18: {
    id: "18",
    title: "Respecto a la función \"connect\", indica la afirmación errónea:",
    first: "Los clientes la utilizan para establecer una conexión (asociación) con un servidor",
    second: "Devuelve un entero indicando el resultado de la operación",
    third: "Crea una conexión definida por: Protocolo, IP Origen, Puerto Origen, IP Destino, Puerto Destino",
    fourth: "Únicamente se puede utilizar para TCP",
    answer: 4,
  },

  item19: {
    id: "19",
    title: "Para asignar una dirección local a un socket utilizaremos:",
    first: "assign",
    second: "bind",
    third: "ping",
    fourth: "Ninguna de las anteriores",
    answer: 2,
  },

  item20: {
    id: "20",
    title: "Respecto a la definición y uso de un socket, indica la afirmación errónea:",
    first: "Es una estructura de datos que permite a las aplicaciones definir una dirección (endpoint) única en Internet",
    second: "Es necesario definir la dirección del socket que se va a utilizar",
    third: "Para la creación de un socket debemos indicar la pila de protocolos de red a utilizar",
    fourth: "La creación de un socket se realiza con la función create_socket()",
    answer: 4,
  },

  item21: {
    id: "21",
    title: "Actualmente, el interfaz de los sockets se utiliza en:",
    first: "Servidores Linux",
    second: "Servidores Windows",
    third: "Sistema Operativo Linux",
    fourth: "Varios Sistemas Operativos (OSX, Linux, MSWin, OS2, etc.)",
    answer: 4,
  },

  item22: {
    id: "22",
    title: "El concepto de socket es aplicable a la siguiente pila de protocolos:",
    first: "TCP/IP",
    second: "NETBIOS",
    third: "IPX/SPX",
    fourth: "A cualquiera de las anteriores u otra diferente, es un concepto genérico",
    answer: 4,
  },

  item23: {
    id: "23",
    title: "Si una aplicación en internet utiliza un puerto generado dinámicamente para crear un socket, se corresponde con una aplicación de tipo:",
    first: "Cliente",
    second: "Servidor",
    third: "Ambas",
    fourth: "Ninguna de las anteriores",
    answer: 1,
  },

  item24: {
    id: "24",
    title: "La extensión de múltiples puntos de acceso como una sola WLAN se denomina:",
    first: "ESS",
    second: "BSS",
    third: "FSS",
    fourth: "Ninguna de las anteriores",
    answer: 1,
  },

  item25: {
    id: "25",
    title: "En el protocolo de autenticación extensible (EAP) se hace uso de un servidor de autenticación:",
    first: "DNS",
    second: "DHCP",
    third: "RADIUS",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },

  item26: {
    id: "26",
    title: "Indique cuál de las siguientes medidas es la más efectiva para proteger una LAN inalámbrica:",
    first: "Camuflaje SSID",
    second: "Filtrado de direcciones MAC",
    third: "Seguridad WLAN - WPA o WPA2",
    fourth: "Todas son igualmente efectivas",
    answer: 3,
  },

  item27: {
    id: "27",
    title: "Los puntos de acceso de una red WLAN deben situarse:",
    first: "En cuartos inaccesibles",
    second: "Cerca del techo en el centro de cada área de cobertura",
    third: "En las paredes para evitar refracciones",
    fourth: "Ninguna de las anteriores",
    answer: 2,
  },

  item28: {
    id: "28",
    title: "Indica cuál de las siguientes propiedades no emite un punto de acceso en sus beacons:",
    first: "SSID",
    second: "Velocidades admitidas",
    third: "Implementación de seguridad",
    fourth: "Solicitud de conexión",
    answer: 4,
  },

  item29: {
    id: "29",
    title: "Las redes inalámbricas que operan sin necesidad de puntos de acceso se denominan:",
    first: "Sin infraestructura",
    second: "Ad-hoc",
    third: "Hand-over",
    fourth: "Ninguna de las anteriores",
    answer: 2,
  },

  item30: {
    id: "30",
    title: "En la banda de 2.4GHz, la portadora de cada canal tiene una distancia al siguiente canal de:",
    first: "5MHz",
    second: "10MHz",
    third: "25MHz",
    fourth: "50MHz",
    answer: 1,
  },

  item31: {
    id: "31",
    title: "Indica cuál de los siguientes estándares de WiFi permite la transferencia hasta 54Mbps y opera en la banda de 2.4GHz:",
    first: "802.11a",
    second: "802.11b",
    third: "802.11g",
    fourth: "802.11n",
    answer: 3,
  },

  item32: {
    id: "32",
    title: "El estándar de Bluetooth se define para redes de tipo:",
    first: "LAN",
    second: "MAN",
    third: "PAN",
    fourth: "Ninguna de las anteriores",
    answer: 3,
  },

  item33: {
    id: "33",
    title: "La función de carga (PUSH) en TCP permite:",
    first: "Obligar a TCP a enviar inmediatamente los datos acumulados",
    second: "Obligar a TCP a almacenar los datos a enviar para reducir el número de segmentos enviados",
    third: "Enviar los datos por UDP para reducir el RTT",
    fourth: "Ninguna de las anteriores",
    answer: 1,
  },

  item36: {
    id: "36",
    title: "En el control de congestión de TCP, indica la afirmación errónea:",
    first: "La congestión aparece por una sobrecarga en los nodos de comunicación (ej. routers) de una red",
    second: "La congestión provoca un incremento en las retransmisiones, que no hacen más que agravar la situación",
    third: "TCP puede ayudar a solucionar la congestión, reduciendo la inyección de segmentos en la red",
    fourth: "El estándar actual recomienda dos técnicas, relacionadas y fáciles de implementar: Go Back N (ventana atrás) y retransmisión selectiva",
    answer: 4,
  },

  item39: {
    id: "39",
    title: "Respecto al control de flujo en TCP, indica la afirmación errónea:",
    first: "Se definen dos parámetros: RcvBuffer (Tamaño del buffer TCP del receptor) y RcvWindow (Tamaño del buffer TCP del receptor)",
    second: "El receptor informa explícitamente al emisor de la cantidad de espacio libre que dispone en el buffer",
    third: "El emisor mantiene el control de datos enviados pendientes de reconocimiento por debajo de la indicación más reciente de RcvWindow",
    fourth: "La suma de RcvWindow y RcvBuffer proporciona el tamaño máximo del segmento TCP",
    answer: 4,
  },

  item46: {
    id: "46",
    title: "Indica el número de puerto UDP para el protocolo DNS en escucha en un servidor:",
    first: "7",
    second: "21",
    third: "53",
    fourth: "69",
    answer: 3,
  },

  item47: {
    id: "47",
    title: "Respecto al cálculo del checksum en UDP, indica la afirmación errónea:",
    first: "UDP emplea el cálculo del checksum incluido una pseudo-cabecera",
    second: "UDP emplea el mismo algoritmo que IP",
    third: "Contempla todo el mensaje UDP más la pseudo-cabecera",
    fourth: "La pseudo-cabecera incluye solo las IP de origen y destino",
    answer: 4,
  },
};

