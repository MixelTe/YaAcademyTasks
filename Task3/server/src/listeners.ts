import { Api, Listener } from "./api";


Api.addListener("/", async req =>
{
	req.setStatus(200);
	req.write(JSON.stringify({
		"/category": [{ id: "string", name: "string" }],
		"/book": [{ id: "number", title: "string" }],
		"/book?id": { id: "number", title: "string", categoryId: "string", author: "string", genre: "string", rating: "number", price: "number", annotation: "string" },
		"/book?categoryId": [{ id: "number", title: "string", categoryId: "string", author: "string", genre: "string", rating: "number", price: "number", annotation: "string" }],
		"/review": [{ id: "number", userId: "number", rating: "number", text: "string" }],
		"/review?id": { id: "number", userId: "number", rating: "number", text: "string" },
		"/user": [{ id: "number", name: "string" }],
		"/user?id": { id: "number", name: "string" },
	}, undefined, 4));
});


Api.addListener("/category", SqlListener(
	`SELECT id, name
	FROM Category
`, []));

Api.addListener("/book?id", SqlListener(
	`SELECT b.id, b.title, b.categoryId, b.author, g.title as genre, b.rating, b.price, b.annotation
	FROM Book as b
	INNER JOIN Genre as g on b.genreId = g.id
	WHERE b.id = ?
`, ["id"], true));

Api.addListener("/book?categoryId", SqlListener(
	`SELECT b.id, b.title, b.categoryId, b.author, g.title as genre, b.rating, b.price, b.annotation
	FROM Book as b
	INNER JOIN Genre as g on b.genreId = g.id
	WHERE b.categoryId = ?
`, ["categoryId"]));


Api.addListener("/book", SqlListener(
	`SELECT id, title
	FROM Book
`, []));

Api.addListener("/review?id", SqlListener(
	`SELECT id, userId, rating, text
	FROM Review
	WHERE id = ?
`, ["id"], true));

Api.addListener("/review", SqlListener(
	`SELECT id, userId, rating, text
	FROM Review
`, []));

Api.addListener("/user?id", SqlListener(
	`SELECT id, name
	FROM User
	WHERE id = ?
`, ["id"], true));

Api.addListener("/user", SqlListener(
	`SELECT id, name
	FROM User
`, []));


function SqlListener(sql: string, queryParams: string[], first = false): Listener
{
	return async req =>
	{
		const params: string[] = [];
		for (const paramKey of queryParams)
		{
			const v = req.query[paramKey];
			if (!v)
			{
				req.write(JSON.stringify({ error: `param ${paramKey} is undefined` }, undefined, 4));
				req.setStatus(500);
				return;
			}
			params.push(typeof v == "object" ? v[0] : v);
		}

		let res;
		if (first) res = await Api.db.first(sql, params);
		else res = await Api.db.all(sql, params);

		if (res === null) return req.setStatus(500);
		if (res === undefined) return req.setStatus(404);

		req.setStatus(200);
		req.write(JSON.stringify(res, undefined, 4));
	}
}
