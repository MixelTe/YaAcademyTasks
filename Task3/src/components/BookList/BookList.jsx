import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadBooksIfNotExist } from "../../store/book/loadIfNotExist";
import { selectBooksByCategoryId, selectIsBookLoading } from "../../store/book/selectors"
import { selectCartBooks } from "../../store/cart/selectors";
import { BookCard } from "../BookCard/BookCard"
import { Placeholder } from "../Placeholder/Placeholder";
import styles from "./styles.module.css"


export function BookList({ categoryId, displayCart })
{
	const dispatch = useDispatch();
	const selector = displayCart ? selectCartBooks : selectBooksByCategoryId(categoryId);
	const books = useSelector(selector);
	const bookIsLoading = useSelector(selectIsBookLoading);

	useEffect(() =>
	{
		if (!displayCart) dispatch(loadBooksIfNotExist(categoryId));
	}, [categoryId, displayCart, dispatch]);

	if (bookIsLoading) return CreatePlaceholder();

	return <div className={styles.root}>
		{
			books.map(book =>
				<BookCard key={book.id} book={book} link={true} />
			)
		}
	</div>
}

function CreatePlaceholder()
{
	return <div className={styles.root}>
		{
			new Array(3).fill().map((_, i) => <Placeholder key={i} className={styles.item} height="208px" rounded />)
		}
	</div>
}
