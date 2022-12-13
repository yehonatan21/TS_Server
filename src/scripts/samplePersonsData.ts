import { PersonsModel } from "../db/repo/person/person.model";
import { connectToDB, disconnectFromDB } from "../db/initialize";

(async () => {
	connectToDB();
	const persons = [
		{
			firstName: "Rachel",
			lastName: "Green",
			age: 25,
			email: "a@gmail.com"
		},
		{
			firstName: "Ross",
			lastName: "Geller",
			age: 35,
			email: "b@gmail.com"
		},
		{
			firstName: "Chandler",
			lastName: "Bing",
			age: 40,
			email: "c@gmail.com"
		},
	];

	try {
		for (const person of persons) {
			await PersonsModel.create(person);
			console.log(`Created person ${person.firstName} ${person.lastName}`);
		}

		disconnectFromDB();
	} catch (err) {
		console.log(err.message);
	}
})();