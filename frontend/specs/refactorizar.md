# Refactorizar

### Funcionalidad 1 - Filtro de rango de fechas en dashboard principal

#### Objetivo
Permitir al equipo de finanzas enfocarse en periodos concretos mediante un filtro por fecha de inicio y fecha de fin que impacte todo el dashboard.

#### Requerimiento funcional
- Agregar dos inputs de fecha en la parte superior del dashboard:
  - fecha_inicio
  - fecha_final
- Ambos campos son opcionales.
- Si ambos están vacíos, mostrar todos los datos disponibles.
- Si uno o ambos tienen valor, se deben aplicar como filtros en todas las consultas del dashboard.
- El formato enviado a la API debe ser YYYY-MM-DD.

#### Fuente de datos para rango válido
- Consumir GET /api/metrics/facets para obtener:
  - min_date
  - max_date
- Mostrar min_date y max_date cerca de los inputs como referencia visual de rango permitido.

#### Alcance técnico
- Aplicar fecha_inicio y fecha_final de forma consistente a todas las peticiones de datos del dashboard principal.
- Mantener sincronizado el estado del filtro para que todos los componentes usen exactamente el mismo rango activo.
- Reutilizar los tipos ya definidos en specs para respuestas de API cuando corresponda.

#### Criterios de aceptación
- El usuario puede seleccionar fecha de inicio, fecha de fin o ambas.
- El dashboard completo se actualiza según el rango seleccionado.
- Con ambos campos vacíos, se muestra el dataset completo.
- El rango disponible min_date y max_date se ve junto a los inputs.
- Las fechas se envían en formato YYYY-MM-DD.
- No hay cambios en endpoints de backend ni en reglas de negocio.

## No alcance
- No cambies nada del diseño visual actual
- No introduzcas librerias nuevas de estado o data fetching
- No modificar reglas de negocio actuales
- No cambies los endpoint de backend

