import { GroupModel } from "../db/repo/group/group.model";
import { connectToDB, disconnectFromDB } from "../db/initialize";

(async () => {
	connectToDB();
	const groups = [
		{
			groupName: "me",
			groups: [],
			persons: []
		},
		{
			groupName: "you",
			groups: [],
			persons: []
		},
		{
			groupName: "Friends",
			groups: [],
			persons: []
		},
		{
			groupName: "Games",
			groups: [],
			persons: []
		}
	];

	try {
		for (const group of groups) {
			await GroupModel.create(group);
			console.log(`Created Group ${group.groupName}`);
		}

		disconnectFromDB();
	} catch (err) {
		console.log(err.message);
	}
})();