//this case violate Single Responsible principle, in class PriceCalculator must have 1 mission is calculate price but there is invoice bill in this class
abstract class PriceCalculator {
	protected price: number;
	protected type: string;

	CountPrice(): number {
		if (this.type === 'vip') {
			return this.price * 0.8;
		} else {
			return this.price * 0.9;
		}
	}

	InvoiceBill(): void {
		console.log(this.price);
	}
}
//we can sovle this problem by adding new class invoice
class PriceCalculator {
	protected price: number;
	protected type: string;

	CountPrice(): number {
		if (this.type === 'vip') {
			return this.price * 0.8;
		} else {
			return this.price * 0.9;
		}
	}
}
class InvoiceBill {
	protected price: number;

	InvoiceBill(): void {
		console.log(this.price);
	}
}
