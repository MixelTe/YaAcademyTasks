import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadBooksIfNotExist } from "../../store/book/loadIfNotExist";
import { selectBooksByCategoryId } from "../../store/book/selectors"
import { BookCard } from "../BookCard/BookCard"
import styles from "./styles.module.css"


export function BookList({ categoryId })
{
	const dispatch = useDispatch();
	const books = useSelector(selectBooksByCategoryId(categoryId));

	useEffect(() => { dispatch(loadBooksIfNotExist(categoryId)) }, [categoryId]);

	return <div className={styles.root}>
		{
			books.map(book =>
				<BookCard key={book.id} book={book} link={true} />
			)
		}
	</div>
}
