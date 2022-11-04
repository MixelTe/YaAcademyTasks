import * as Url from 'url';
import { DataBase } from './database';


class API
{
	private listeners: ListenerData[] = [];
	public db = new DataBase("../data/bookStore.db");

	public async process(url: string): Promise<ApiResponse>
	{
		const urlParsed = Url.parse(url, true);
		if (!urlParsed.pathname) return r404;

		for (const listener of this.listeners)
		{
			if (this.checkListener(listener, urlParsed.pathname, urlParsed.query))
			{
				const processer = this.createProcesser(urlParsed.query);
				await listener.listener(processer.request);
				return processer.response
			}
		}
		return r404;
	}

	public addListener(path: string, listener: Listener)
	{
		const pathSplited = path.split("?");
		this.listeners.push({
			listener,
			path: pathSplited[0],
			reqParams: pathSplited.length == 2 ? pathSplited[1].split("&") : [],
		});
	}

	private checkListener(listener: ListenerData, path: string, params: Query)
	{
		if (listener.path != path) return false;
		for (const param of listener.reqParams)
		{
			if (!Object.prototype.hasOwnProperty.call(params, param)) return false;
		}
		return true;
	}

	private createProcesser(query: Query): ApiProcesser
	{
		const processer = {
			response: {
				status: 500,
				body: "",
			},
			request: {
				query,
				setStatus: (status: number) => processer.response.status = status,
				write: (value: string) => processer.response.body += value,
			}
		}
		return processer;
	}
}
const r404 = {
	status: 404,
	body: '{"error": "Page not found"}',
}

interface ApiProcesser
{
	response: ApiResponse,
	request: ApiRequest,
}

interface ApiRequest
{
	query: Query,
	setStatus: (status: number) => void;
	write: (value: string) => void;
}

interface ApiResponse
{
	status: number,
	body: string,
}

type Query = { [key: string]: string | string[] | undefined };
export type Listener = (req: ApiRequest) => Promise<void>;
interface ListenerData
{
	listener: Listener,
	path: string,
	reqParams: string[],
}

export const Api = new API();
