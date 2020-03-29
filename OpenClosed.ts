// this is problem when we add new type of customer we will violate Open-closed principle is breaking changes to existing functionality
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

// solution is divide it into classes

class VipCustomer {
	name: string;

	CountPrice(price: number): number {
		return price * 0.8;
	}
}
class MemberCustomer {
	name: string;

	CountPrice(price: number): number {
		return price * 0.9;
	}
}
