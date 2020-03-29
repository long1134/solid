// We know that only boss can add new staff, this case salesman can add new staff making error
class Staff {
	addStaff() {}
	CheckProfile() {}
}

class Boss extends Staff {
	addStaff() {}
	CheckProfile() {}
}

class Salesman extends Staff {
	addStaff() {}
	CheckProfile() {}
}

// Instead we could create another interface called IAdmin that has the AddStaff function
interface IAdmin {
	AddStaff();
}

class Staff {
	CheckProfile() {}
}

class Boss extends Staff implements IAdmin {
	AddStaff() {}
	CheckProfile() {}
}

class Salesman extends Staff {
	CheckProfile() {}
}
