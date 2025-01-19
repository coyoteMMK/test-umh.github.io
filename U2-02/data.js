const data = {
  item1: {
    id: "1",
    title: "¿Qué es una llamada al sistema?",
    first: "Una interrupción de hardware para manejar excepciones",
    second: "Una solicitud de un proceso para que el núcleo realice una operación en su nombre",
    third: "Un mecanismo de acceso directo a recursos de hardware",
    fourth: "Una función de usuario para gestionar archivos",
    answer: 2
  },
  item2: {
    id: "2",
    title: "¿Qué permite el mecanismo de llamadas al sistema?",
    first: "Acceso directo del usuario a la memoria del sistema",
    second: "Control total del hardware por parte de los procesos",
    third: "La interacción segura entre procesos y el núcleo del sistema operativo",
    fourth: "El bloqueo de recursos críticos en el sistema",
    answer: 3
  },
  item3: {
    id: "3",
    title: "¿Qué paso ocurre primero en una llamada al sistema?",
    first: "El núcleo ejecuta la operación solicitada",
    second: "El control del sistema se transfiere al núcleo",
    third: "El proceso emite una solicitud al sistema operativo",
    fourth: "El sistema devuelve un valor de retorno",
    answer: 3
  },
  item4: {
    id: "4",
    title: "¿Qué tipo de llamadas al sistema permiten manipular archivos?",
    first: "Solicitudes de manejo de dispositivos",
    second: "Llamadas de control y gestión de procesos",
    third: "Llamadas de manipulación de archivos",
    fourth: "Operaciones de mantenimiento de información",
    answer: 3
  },
  item5: {
    id: "5",
    title: "¿Qué hace el comando 'strace' en sistemas Unix-like?",
    first: "Depura errores de hardware",
    second: "Muestra las llamadas al sistema que realiza un programa",
    third: "Optimiza la gestión de procesos",
    fourth: "Compila aplicaciones de sistema",
    answer: 2
  },
  item6: {
    id: "6",
    title: "¿Qué llamada al sistema se usa para crear un proceso en Unix?",
    first: "execve",
    second: "fork",
    third: "wait",
    fourth: "open",
    answer: 2
  },
  item7: {
    id: "7",
    title: "¿Qué tipo de llamada al sistema permite gestionar dispositivos?",
    first: "Llamadas de manipulación de archivos",
    second: "Llamadas de comunicaciones",
    third: "Llamadas de mantenimiento de información",
    fourth: "Llamadas de manipulación de dispositivos",
    answer: 4
  },
  item8: {
    id: "8",
    title: "¿Qué significa el bit de modo privilegiado en una llamada al sistema?",
    first: "Permite acceso directo del usuario a la memoria",
    second: "Indica que el núcleo ejecuta código con acceso total al hardware",
    third: "Evita que los procesos se ejecuten en paralelo",
    fourth: "Bloquea todas las operaciones de entrada/salida",
    answer: 2
  },
  item9: {
    id: "9",
    title: "¿Qué llamada al sistema permite enviar señales a otros procesos?",
    first: "kill",
    second: "signal",
    third: "sigaction",
    fourth: "sigprocmask",
    answer: 1
  },
  item10: {
    id: "10",
    title: "¿Qué operación realiza la llamada al sistema 'write'?",
    first: "Lee datos desde un archivo",
    second: "Escribe datos en un archivo o dispositivo",
    third: "Elimina un archivo del sistema",
    fourth: "Abre un archivo para su modificación",
    answer: 2
  },
  item11: {
    id: "11",
    title: "¿Qué sucede cuando una llamada al sistema falla?",
    first: "El proceso se termina automáticamente",
    second: "La llamada devuelve -1 y establece un código de error en 'errno'",
    third: "El sistema operativo reinicia la operación fallida",
    fourth: "El núcleo elimina el proceso solicitante",
    answer: 2
  },
  item12: {
    id: "12",
    title: "¿Qué ventaja ofrece el uso de llamadas al sistema en un programa?",
    first: "Mejoran el rendimiento del hardware",
    second: "Permiten la interacción segura con el núcleo del sistema operativo",
    third: "Eliminan la necesidad de usar APIs de usuario",
    fourth: "Evitan el uso de memoria virtual",
    answer: 2
  },
  item13: {
    id: "13",
    title: "¿Qué llamada al sistema permite abrir un archivo en Unix?",
    first: "close",
    second: "creat",
    third: "open",
    fourth: "stat",
    answer: 3
  },
  item14: {
    id: "14",
    title: "¿Qué permite la abstracción de las llamadas al sistema?",
    first: "Ocultar la complejidad del hardware para los programadores",
    second: "Proporcionar acceso directo a los recursos del sistema",
    third: "Eliminar la necesidad de APIs en los sistemas operativos",
    fourth: "Aumentar el rendimiento de las aplicaciones",
    answer: 1
  },
  item15: {
    id: "15",
    title: "¿Qué llamada al sistema permite gestionar directorios?",
    first: "link",
    second: "mkdir",
    third: "chmod",
    fourth: "getpid",
    answer: 2
  },
  item16: {
    id: "16",
    title: "¿Qué significa 'errno' en el contexto de llamadas al sistema?",
    first: "Es una variable global que almacena el resultado de una operación exitosa",
    second: "Es una función que reinicia las llamadas al sistema fallidas",
    third: "Es una variable que indica el código de error tras una llamada fallida",
    fourth: "Es una función para obtener el PID del proceso actual",
    answer: 3
  },
  item17: {
    id: "17",
    title: "¿Qué llamada al sistema finaliza la ejecución de un proceso?",
    first: "execve",
    second: "exit",
    third: "wait",
    fourth: "close",
    answer: 2
  },
  item18: {
    id: "18",
    title: "¿Qué llamada al sistema permite obtener el ID del proceso actual?",
    first: "getpid",
    second: "getppid",
    third: "fork",
    fourth: "execve",
    answer: 1
  },
  item19: {
    id: "19",
    title: "¿Qué hace el comando 'strace echo hello world'?",
    first: "Escribe 'hello world' en la salida estándar",
    second: "Muestra las llamadas al sistema realizadas por el comando 'echo'",
    third: "Ejecuta un proceso en segundo plano",
    fourth: "Depura errores en la ejecución del programa 'echo'",
    answer: 2
  },
  item20: {
    id: "20",
    title: "¿Qué permite el uso de 'chmod' como llamada al sistema?",
    first: "Crear un nuevo archivo en el sistema",
    second: "Cambiar los permisos de un archivo o directorio",
    third: "Mover un archivo a otra ubicación",
    fourth: "Eliminar un archivo del sistema",
    answer: 2
  }
};
