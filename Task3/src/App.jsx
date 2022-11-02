import { Layout } from "./components/Layout/Layout"
import { StorePage } from "./pages/StorePage/StorePage"
import { BookPage } from "./pages/BookPage/BookPage"
import { NotFoundPage } from "./pages/NotFoundPage/NotFound"
import { CartPage } from "./pages/CartPage/CartPage"
import { books, categories } from "./constants/mock"
import { BrowserRouter, Route, Routes } from "react-router-dom"


export function App()
{
	return <BrowserRouter>
		<Layout>
			<Routes>
				<Route index element={<StorePage categories={categories} books={books} />} />
				<Route path="/:categoryId" element={<StorePage categories={categories} books={books} />} />
				<Route path="/book/:bookId" element={<BookPage books={books} />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Layout>
	</BrowserRouter>
}