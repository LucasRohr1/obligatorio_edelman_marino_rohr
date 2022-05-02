### Problema a resolver
Diseñar una aplicación que permita a los usuarios comprar, vender y descubrir artículos digitales. Según nuestra investigación, la aplicación debe tener los siguientes requerimientos:

### Requerimientos funcionales del servicio
Cada usuario debe poder:

-Ingresar un presupuesto 
-Subir un NFT (el usuario debe crearlo usando una herramienta de conveniencia y luego lo sube al sitio web)
-Crear una colección de NFTs
-Agregar NFTs a una lista de favoritos
-Comprar
    *Compra rapida
    *Oferta (se debe ofertar un precio mayor o igual al precio base o el último precio ofertado)
-Vender:
    *Venta rápida (se debe especificar precio de venta)
    *Subastar (se debe especificar duración de la subasta y precio base de venta)
-Acceso a historial de transacciones
-Poder ver un ranking de:
    *Las ventas individuales más caras
    *Colecciones con mayor volumen de transacciones
    *Artistas con mayor volumen de transacciones
    *Seccion de tendencias y NFts recomendados

### Requerimientos no funcionales del servicio:
-La solucion sera una interfaz web a base de lenguajes: Javascript y HTML5
-Cada usuario tendrá credenciales propias y únicas para el ingreso a su perfil
-En lo que concierne a usabilidad:
    *Tiempo de aprendizaje del sistema por un usuario deberá ser menor a 20 minutos
    *La página debe proporcionar mensajes de error que sean informativos y orientados a usuario final
    *Responsivo y adaptable a distintos tamaños de pantallas
    *Tiempo de procesamiento de interacciones entre usuario y página debe ser menor a 5 segundos

### Features del servicio:
-Cada NFT tiene información relevante:
    *Descripción
    *Historial de precio
    *Dueño actual del NFT
-Buscar NFTs, colecciones y artistas mediante filtros
-Los NFTs tendrán asignadas categorías (deporte, entretenimiento, comedia, etc.) para facilitar el descubrimiento de artículos para los usuarios

==============================


# User Stories and Use Cases

## User Story #1 - Iniciar sesión

### Narrativa
- **Como:** Usuario de la aplicación
- **Quiero:** Ingresar a mi cuenta
- **Para:** Poder comprar, vender y descubrir artículos digitales.

### Criterios de aceptación:
- Es responsivo y me dirige correctamente al sitio
- Ingreso a la aplicación y veo la pantalla de login con los campos “user name/ email” y “password” listados uno arriba de otro respectivamente para ingresar a la aplicación. 
- En la pantalla de login veo el botón "LOG IN" debajo de los campos de ingreso de credenciales
- El sistema valida que el usuario y contraseña estén correctos.


## Use Case #1 - Iniciar sesión

**Actor:** usuario
#### Curso normal para narrativa:

| **Acción de los actores**        | **Respuesta del sistema**           |
| ------------- |:-------------:|
| Ingresa a la aplicación y puede ver la página de “Inicio sesión”.       | Muestra la página de inicio “NFT Marketplace” |
| Se ingresa a la página luego de que las credenciales sean aceptadas      | Muestra la página principal (NFT Marketplace) del sistema      |

### Cursos alternativos:

- Si el usuario ingresa mal las credenciales, se le niega el acceso y se le notifica que las credenciales son incorrectas.


===================================================




## User Story #2 - Registro de usuario

### Narrativa
- **Como:** Usuario de la aplicación
- **Quiero:** Registrar una cuenta a la app
- **Para:** Poder comprar, vender y descubrir artículos digitales.

### Criterios de aceptación:
- Es responsivo y me dirige correctamente al sitio
- Ingreso a la aplicación y veo la pantalla de login, con opción de registrarse en caso de no tener una cuenta. 
- En la pantalla de login veo el botón "Registrarse"
- El sistema hace las validaciones de mail y contraseña necesarias.


## Use Case #2 - Registro de usuario

**Actor:** usuario
#### Curso normal para narrativa:

| **Acción de los actores**        | **Respuesta del sistema**           |
| ------------- |:-------------:|
| Ingresa a la aplicación y puede ver la página de iniciar sesión/Registrarse.       | Muestra la página de inicio |
| Registra un cuenta nueva en el sistema   | Muestra la página principal (marketplace) del sistema      |

### Cursos alternativos:

- Si el usuario ingresa credenciales invalidas, se le niega el acceso y se le notifica que las credenciales son incorrectas.





