import { IDENTITY_API } from 'src/constants/users';

interface RegistrationBody {
	userName: string;
	password: string;
	name: string;
}

export default async function (body: RegistrationBody) {
	const resp = await fetch(`${IDENTITY_API}/user/register`, {
		method: 'POST',
		body: JSON.stringify(body)
	});
	return resp;
}
