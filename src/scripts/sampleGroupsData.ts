import { GroupModel } from "../db/repo/group/group.model";
import { connectToDB, disconnectFromDB } from "../db/initialize";

(async () => {
	connectToDB();
	const groups = [
		{
			name: "me",
			groups: [],
			persons: []
		},
		{
			name: "you",
			groups: [],
			persons: []
		},
		{
			name: "Friends",
			groups: [],
			persons: []
		},
		{
			name: "Games",
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
	} catch (err) {
		console.log(err.message);
	}
})();