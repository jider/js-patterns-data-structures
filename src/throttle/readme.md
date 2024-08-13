# Throttle
La función "throttle" recibe un callback y un parametro de delay.
La función de callback se va a ejecutar directamente y posteriormente cada vez que el delay se cumpla teniendo en cuenta cual fue el último input,
hasta que no haya más cambios.

Muy util para mejorar el rendimiento de la web cuando tenemos procesos pesados que cambian constantemente, y que queremos ejecutar periodicamente
el cambio más reciente pero de forma controlada.
No queremos esperar hasta que la acción termina como en "debounce", queremos realizar la acción cuando se produce pero de forma controlada.
e.g.
  Cuando realizamos un resizing de la interfaz
  Alguna acción provocada por el scroll
  Acciones provocadas por el movimiento del ratón
  Drag & drop
