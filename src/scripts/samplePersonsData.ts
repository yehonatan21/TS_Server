import { PersonsModel } from "../Persons/persons.model";
import { connect, disconnect } from "../database/database";

(async () => {
	connect();
	// Via "sampleEmployeeData.ts" we can add data to Mongoose schema. Our schema name is persons
	const employees = [
		{
			firstName: "Rachel", lastName: "Green", age: 25,
			email: "a"
		},
		{
			firstName: "Monica", lastName: "Geller", age: 25,
			gender: "Female", department: "Catering"
		},
		{
			firstName: "Phebe", lastName: "Buffay", age: 25,
			gender: "Female", department: "Masus"
		},
		{
			firstName: "Ross", lastName: "Geller", age: 30,
			gender: "Male", department: "Paleontology"
		},
		{
			firstName: "Chandler", lastName: "Bing", age: 30,
			gender: "Male", department: "IT"
		},
		{
			firstName: "Joey", lastName: "Tribbiani", age: 30,
			gender: "Male", department: "Dramatist"
		},
	];

	try {
		for (const employee of employees) {
			await PersonsModel.create(employee);
			console.log(`Created employee ${employee.firstName} ${employee.lastName}`);
		}

		disconnect();
	} catch (e) {
		console.log(e);
	}
})
();
