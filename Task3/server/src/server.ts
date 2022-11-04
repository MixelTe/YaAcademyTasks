import * as http from 'http';
import { Api } from './api';
import './tests';
import './listeners';

const headers = {
	'Content-Type': 'application/json',
	"Access-Control-Allow-Origin": "*"
};

const server = http.createServer(async (req, res) =>
{
	if (req.url)
	{
		const apiRes = await Api.process(req.url);
		res.writeHead(apiRes.status, headers);
		res.write(apiRes.body);
	}
	else
	{
		res.writeHead(500, headers);
	}
	res.end();
});

const port = 3001;
console.log(`Start server on http://localhost:${port}`);
server.listen(port);
