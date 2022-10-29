import { Layout } from "./components/Layout/Layout"
import { StorePage } from "./pages/StorePage/StorePage"
import { books, categories } from "./constants/mock"


export const App = () =>
{
	return <Layout>
		<StorePage categories={categories} books={books} />
	</Layout>
}