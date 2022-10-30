import { Layout } from "./components/Layout/Layout"
import { StorePage } from "./pages/StorePage/StorePage"
import { books, categories } from "./constants/mock"
import { BookPage } from "./pages/BookPage/BookPage"


export function App()
{
	return <Layout>
		{/* <StorePage categories={categories} books={books} /> */}
		<BookPage book={books[0]} />
	</Layout>
}