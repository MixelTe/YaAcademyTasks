import * as http from 'http';
import { Api } from './api';
import './tests';
import './listeners';


const server = http.createServer(async (req, res) =>
{
	if (req.url)
	{
		const apiRes = await Api.process(req.url);
		res.writeHead(apiRes.status, { 'Content-Type': 'application/json' });
		res.write(apiRes.body);
	}
	else
	{
		res.writeHead(500, { 'Content-Type': 'application/json' });
	}
	res.end();
});

const port = 3001;
console.log(`Start server on http://localhost:${port}`);
server.listen(port);