===========================================================
## User Story #2 - Comprar un NFT

### Narrativa
- **Como:** Usuario de la aplicación
- **Quiero:** Comprar un NFT
- **Para:** El usuario pueda tener NFTs disponibles para la venta o visualización de los mismos.

### Criterios de aceptación:
- El sistema procesa la compra exitosamente y el usuario es notificado
- El sistema despliega la información correspondiente al NFT de manera correcta


## Use Case #2 - Comprar un NFT

**Actor:** usuario
#### Curso normal para narrativa:

| **Acción de los actores**        | **Respuesta del sistema**           |
| ------------- |:-------------:|
| Desde “NFT Marketplace” o “Colecciones” selecciono el artículo que deseo comprar | Se abre una ventana “pop up” donde me muestra la información del NFT y opciones de compra| 

| Hago click en el botón “Comprar Ahora” | iSe abre una ventana “pop up” para confirmar la compra |

| Hago click en el botón “Confirmar” | Se comunica que la compra fue exitosa |
 


### Cursos alternativos:

- El usuario no tiene suficiente dinero para realizar la compra, el sistema se lo notifica


==================================

## User Story #3 - Oferta de compra de NFT

### Narrativa
- **Como:** Usuario de la aplicación
- **Quiero:** Hacer una oferta de compra por un NFT
- **Para:** El usuario pueda tener NFTs disponibles para la venta o visualización de los mismos.

### Criterios de aceptación:
- El sistema procesa la compra exitosamente y el usuario es notificado
- El sistema despliega la información correspondiente al NFT de manera correcta
- El sistema despliega información actualizada sobre el estado de la subasta
- El sistema alerta al usuario mediante una ventana “pop up” y/ o email sobre el estado de la subasta


## Use Case #3 - Oferta de compra de NFT

**Actor:** usuario
#### Curso normal para narrativa:

| **Acción de los actores**        | **Respuesta del sistema**           |
| ------------- |:-------------:|
| Desde “NFT Marketplace” o “Colecciones” selecciono el artículo que deseo comprar | Se abre una ventana “pop up” donde me muestra la información del NFT y opciones de compra | 

| Hago click en el botón “Realizar oferta” | Se abre una ventana “pop up” donde se pide ingresar una oferta |

| Se ingresa una oferta | El sistema comunica que se ha procesado exitosamente la oferta. Se congela el monto de dinero ofertado de la cuenta del usuario. Se actualiza la información de la subasta |

### Cursos alternativos:

- Si justo al ofertar, otra persona hace la misma oferta un segundo antes, el sistema notifica luego de hacer “click” en boton “Ofertar” que la oferta ha subido de precio


==========================================================


## User Story #4 - Venta de NFT

### Narrativa
- **Como:** Usuario de la aplicación
- **Quiero:** Vender un NFT
- **Para:** Generar dinero

### Criterios de aceptación:
- El sistema procesa la venta exitosamente y el usuario es notificado
- Se lista el artículo exitosamente en “NFT Marketplace” o “Colecciones”



## Use Case #4 - Vender un NFT

**Actor:** usuario
#### Curso normal para narrativa:

| **Acción de los actores**        | **Respuesta del sistema**           |
| ------------- |:-------------:|
| Desde “Perfil” se selecciona el artículo que deseo vender o desde la sección “Ventas”, oprimo “Vender nuevo”  | Se abre una ventana “pop up” donde me muestra la información del NFT y opciones de venta| 

| Hago click en “Vender” | Se abre una ventana “pop up” donde pide ingresar precio de venta y un botón de “Confirmar venta” |

| Se oprime “Confirmar venta” | El sistema vuelve al “pop up” anterior que muestra la información del NFT y se le notifica al usuario que la solicitud fue procesada correctamente. Se ve listado el NFT a vender en la lista de ventas del usuario |

### Cursos alternativos:

- El usuario ingresa monto negativo o un String y el sistema le niega la venta notificando el motivo



=====================================================


## User Story #5 - Subasta de NFT

### Narrativa
- **Como:** Usuario de la aplicación
- **Quiero:** Vender mediante un NFT mediante una subasta
- **Para:** Generar dinero

### Criterios de aceptación:
- El sistema procesa la venta exitosamente y el usuario es notificado
- Se lista el artículo exitosamente en “NFT Marketplace” o “Colecciones”
- El sistema es responsivo y actualiza constantemente la información de la subasta cada vez que es modificada por una nueva oferta o el artículo es vendido



