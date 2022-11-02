import { useState } from "react"
import { useParams } from "react-router-dom"
import { BookCategories } from "../../components/BookCategories/BookCategories"
import { BookList } from "../../components/BookList/BookList"
import { Card } from "../../components/Card/Card"
import styles from "./styles.module.css"


export function StorePage({ books, categories })
{
	const { categoryId } = useParams();
	const [activeCategory, setActiveCategory] = useState(categoryId || categories[0].id);

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