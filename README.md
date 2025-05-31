# 🧠 Principios SOLID en JavaScript

Este repositorio contiene un ejemplo simple que muestra cómo aplicar los principios **SOLID** en JavaScript, con un enfoque educativo.

## 📁 Archivos

- `without-solid.js`: Versión original del código, donde una clase realiza múltiples tareas (validar, calcular, guardar y notificar), violando varios principios SOLID.
- `with-solid.js`: Versión refactorizada que aplica los principios SOLID correctamente.

## 🛠️ Principios aplicados

- **SRP (Single Responsibility Principle)**:  
  La clase `OrderProcessor` ahora se encarga **únicamente** de coordinar el procesamiento de la orden (validar y calcular). Las responsabilidades de guardar la orden y enviar notificaciones fueron delegadas a clases externas.

  > Aunque `OrderProcessor` tiene varios métodos, todos forman parte de una única responsabilidad: **procesar una orden**. Por eso **no se incumple SRP**.

- **OCP (Open/Closed Principle)**:  
  Se pueden agregar nuevos tipos de notificaciones (como `SMSNotifier`) sin modificar la clase principal.

- **DIP (Dependency Inversion Principle)**:  
  En lugar de depender directamente de `fs` o `console.log`, se inyectan dependencias como `OrderSaver` y `Notifier`.

## 🧪 Cómo probar el código

1. Asegúrate de tener **Node.js** instalado.
2. Ejecuta en la terminal:

```bash
node without-solid.js  # Para ver el código sin SOLID
node with-solid.js     # Para ver el código refactorizado
```

## 📚 Propósito
Este proyecto tiene fines educativos, para entender cómo estructurar mejor tu código aplicando principios SOLID y mantenerlo escalable, mantenible y menos acoplado. (Taller de Universidad)

_**Made by:** Juan David Reina_
