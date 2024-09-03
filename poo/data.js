const data = {
  item1: {
    id: "1",
    title: "¿Qué significa instanciar una clase?",
    first: "Crear la definición de la clase.",
    second:
      "Crear un objeto a partir de una clase",
    third:
      "Crear clases a partir de otras clases.",
    fourth:
      "Todas las anteriores son correctas.",
    answer: 2,
  },
  item2: {
    id: "2",
    title: "A las acciones que se pueden realizar sobre una clase se les denomina…",
    first:
      "Atributos",
    second:
      "Todas las anteriores son falsas. ",
    third: 
      "Variables",
    fourth:
      "Métodos",
    answer: 4,
  },
  item3: {
    id: "3",
    title: "¿Se puede acceder a una variable de instancia desde un método de clase? ",
    first:
      "Si es pública sí.",
    second:
      "Depende del tipo de la variable.",
    third:
      "No",
    fourth:
      "Si",
    answer: 3,
  },
  item4: {
    id: "4",
    title: "¿Cómo se llama la característica de la POO que oculta la implementación que se realiza dentro de una clase?.",
    first:
      "Encapsulación.",
    second:
      "Persistencia.",
    third:
      "Herencia.",
    fourth:
      "Recolector de basura.",
    answer: 1,
  },
  item5: {
    id: "5",
    title: "En POO a las propiedades de una clase también se les denomina…",
    first:
      "Atributos",
    second:
      "Métodos",
    third:
      "Variables",
    fourth:
      "Todas las anteriores son falsas.",
    answer: 1,
  },
  item6: {
    id: "6",
    title: "Indica cuál de las siguientes afirmaciones es correcta: ",
    first:
      "Los atributos de una clase deben tener métodos getter y setter siempre.",
    second:
      "Los métodos pueden devolver información del objeto mediante un valor de retorno.",
    third:
      "Un método de una clase no puede acceder a las variables de instancia privadas.",
    fourth:
      "Los métodos siempre tienen parámetros para obtener la información de los objetos.",
    answer: 2,
  },
  item7: {
    id: "7",
    title: "Indica cuál de las siguientes afirmaciones es correcta:",
    first:
      "Una variable de clase puede ser modificada sin instanciar un objeto de la clase. ",
    second:
      "Un método de clase puede acceder a cualquier miembro de la clase.",
    third:
      "Para definir un atributo de instancia es necesario utilizar una palabra clave static.",
    fourth:
      "Un método de clase puede acceder sólo a las variables de clase declaradas como public.",
    answer: 1,
  },
  item8: {
    id: "8",
    title: "Indica cuál de las siguientes afirmaciones es correcta: ",
    first:
      "La interfaz de la clase define lo que hace la clase y como puede usarse pudiendo ver su código.",
    second:
      "Una interfaz nunca tiene implementación de sus métodos.",
    third:
      "Un método abstracto puede tener implementación del mismo para ser reutilizado por las clases hijas.",
    fourth:
      "Implementar una interfaz no obliga a implementar todos sus métodos.",
    answer: 2,
  },
  item9: {
    id: "9",
    title: "Indica cuál de estas afirmaciones es correcta:",
    first:
      "Una clase es la instanciación de un objeto.",
    second:
      "Una clase tiene siempre al menos un objeto.",
    third:
      "Podemos crear muchos objetos a partir de una clase.",
    fourth: 
      "b y c son ciertas.",
    answer: 3,
  },
  item10: {
    id: "10",
    title: "Indica cuál de las siguientes afirmaciones es correcta:",
    first:
      "Los métodos tienen que tener parámetros, en caso contrario no hacen nada.",
    second:
      "Los métodos pueden modificar los atributos, pero no están obligados a ello.",
    third:
      "En una clase sólo se pueden crear objetos de la misma mediante métodos públicos.",
    fourth:
      "Los atributos y métodos de una clase pueden tener métodos getter y setter.",
    answer: 2,
  },
  item11: {
    id: "11",
    title: "¿Se puede acceder a un método de clase desde un método de instancia? (suponemos que ambos métodos están declarados en la misma clase):",
    first:
      "No, porque el método de clase accede a atributos de clase y eso no está permitido.",
    second:
      "Si.",
    third:
      "Depende del tipo de método de clase.",
    fourth:
      "No, en ningún caso.",
    answer: 2,
  },
  item12: {
    id: "12",
    title: "¿Se puede acceder a un método estático declarado en una clase base desde una clase derivada?: ",
    first:
      "No, porque el método estático solo es accesible desde la propia clase.",
    second:
      "No si este accede a variables estáticas privadas de la clase base.",
    third: "Depende de la visibilidad del método estático.",
    fourth:
      "No si este método accede a variables de instancia.",
    answer: 3,
  },
  item13: {
    id: "13",
    title:
      "Indica cuál de estas afirmaciones es correcta:",
    first: "En java, siempre todas las clases hereden de otra.",
    second: "La herencia nos permite heredar, pero no reutilizar el código de la clase base.",
    third: "La herencia nos permite reutilizar todos los métodos de la clase base, y por tanto realizar llamadas a todos ellos.",
    fourth: "En java, para implementar la herencia hay que utilizar obligatoriamente la palabra extends en la definición de esta.",
    answer: 4,
  },
  item14: {
    id: "14",
    title: "Indica cuál de estas afirmaciones es correcta:",
    first:"Los constructores permiten que cada objeto sea preparado adecuadamente en el momento de su creación. ",
    second: "El tiempo de vida de una variable define el número de veces que es utilizada en un método.",
    third: "Los atributos son funciones que son definidas en la clase.",
    fourth:
      "Un método privado no puede ser utilizado nunca, precisamente porque es privado.",
    answer: 1,
  },
  item15: {
    id: "15",
    title: "Según el temario de la asignatura ¿Qué significa sobrecargar un método? ",
    first: "Editarlo para modificar su comportamiento. ",
    second: "Cambiar el nombre dejándolo con la misma funcionalidad.",
    third: "Crear un método con el mismo nombre, pero con diferentes argumentos.",
    fourth: "Crear un método en la clase derivada idéntico al de la clase base. ",
    answer: 3,
  },
  item16: {
    id: "16",
    title: "Indica cuál de estas afirmaciones es correcta",
    first: "Una interfaz puede implementar alguno de los métodos que declara.",
    second: "Una interfaz puede declarar variables de instancia o de clase.",
    third: "Cuando una clase implementa una interfaz específica no hace falta que implemente todos los métodos de esa interfaz, sólo los que necesite. ",
    fourth: "Una clase puede implementar más de una interfaz al mismo tiempo.",
    answer: 4,
  },
  item17: {
    id: "17",
    title: "Indica cuál de estas afirmaciones es correcta ",
    first:
      "Si una clase es abstracta, todos los métodos de esta tienen que ser abstractos.",
    second:
      "No podemos crear clases abstractas sin tener métodos abstractos, no tendría sentido.",
    third:
      "Una clase es abstracta si alguno de los métodos es abstracto.",
    fourth: "Una clase abstracta no puede implementan ningún interfaz ya que es abstracta.",
    answer: 3,
  },
  item18: {
    id: "18",
    title: "Es posible que los métodos indiquen en su declaración que pueden lanzar una excepción al método que les llama:",
    first:
      "No pueden hacer tal cosa.",
    second: "Pueden hacerlo utilizando la palabra reservada throw.",
    third: "Pueden hacerlo utilizando la palabra reservada throws.",
    fourth: "Pueden hacerlo sin utilizar ninguna palabra reservada.",
    answer: 3,
  },
  item19: {
    id: "19",
    title: "Indica cuál de estas afirmaciones es correcta en Java: ",
    first:
      "Los interfaces pueden ser instanciados.",
    second:
      "Las clases abstactas pueden ser instanciadas ya que pueden tener métodos implementados.",
    third:
      "Las clases pueden implementar varias interfaces y extender varias clases.",
    fourth:
      "Todas las anteriores son falsas. ",
    answer: 4,
  },
  item20: {
    id: "20",
    title: "Indica cuál de las siguientes opciones declarará un método en una clase que fuerza a una subclase a implementarlo",
    first:
      "protected void metodoPI (double d1){}",
    second:
      "abstract public void metodoPI () ; ",
    third: "static void metodoPI (double d1) {}",
    fourth: "public native double metodoPI ();",
    answer: 2,
  },
  item21: {
    id: "21",
    title: "Según el temario de la asignatura ¿Qué significa sobrescribir un método?",
    first: "Editarlo para modificar su comportamiento.",
    second: "Cambiar el nombre dejándolo con la misma funcionalidad.",
    third: "Crear un método con el mismo nombre, pero con diferentes argumentos.",
    fourth:
      "Crear un método en la clase derivada idéntico al de la clase base.",
    answer: 4,
  },
  item22: {
    id: "22",
    title: "Indica cuál de estas afirmaciones es correcta",
    first:
      "Una superclase es una clase que es implementada por otra.",
    second:
      "Una subclase es una clase que implementa a otra clase.",
    third:
      "La herencia nos permite heredar, pero no reutilizar en un nuevo contexto clases que ya fueron escritas previamente.",
    fourth:
      "Todas las anteriores son falsas.",
    answer: 4,
  },
  item23: {
    id: "23",
    title: "Las clases abstractas…",
    first:
      "Admiten herencia múltiple.",
    second: "Permiten definir atributos.",
    third:
      "Sus métodos solo pueden ser public y abstract.",
    fourth:
      "Todas las anteriores son falsas.",
    answer: 2,
  },
  item24: {
    id: "24",
    title:
      "Indica cuál de estas afirmaciones es correcta",
    first:
      "Para definir una variable de instancia es necesario utilizar la palabra reservada static.",
    second: "Un método estático puede acceder a cualquier componente (método o variable) no estático de su clase.",
    third: "Los métodos estáticos pueden ser sobrescritos.",
    fourth: "Una variable de clase puede ser modificada sin necesidad de haber instanciado objeto alguno de dicha clase.",
    answer: 4,
  },
  item25: {
    id: "25",
    title:
      "Indica cuál de estas afirmaciones es correcta ",
    first:
      "Los campos se definen dentro de los constructores y de los métodos.",
    second:
      "Los campos se usan para almacenar datos que nunca persisten durante la vida del objeto.",
    third:
      "Los campos tienen un tiempo de vida que perdura después de terminar el objeto.",
    fourth:
      "La accesibilidad de los campos se extiende a toda clase y por este motivo pueden usarse dentro de cualquier constructor o método de clase en la que estén definidos.",
    answer: 4,
  },
  item26: {
    id: "26",
    title: "La presencia de dos o más constructores en una clase se llama:",
    first: "No tiene nombre, solo permite crear más objetos.",
    second: "Abstracción.",
    third: "Sobrecarga.",
    fourth: "Sobrescritura de constructor ya que está escrito más de una vez.",
    answer: 3,
  },
  item27: {
    id: "27",
    title:
      "¿Qué significa sobrecargar un método?",
    first:
      "Crear un método igual en la clase derivada que llame al de la clase base.",
    second:
      "Crear un método con el mismo nombre, pero con diferentes argumentos y tipo de retorno.",
    third: "Crear un método con el mismo nombre y tipo de retorno, pero con diferentes argumentos.",
    fourth:
      "Crear un método con el mismo nombre y argumentos, pero con diferente tipo de retorno.",
    answer: 3,
  },
  item28: {
    id: "28",
    title: "Indica la respuesta correcta",
    first: "Un bloque try solo puede contener un único catch (más el finally, optativo).",
    second: "Un bloque try no puede contener otros try anidados.",
    third: "Un bloque catch puede contener varios try (más el finally, optativo).",
    fourth:
      "Un bloque try puede contener varios catch.",
    answer: 4,
  },
  item29: {
    id: "29",
    title:
      "Indica la respuesta correcta",
    first: "Los interfaces pueden ser instanciados.",
    second:
      "Las clases abstractas no pueden ser instanciadas porque todos los métodos siempre tienen que ser abstractos.",
    third: "Las clases pueden implementar interfaces o extender clases, pero no las 2 cosas a la vez.",
    fourth: "Las clases abstractas pueden contener métodos no abstractos.",
    answer: 4,
  },
  item30: {
    id: "30",
    title:
      "¿Qué es redefinir un método?",
    first: "Es el proceso mediante el cual una clase derivada toma un método de la clase base y lo reescribe con la intención de cambiar su comportamiento.",
    second:
      "Es el proceso mediante el cual un método toma un objeto de la clase y lo define de nuevo.",
    third: "Es el proceso por el cual pasa una variable mediante la medición de sus atributos.",
    fourth: "Es definir 2 o más veces el mismo método con distintos argumentos en la misma clase.",
    answer: 1,
  },
  item31: {
    id: "31",
    title: "¿Qué representa un método?",
    first: "Una acción o comportamiento de un objeto",
    second: "Una característica de la clase a la que se puede llamar para crear objetos",
    third:
      "El estado del objeto.",
    fourth: "Ninguna de las anteriores ",
    answer: 1,
  },
  item32: {
    id: "32",
    title: "Si la clase Pato es una subclase de la clase Ave. ¿Cuál de los siguientes códigos no compilará? Razona tu respuesta",
    first: "Ave objeto = new Ave();",
    second:
      "Pato objeto = new Ave();",
    third:
      "Pato objeto = new Pato();",
    fourth:
      "Ave objeto = new Pato();",
    answer: 2,
  },
  item33: {
    id: "33",
    title:
      "Indica cuál de estas afirmaciones es correcta",
    first: "Ninguna de las anteriores es correcta.",
    second: "Una subclase es una clase que implementa a otra clase ",
    third: "La herencia nos permite heredar, pero no reutilizar en un nuevo contexto clases que fueron escritas previamente.",
    fourth: "Una clase derivada es aquella de la que se implementan clases.",
    answer: 1,
  },
  item34: {
    id: "34",
    title:
      "Sobre la palabra reservada abstract, indica cuál de estas afirmaciones es correcta",
    first:
      "Se puede utilizar tanto en clases, métodos y atributos.",
    second:
      "Se puede utilizar en una clase sin que ningún atributo de esta esté definido como abstract.",
    third:
      "Solo se puede utilizar en la clase en el caso de que algún atributo esté definido como abstract.",
    fourth:
      "No se puede utilizar en la clase.",
    answer: 2,
  },
  item35: {
    id: "35",
    title: "Según el temario de la asignatura, ¿qué elementos crees que definen a un objeto?",
    first: "Su cardinalidad y su tipo.",
    second: "Sus atributos y sus métodos.",
    third: "La forma en que establece comunicación e intercambia mensajes.",
    fourth: "Su variable, su interfaz y los métodos públicos.",
    answer: 2,
  },
  item36: {
    id: "36",
    title: "Indica la respuesta correcta",
    first: "Las interfaces pueden tener atributos no estáticos que las clases que las implementen heredarán.",
    second: "Las subclases de una clase abstracta deben implementar todos los métodos abstractos o declararse abstractas.",
    third: "Las clases pueden implementar interfaces o extender clases, pero no las 2 cosas a la vez.",
    fourth: "Las clases que implementan interfaces pueden implementar solo los métodos abstractos que necesiten de cada una de ellas.",
    answer: 2,
  },
  item37: {
    id: "37",
    title: "Es posible que los métodos indiquen en su declaración que pueden lanzar una excepción al método que les llama",
    first: "Ninguna de las anteriores es correcta.",
    second: "Pueden hacerlo utilizando la palabra reservada throw.",
    third: "Pueden hacerlo utilizando la palabra reservada new.",
    fourth: "Pueden hacerlo siempre que la excepción no la lancemos nosotros directamente.",
    answer: 1,
  },
  item38: {
    id: "38",
    title: "Explica con tus propias palabras que es una interfaz.",
    first: "Es como un plano o plantilla que define las características y comportamientos de algo en programación orientada a objetos (POO).",
    second: "Es una instancia de una clase.",
    third: "Define un conjunto de métodos que una clase debe tener, pero no proporciona la implementación de esos métodos, solo la firma",
    fourth: "Esta característica permite agrupar datos (atributos) y métodos (funciones) que operan sobre esos datos dentro de una misma unidad llamada clase.",
    answer: 3,
  },
  item39: {
    id: "39",
    title:
      "Indica la respuesta falsa:",
    first: "Un atributo final es una constante.",
    second: "Cuando heredamos un método y lo sobrescribimos en la clase hija, podemos cambiar su visibilidad de public a private.",
    third:
      "Por defecto desde un constructor de una clase hija se llama al constructor sin argumentos de la clase Padre",
    fourth: "Un método final no se puede sobrescribir",
    answer: 2,
  },
  item40: {
    id: "40",
    title:
      "Indica cuál de estas afirmaciones es verdadera en Java:",
    first: "Los interfaces pueden ser instanciados.",
    second: "Las clases abstactas pueden ser instanciadas ya que pueden tener métodos implementados.",
    third:
      "Las clases pueden implementar varias interfaces y extender varias clases.",
    fourth: "Todas las anteriores son falsas",
    answer: 4,
  },
  item41: {
    id: "41",
    title:
      "Indica la respuesta correcta",
    first: "Un atributo de clase solo puede ser accedido desde métodos de instancia.",
    second: "Un atributo de clase puede ser accedido desde cualquier método.",
    third:
      "Un atributo de clase solo puede ser accedido desde métodos de clase.",
    fourth: "Un atributo de instancia puede ser accedido desde cualquier método.",
    answer: 2,
  },
  item42: {
    id: "42",
    title:
      "Indica cuál de estas afirmaciones es verdadera en Java:",
    first: "Los interfaces no pueden ser instanciados.",
    second: "Las clases abstractas pueden ser instanciadas ya que pueden tener métodos implementados.",
    third:
      "Las clases solo pueden implementar una interfaz y heredar de una clase.",
    fourth: "Todas las anteriores son verdaderas.",
    answer: 1,
  },
  item43: {
    id: "43",
    title:
      "Indica cuál de estas afirmaciones es verdadera en Java: ",
    first: "Los interfaces solo pueden ser instanciados por quienes los implementan.",
    second:
      "No puede haber una clase abstracta si al menos no tiene un método abstracto.",
    third:
      "Las clases pueden heredar de más de una clase.",
    fourth:
      "Todas las anteriores son falsas.",
    answer: 2,
  },
  item44: {
    id: "44",
    title:
      "Indica cuál de estas afirmaciones es verdadera en Java:",
    first:
      "Los interfaces si pueden ser instanciados por las clases que los heredan.",
    second: "En una clase no puede haber 2 métodos con el mismo nombre.",
    third: "Las clases solo pueden implementar una interfaz y heredar de una clase.",
    fourth: "Todas las anteriores son falsas.",
    answer: 4,
  },
  item45: {
    id: "45",
    title:
      "Indica cuál de estas afirmaciones es verdadera en Java:",
    first:
      "Un objeto puede estar referenciado por una o más variables.",
    second:
      "Una clase puede tener un constructor privado.",
    third:
      "Un objeto puede dejar de estar referenciado en alguna parte del código.",
    fourth:
      "Todas las anteriores son verdaderas.",
    answer: 4,
  },
  item46: {
    id: "46",
    title: "Indica cuál de estas afirmaciones es verdadera en Java:",
    first:
      "No existe un recolector de basura.",
    second:
      "No existe un constructor por defecto.",
    third:
      "No se puede heredar de más de una clase.",
    fourth:
      "No se puede implementar más de un interfaz",
    answer: 3,
  },
  item47: {
    id: "47",
    title: "Indica cuál de estas afirmaciones es verdadera en Java:",
    first: "No puede haber 2 objetos iguales.",
    second: "Un objeto puede estar referenciado una o más veces.",
    third:
      "Una clase solo puede ser instanciada una vez.",
    fourth:
      "Todas las anteriores son verdaderas.",
    answer: 2,
  },
  item48: {
    id: "48",
    title: "Se puede sobrecargar un método variando los parámetros de entrada.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 1,
  },
  item49: {
    id: "49",
    title: "Se puede sobrecargar un método variando el tipo de retorno de éste sin variar los parámetros de entrada.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item50: {
    id: "50",
    title: "Un método puede ser sobrecargado en la misma clase o en una subclase utilizando los mismos parámetros.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item51: {
    id: "51",
    title: "Los atributos también pueden ser sobrecargados.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item52: {
    id: "52",
    title: "Los métodos de clase no pueden ser sobrecargados.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item53: {
    id: "53",
    title: "Un atributo de clase solo puede ser accedido desde métodos de clase.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item54: {
    id: "54",
    title: "Dada una clase abstracta, si creamos un objeto de esa clase sólo podremos usar los métodos que no estén definidos como abstractos porque los métodos abstractos no tienen implementación.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item55: {
    id: "55",
    title: "Una clase derivada sólo puede acceder a un método privado de la superclase si y sólo si ambas están definidas en el mismo fichero.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item56: {
    id: "56",
    title: "Si dentro de un método de una clase se declara un atributo público este puede ser accedido desde cualquier método de la clase.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item57: {
    id: "57",
    title: "Una clase no puede tener 2 métodos con el mismo nombre.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item58: {
    id: "58",
    title: "Instanciar un objeto de una clase es declarar una variable de esa clase.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item59: {
    id: "59",
    title: "La palabra reservada throws sirve para lanzar nuevas excepciones",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item60: {
    id: "60",
    title: "Un atributo private solo puede ser accedido por métodos private.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item61: {
    id: "61",
    title: "No es posible tener constructores private.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item62: {
    id: "62",
    title: "Una variable static indica que no se puede modificar su valor.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item63: {
    id: "63",
    title: "Una clase no puede tener 2 métodos con el mismo nombre.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item64: {
    id: "64",
    title: "Podemos utilizar el operador = para crear nuevos objetos a partir de otros.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item65: {
    id: "65",
    title: "No pueden existir clases abstractas sin métodos abstractos.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item66: {
    id: "66",
    title: "Una clase derivada no puede ser a su vez clase base de otra clase.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item67: {
    id: "67",
    title: "Un atributo de instancia solo puede ser accedido desde métodos de instancia.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item68: {
    id: "68",
    title: "Dada una clase abstracta, si creamos un objeto de esa clase sólo podremos usar los métodos que no estén definidos como abstractos porque los métodos abstractos no tienen implementación.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item69: {
    id: "69",
    title: "Una subclase sólo puede acceder a un método privado de la superclase si y sólo si ambas están definidas en el mismo fichero.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item70: {
    id: "70",
    title: "Un método de clase puede acceder a métodos de instancia.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item71: {
    id: "71",
    title: "Un atributo de clase no puede ser accedido desde métodos de instancia.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item72: {
    id: "72",
    title: "Un método público de la clase base no puede ser sobrecargado en la clase hija.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item73: {
    id: "73",
    title: "Un método privado de la clase base puede ser accedido por la clase derivada por heredarlo.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item74: {
    id: "74",
    title: "Una clase abstracta no puede ser heredada.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item75: {
    id: "75",
    title: "Un método de clase únicamente puede acceder a atributos de clase.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 1,
  },
  item76: {
    id: "76",
    title: "Una clase abstracta debe tener todos los métodos definidos como abstractos.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item77: {
    id: "77",
    title: "Una clase solo puede tener un constructor.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item78: {
    id: "78",
    title: "No podemos utilizar el operador == para comparar objetos.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 1,
  },
  item79: {
    id: "79",
    title: "Declarar una variable de una clase es instanciar un objeto.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item80: {
    id: "80",
    title: "Un atributo de clase solo puede ser accedido desde métodos de clase.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 2,
  },
  item81: {
    id: "81",
    title: "Un objeto puede ser referenciado por muchas variables a la vez.",
    first: "Verdadero",
    second: "Falso",
    third:
      "-",
    fourth:
      "-",
    answer: 1,
  },
};
