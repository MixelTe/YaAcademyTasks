import { useState } from "react"
import { BookCategories } from "../../components/BookCategories/BookCategories"
import { BookList } from "../../components/BookList/BookList"
import { Card } from "../../components/Card/Card"
import styles from "./styles.module.css"


export function StorePage({ books, categories })
{
	const [activeCategory, setActiveCategory] = useState(1);

	return <main className={styles.main}>
		<Card className={styles.panel}>
			<BookCategories
				categories={categories}
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
			/>
		</Card>
		<BookList books={books.filter(book => book.category === activeCategory)} />
	</main>
}