# Notas de aprendizaje de la sesión

1. La existencia de las [divisiones por salas](https://support.zoom.us/hc/es/articles/206476313-Administraci%C3%B3n-de-salas-de-video-para-grupos-peque%C3%B1os) en las reuniones de zoom.
2. Cómo actualizar* Node en Linux y en Window.
3. Aprendí a instalar TypeScript mediante npm y configurarlo en el proyecto

*❗ Sé que no era obligatorio actualizar la versión para la sesión, pero en Window tenía la 12 y en Linux la 10 (La 10.16, o sea, del pleistoceno, la pobre) y decidí aprovechar el tiempo mientras el resto instalaba. Por cierto, descubrí que nvm no va en Window.  ¯\\‿( ͠° ͟ʖ °͠ )‿/¯

## Actualización de Node

### Window

En [la web de Node](https://nodejs.org/es/download/) descárgate la LTS e instálala.

### Linux

- Descárgate la última estable para trastear: `nvm install stable`
- Descargas la LTS para desarrollar:  `nvm install --lts`
- Alternar entre versiones y ejecutarla: `nvm run *versionDeseada*` Ej: `nvm run stable`

## TypeScript en tu entorno

**Comando de instalación:** `npm i typescript`
**Comando para *ejecutar* el compilador:** `npx tsc --init`

### Editar el configurable de TypeScript

La configuración de TypeScript en tu proyecto se puede personalizar en este fichero json.

> **Nota:**
>
> - Entre las primeras líneas podemos declarar el **target**, que es la versión de JavaScript a la que será transpilado el código. Por defecto es la es5.
> - Entre las últimas líneas podemos especificar el **mapRoot**, usado para debugear. Gracias, @sgalsant por la explicación.

En este ejercicio sólo necesitaremos declarar el directorio raíz, de donde el compilador extraerá los datos para crear la build, y el directorio de salida, donde el compilador colocará la última build creada.

🟢En el directorio del proyecto **deberás crear una carpeta** para guardar la fuente del código a compilar, que por convención puede ser llamada src  o lib.

Seguidamente ya podemos meter las manos en el **tsconfig.json**:

1. localiza las líneas `"outDir": "./",` y `"rootDir": "./",` que están comentadas en el fichero
2. Descoméntalas
3. Modifíca el valor de *outDir* por `./nombreDeLaCarpetaDeSalida`, preferiblemente usa "build", para mantener la coherencia, hacer comprensible la función del directorio y por respetar las buenas prácticas. ❗ No olvides poner el valor entrecomillado y no borrar la coma tras la declaración.
4. Modifica el valor de *rootDir* por `./nombredeLaCarpetaConLaFuenteDelCodigo`.

## Configura node

Lo que vamos a hacer se podría definir como **crear atajos de la terminal para hacer muchas cosas con una simple palabra**. O sea, definir comandos de toda la vida.

Abre el fichero **package.json** que está en el directorio raíz de tu proyecto y sitúate en la propiedad "Scripts", que contiene un diccionario*  , dentro de ese objeto se le están dando instrucciones a Node de los comandos que ha de ejecutar en según qué casos.

>***Diccionario:**
>
>- Un diccionario es una lista de conjuntos clave/valor. O sea, cosas que tienen una clave -su nombre o identificador- y un valor. Vamos, como el diccionario de tu casa. La clave sería la palabra a buscar, el valor sería la definición de esa palabra.
>- En el caso de "Script" los valores son comandos que Node va a ejecutar cuando sea llamada esa clave.
>
>La clave la puedes llamar tú mismo a través de la consola de comandos, con un `npm run nombreDeLaClave`, o lo llama el mismo node dentro de la ejecución de otra función. Por tanto, todas las claves que definas en ese diccionario, serán ejecutables.
>
>Si ahora mismo quieres definir la clave "Yupi" que ejecuta el comando start ( Definido dentro de la propiedad scripts como `"yupi": "npm start",` y llamado desde la consola de comandos como `npm run yupi` ), puedes hacerlo. Incluso si quieres crear el comando "olaQueAseSeEjecutaOQueAse", puedes.
>
>❗  Pero recuerda que el package.json configura **TODO** tu proyecto actual. Así que si otra persona está trabajando en el mismo proyecto que tú, deberá usar *tus* comandos, por lo que es motivo de pena capital entre desarrolladores no obedecer las convenciones de nombres.
>
>💔 Cada vez que te creas un comando chulo para un proyecto compartido, un desarrollador pierde 3 gramos de café en sangre. Utiliza npm start para iniciar la app que estás creando; salva la vida de tus devmates.
>
> (**Friendly reminder:** No insultes a tu jefe en tus comandos. Usa los commits para eso, si quieres salir por la puerta grande de la empresa)

En especial nos interesa declarar las claves:

1. "build", que definirá el método usado a la hora de compilar el código (en nuestro caso es el compilador de TypeScript: tsc)
2. "prestart" que será llamado -como su propio nombre indica- cuando ejecutes el start de la aplicación y se usa para poner a punto la app antes de iniciarla. En nuestro caso para ponerla a punto, vamos a construirla, que no es poco.
3. "start" que es el comando que ejecuta node para iniciar la app. Nosotros vamos a crear nuestro código en un archivo TypeScript, luego ese archivo va a ser transpilado por el compilador de TypeScript para que pueda ser ejecutado como un archivo JavaScritp de toda la vida.
👉 Una aplicación normal de node ejecutaría un app.js, un index.js, un... whatever.js.
👉 Por eso nosotros debemos decirle a node **dónde** está el archivo js que va a funcionar como punto de entrada de nuestra app.
👉 El problema es que ese archivo no existe. Lo que existe es un archivo typescript, pero en los pasos anteriores hemos definido una carpeta para guardar el resultado de nuestra transpilación, ¿verdad?, pues ya está. Ahí está nuestro archivo .js, que se llamará igual que el archivo .ts que **hemos creado** dentro de nuestra carpeta fuente (src o lib, según tus preferencias o las de tu equipo)

```json
"build": "tsc",
"prestart": "npm run build",
"start": "node build/app.js", //Si alguna vez cambias el nombre de tu .ts, no olvides actualizarlo aquí
```

Y eso es todo. Ahora puedes ejecutar desde tu consola de comandos el `npm start` para asegurarte de que no has cometido ningún typo. Si lo ejecutas y te lanza algún error, posiblemente tienes erratas en tu código, o te has olvidado de crear el archivo `./src/app.ts`

Puesto que no hemos escrito nuetro holaMundo, lo único que debe ocurrir a este punto es que se cree el directorio "build" y el archivo .js en su interior.

👉 **Consejo:** Si estás en visual studio code, usa ctrl+ñ para abrir la consola de comando dentro del propio editor. Es una comodidad extra cuando sólo tienes una pantalla y quieres tenerlo todo a la vista.
👉  Al ejecutar los comandos, asegúrate de que estás dentro del directorio **raíz** de tu proyecto.

## Tu primer "Hola, mundo" en TypeScript

Abre el fichero .ts que creaste en el directorio src o lib y manda un mensaje por la consola de comandos.

```ts
console.log('Hola, mundo.')
```

Ahora ejecuta nuevamente el comando `npm start` y mira cómo la consola saluda al mundo.

---

Y ya concluyendo con las notas de la sesión, tocan las notas sobre mis notas:

- Hacer este tipo de apuntes masticaditos me sirven no sólo para repasar los conceptos dados, sino que también para afianzarlos, y revisar conceptos pasados.
- Creo que si alguien compartiera sus apuntes -sin necesidad de escribir testamentos bíblicos como yo- sería beneficioso porque podría identificar ideas o detalles que a mi se me pudieron pasar por alto, o que directamente creí que había comprendido pero... pues no.
- Cualquier corrección a mis notas es bienvenida y muy agradecida. Piensa que si no me señalas los fallos, no sólo me perjudicas a mi, sino que también a todos los que crean que lo que digo es correcto. :frowning:

>**Disclaimer:** No me señalen cuando les pregunten quién les dio la idea de ponerle nombres estúpidos a los comandos. Tu comando, tu responsabilidad.
