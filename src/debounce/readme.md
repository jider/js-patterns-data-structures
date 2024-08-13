# Debounce
La función "debounce" recibe un callback y un parametro de delay.
La función de callback solo se va a ejecutar cuando el usuario haya dejado de realizar cambios y se haya cumplido el delay.

Muy util para mejorar el rendimiento de la web cuando tenemos procesos que realizan solicitudes al servidor,
o que tienen carga de trabajo pesadas y no queremos que se ejecuten cada vez que el usuario realiza la acción repetidamente.
e.g.
  Entradas de texto con autocomplete
  Entradas de texto con búsqueda automática en el servidor
  Filtrados automáticos