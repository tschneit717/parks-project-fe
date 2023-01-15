import { IDENTITY_API } from 'src/constants/users';

export default async function (userId: string) {
	const resp = await fetch(`${IDENTITY_API}/user?id=${userId}`, {
		method: 'GET'
	});
	return resp;
}
