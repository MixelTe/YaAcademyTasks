import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { BookCategories } from "../../components/BookCategories/BookCategories"
import { BookList } from "../../components/BookList/BookList"
import { Card } from "../../components/Card/Card"
import { loadCategoriesIfNotExist } from "../../store/category/loadIfNotExist"
import { selectCategories } from "../../store/category/selectors"
import styles from "./styles.module.css"


export function StorePage()
{
	const { categoryId } = useParams();
	const categories = useSelector(selectCategories);
	const dispatch = useDispatch()
	const activeCategoryId = categoryId || categories[0]?.id || "";

	useEffect(() => { dispatch(loadCategoriesIfNotExist) }, []);

	return <main className={styles.main}>
		<Card className={styles.panel}>
			<BookCategories activeCategoryId={activeCategoryId} />
		</Card>
		<BookList categoryId={activeCategoryId} />
	</main>
}