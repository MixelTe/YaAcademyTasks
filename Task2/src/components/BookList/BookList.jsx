import { BookCard } from "../BookCard/BookCard"
import styles from "./styles.module.css"


export const BookList = ({ books }) =>
{
	return <div className={styles.root}>
		{
			books.map(book =>
				<BookCard key={book.id} book={book} />
			)
		}
	</div>
}
