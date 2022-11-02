import { Layout } from "./components/Layout/Layout"
import { StorePage } from "./pages/StorePage/StorePage"
import { BookPage } from "./pages/BookPage/BookPage"
import { NotFoundPage } from "./pages/NotFoundPage/NotFound"
import { CartPage } from "./pages/CartPage/CartPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"


export function App()
{
	return <Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route index element={<StorePage />} />
					<Route path="/:categoryId" element={<StorePage />} />
					<Route path="/book/:bookId" element={<BookPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</Provider>
}