export function prepareData(items)
{
	return {
		entities: items.reduce((v, item) =>
		{
			v[item.id] = item;
			return v;
		}, {}),
		ids: items.map(item => item.d),
	}
}

export async function Wait()
{
	return new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 500 + 1000)));
}
