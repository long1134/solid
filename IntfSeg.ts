// We know that only admin or boss can add new staff, this interface will force the staff class to implement a method that it has no use of
interface IStaff {
	addStaff();
	CheckProfile();
}

// Instead we could create another interface called IAdmin that has the AddStaff function
interface IAdmin {
	AddStaff();
}

interface IStaff {
	CheckProfile();
}

class Admin implements IAdmin, IStaff {
	AddStaff() {}
	CheckProfile() {}
}

class Staff implements IStaff {
	CheckProfile() {}
}
