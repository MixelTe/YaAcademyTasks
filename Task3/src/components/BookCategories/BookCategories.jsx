import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { classnames } from "../../classnames";
import { selectCategories, selectIsCategoryLoading } from "../../store/category/selectors";
import { Placeholder } from "../Placeholder/Placeholder";
import styles from "./styles.module.css"


export function BookCategories({ activeCategoryId })
{
	const categories = useSelector(selectCategories);
	const categoriesIsLoading = useSelector(selectIsCategoryLoading);

	if (categoriesIsLoading) return CreatePlaceholder();

	return <nav className={styles.root}>
		{
			categories.map(category =>
				<Link
					to={"/" + encodeURIComponent(category.id)}
					className={classnames(styles.item, activeCategoryId === category.id ? styles.item_selected : "")}
					key={category.id}
				>
					{category.name}
				</Link>
			)
		}
	</nav>
}

function CreatePlaceholder()
{
	return <nav className={styles.root}>
		{
			new Array(5).fill().map((_, i) => <Placeholder key={i} className={styles.item} />)
		}
	</nav>
}