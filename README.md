# 4VGymApp

Una aplicación desarrollada en Angular para gestionar la agenda de actividades de un gimnasio. Permite organizar actividades por franjas horarias, asignar monitores, y administrar tanto las actividades como los monitores de manera eficiente.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)

## Requisitos

Este proyecto requiere los siguientes componentes:

- **Angular CLI**: Herramienta para gestionar el proyecto Angular.
- **Node.js y npm**: Para gestionar dependencias y scripts.
- **Bootstrap**: Para el diseño responsivo.
- **Angular Material**: Para componentes avanzados, como el calendario.

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_DIRECTORIO>

2. **Actualizar dependencias**:
   npm update
   npm install

3. **Instalar Bootstrap**:
   npm install bootstrap
   - Asegúrate de añadir las rutas de Bootstrap al archivo angular.json:
     ```
     "styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css", "src/styles.css"],
     "scripts": ["node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"]
     ```
4. **Agregar Angular Material
   ng add @angular/material (Sigue las instrucciones por defecto)

5. Iniciar el servidor de desarrollo:
   ng serve ([localhost:4200](http://localhost:4200))

## Uso

La aplicación cuenta con dos páginas principales: Actividades y Monitores.

Actividades:
  - Seleccionar Día y Franja Horaria: Elige un día específico y un horario para programar una actividad.
  - Añadir Actividad: Define los monitores (uno o dos) y el tipo de actividad.
  - Editar o Eliminar Actividad: Modifica o elimina actividades previamente programadas.

Monitores:
  - Gestión de Monitores: Añade, edita, o elimina monitores del sistema.
  - Filtrar Monitores: Busca monitores por nombre para facilitar la administración.
  