## Use Case #5 - Subasta un NFT

**Actor:** usuario
#### Curso normal para narrativa:

| **Acción de los actores**        | **Respuesta del sistema**           |
| ------------- |:-------------:|
| Desde “Perfil” selecciono el artículo que deseo subastar o desde la sección “Ventas”, oprimo “Vender nuevo” | Se abre una ventana “pop up” donde me muestra la información del NFT y opciones de venta| 

| Hago click en “Subastar” | Se abre una ventana “pop up” donde pide ingresar precio base de venta, tiempo de duración de la subasta, y un botón de “Confirmar subasta” |

| Se oprime “Confirmar subasta” | El sistema vuelve al “pop up” anterior que muestra la información del NFT y notifica al usuario que se ha procesado la solicitud correctamente. Se ve listado el NFT a vender en la lista de ventas del usuario |

### Cursos alternativos:

- El usuario ingresa monto negativo o un String y el sistema le niega la venta notificando el motivo
- El usuario ingresa una fecha de expiración de la subasta anterior a la fecha actual


=============================================================




## User Story #6 - Subir un NFT al perfil de usuario

### Narrativa
- **Como:** Usuario de la aplicación
- **Quiero:** Subir un NFT a mi usuario
- **Para:** Visualizarlo o venderlo

### Criterios de aceptación:
- El sistema procesa la acción exitosamente y el usuario es notificado
- Se lista el artículo exitosamente en “Perfil”



## Use Case #6 - Subir un NFT al Perfil de usuario

**Actor:** usuario
#### Curso normal para narrativa:

| **Acción de los actores**        | **Respuesta del sistema**           |
| ------------- |:-------------:|
| Desde la sección “Mis NFTs” dentro de “Perfil” se selecciona “Agregar nuevo” | Se abre una ventana “pop up” donde me muestran distinto campos para ingresar información del NFT y una opción para subir un archivo | 

| Hago click en “Cargar NFT” | Se abre la biblioteca del escritorio de la computadora |

| Se oprime “Cargar” | El sistema vuelve al “pop up” anterior que muestra la información del NFT y se ve el archivo cargado. |

| Se oprime el botón “Subir NFT” | Se ve listado el NFT en la sección “Mis NFTs” de “Perfil”
|
### Cursos alternativos:

- El usuario no agrega una descripción y el sistema le niega subir el NFT ya que es información requerida 
- El usuario no carga un archivo y el sistema le niega subir el NFT ya que es información requerida




====================================================


## User Story #7- Crear una colección

### Narrativa
- **Como:** Usuario de la aplicación
- **Quiero:** Crear colección
- **Para:** Tener colecciones disponibles para la venta, o visualización de las mismas.

### Criterios de aceptación:
- El sistema añade la nueva colección exitosamente a la lista de colecciones bajo el perfil del usuario


## Use Case #7 - Crear una colección en mi perfil

**Actor:** usuario
#### Curso normal para narrativa:

| **Acción de los actores**        | **Respuesta del sistema**           |
| ------------- |:-------------:|
Se abre una ventana “pop up” donde me muestran distinto campos para ingresar información del NFT y una opción para subir un archivo | 

| Hago click en “Cargar NFT” | Se abre la biblioteca del escritorio de la computadora |

| Se oprime “Cargar” | El sistema vuelve al “pop up” anterior que muestra la información del NFT y se ve el archivo cargado.

### Cursos alternativos:

- El usuario debe subir al menos 2 NFTs para crear una colección, de lo contrario se le negara la creación de la misma y se le notificará el motivo
- Todo NFT subido dentro de la colección debe tener sí o sí una descripción y un archivo cargado, de lo contrario se le negara la creación de la misma y se le notificará el motivo




=========================================================


## User Story #8 - Pestaña de rankings

### Narrativa
- **Como:** Usuario de la aplicación
- **Quiero:** Visualizar rankings de ventas, colecciones y artistas.
- **Para:** Satisfacer mi curiosidad 

### Criterios de aceptación:
- El sistema carga los rankings correctamente


## Use Case #8 - Pestaña de rankings

**Actor:** usuario
#### Curso normal para narrativa:

| **Acción de los actores**        | **Respuesta del sistema**           |
| ------------- |:-------------:|
| Selecciono un NFT del ranking     | Se abre un “pop up” y se muestra toda la información del NFT |

| Al navegar cada sección de la página de rankings  | Se ve información del NFT relacionada a ventas (ejemplo: costo de venta, cantidad ventas etc) |
