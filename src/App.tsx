import TemplateDefault from "./components/Template/Default";

import menuList from "./constants/menu-list";
import avatar from "../src/assets/img/avatar-paulo.png";
import styles from "./styles/App.module.css";

const App = () => {
	return (
		<>
			<TemplateDefault>
				<main className={styles.content}>
					<div className={styles.profile}>
						<div className={styles.avatar}>
							<img src={avatar} alt="avatar Paulo" />
						</div>
						<h1>@paulo_devmais</h1>
					</div>
					<div className={styles.links_box}>
						<ul>
							{menuList.map((link) => (
								<li className={styles.listItem} key={link.id}>
									<a href={link.path}>
										<h3>{link.name}</h3>
										<p>{link.description}</p>
									</a>
								</li>
							))}
						</ul>
					</div>
					<footer className={styles.footer}>
						Este aplicativo foi criado por Dev++
					</footer>
				</main>
			</TemplateDefault>
		</>
	);
};

export default App;
