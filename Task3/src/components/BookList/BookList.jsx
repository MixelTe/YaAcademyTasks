import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadBooksIfNotExist } from "../../store/book/loadIfNotExist";
import { selectBooksByCategoryId } from "../../store/book/selectors"
import { selectCartBooks } from "../../store/cart/selectors";
import { BookCard } from "../BookCard/BookCard"
import styles from "./styles.module.css"


export function BookList({ categoryId, displayCart })
{
	const dispatch = useDispatch();
	const selector = displayCart ? selectCartBooks : selectBooksByCategoryId(categoryId);
	const books = useSelector(selector);

	useEffect(() =>
	{
		if (!displayCart) dispatch(loadBooksIfNotExist(categoryId));
	}, [categoryId, displayCart, dispatch]);

	return <div className={styles.root}>
		{
			books.map(book =>
				<BookCard key={book.id} book={book} link={true} />
			)
		}
	</div>
}
