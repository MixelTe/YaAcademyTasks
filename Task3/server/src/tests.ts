import { Api } from "./api";


Api.addListener("/test?paramA&paramB", async req =>
{
	req.setStatus(200);
	req.write(JSON.stringify({
		paramA: req.query["paramA"],
		paramB: req.query["paramB"],
	}, undefined, 4));
});

Api.addListener("/test?paramA", async req =>
{
	req.setStatus(200);
	req.write(JSON.stringify({
		paramA: req.query["paramA"],
	}, undefined, 4));
});

Api.addListener("/test", async req =>
{
	req.setStatus(200);
	req.write(JSON.stringify({
		result: "Accept paramA and paramB",
	}, undefined, 4));
});
