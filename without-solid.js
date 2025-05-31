class OrderProccesor {
    constructor(orderData) {
        this.orderData = orderData;
    }

    validOrder() {
        if (!this.orderData.items || this.orderData.items.length === 0) {
            throw new Error('Order must have at least  one item');
        }
    }

    calculateTotal() {
        return this.orderData.items.reduce((sum, item) => sum + item.price * item.quantity);
    }

    saveOrder() {
        const fs = require('fs');
        fs.writeFileSync('order.json', JSON.stringify(this.orderData));
    }

    sendConfirmationEmail() {
        console.log(`Sending email to ${this.orderData.customerEmail}...`);
    }

    proccesOrder() {
        this.validOrder();
        const total = this.calculateTotal();
        this.saveOrder();
        this.sendConfirmationEmail();
        return total;
    }
};

const orderData = {
    customerEmail: 'user@example.com',
    items: [
        { name: 'Laptop', price: 1200, quantity: 1 },
        { name: 'Mouse', price: 25, quantity: 2 }
    ]
};

const proccesor = new OrderProccesor(orderData);
console.log('Total:', proccesor.proccesOrder());