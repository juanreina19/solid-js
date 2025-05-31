// Interfaces 
class OrderSaver {
    save(orderData) {
        throw new Error("Not implemented");
    }
}

class Notifier {
    send(message) {
        throw new Error("Not implemented");
    }
}

// Implementación de OrderSaver
class FileOrderSaver extends OrderSaver {
    save(orderData) {
        const fs = require('fs');
        fs.writeFileSync('order.json', JSON.stringify(orderData));
    }
}

// Implementación de Notifier
class EmailNotifier extends Notifier {
    send(message) {
        console.log(`Sending email: ${message}`);
    }
}

class SMSNotifier extends Notifier {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}


