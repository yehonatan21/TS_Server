import { GroupModel } from "../db/repo/group/group.model";
import { connectToDB, disconnectFromDB } from "../db/initialize";

(async () => {
	connectToDB();
	const groups = [
		{
			name: "Freinds",
			age: 25,
			email: "a@gmail.com",
			groups: [],
			persons: []
		}
	];

	try {
		for (const group of groups) {
			await GroupModel.create(group);
			console.log(`Created Group ${group.name}`);
		}

		disconnectFromDB();
	} catch (e) {
		console.log(e);
	}
})();