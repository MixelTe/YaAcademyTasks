const useServer = true
export const serverIP = useServer ? "http://localhost:3001" : null;

export function prepareData(items)
{
	return {
		entities: items.reduce((v, item) =>
		{
			item.id = `${item.id}`;
			v[item.id] = item;
			return v;
		}, {}),
		ids: items.map(item => item.id),
	}
}

export async function Wait()
{
	return new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 500 + 1000)));
}
