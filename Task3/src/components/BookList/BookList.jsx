import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadBookById, loadBooksIfNotExist } from "../../store/book/loadIfNotExist";
import { selectBooksByCategoryId } from "../../store/book/selectors"
import { BookCard } from "../BookCard/BookCard"
import styles from "./styles.module.css"

import { cart } from "../../constants/mock";


export function BookList({ categoryId, displayCart })
{
	const dispatch = useDispatch();
	const selector = displayCart ? selectCartBooks : selectBooksByCategoryId(categoryId);
	const books = useSelector(selector);

	useEffect(() =>
	{
		const loader = displayCart ? loadCartBooks : loadBooksIfNotExist(categoryId);
		dispatch(loader);
	}, [categoryId, displayCart, dispatch]);

	return <div className={styles.root}>
		{
			books.map(book =>
				<BookCard key={book.id} book={book} link={true} />
			)
		}
	</div>
}

function selectCartBooks(state)
{
	const books = cart.map(item => item.bookId);
	return Object.values(state.book.entities).filter(book => books.indexOf(book.id) >= 0);
}
function loadCartBooks(dispatch, getState)
{
	cart.forEach(item => loadBookById(item.bookId)(dispatch, getState));
}
