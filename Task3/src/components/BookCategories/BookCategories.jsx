import { Link } from "react-router-dom";
import { classnames } from "../../classnames";
import styles from "./styles.module.css"


export function BookCategories({ categories, activeCategory, setActiveCategory })
{
	return <nav className={styles.root}>
		{
			categories.map(category =>
				<Link
					to={"/" + encodeURIComponent(category.id)}
					className={classnames(styles.item, activeCategory === category.id ? styles.item_selected : "")}
					key={category.id}
					onClick={() => setActiveCategory(category.id)}
				>
					{category.name}
				</Link>
			)
		}
	</nav>
}
