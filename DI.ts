//class payment like this is simply fine, but if you want to add more way to payment like VNPay, cash,... you will directly edit class payment
// which violate open closed principle
class Payment {
	exportPayment(Account, price) {}
}

function handlePayment(payment: Payment) {
	payment.exportPayment('account', 1000);
}

//to fix this we can create new interface IHandlePayment and 2 class implements from this
// by this way we can easily adding more way to payment without violating open closed principle
interface IHandlePayemnt {
	exportPayment(Account, price);
}

class MomoPayment implements IHandlePayemnt {
	exportPayment(Account, price) {}
}

class VNPayPayment implements IHandlePayemnt {
	exportPayment(Account, price) {}
}

class Payment {
	payment: IHandlePayemnt;
	setHandlePayment(payment: IHandlePayemnt) {
		this.payment = payment;
	}
}

function handlePayment(payment: Payment) {
	payment.setHandlePayment(new VNPayPayment());
	payment.setHandlePayment(new MomoPayment());
}
