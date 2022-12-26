import TemplateDefault from "./components/Template/Default";
import avatar from "../src/assets/img/avatar-paulo.png";
import styles from "./styles/App.module.css";

const App = () => {
	return (
		<TemplateDefault>
			<main className={styles.content}>
				<div className={styles.profile}>
					<div className={styles.avatar}>
						<img src={avatar} alt="avatar Paulo" />
					</div>
					<h1>@paulo_devmais</h1>
				</div>
				<div>
					<ul>
						<li>lista de links</li>
					</ul>
				</div>
			</main>
		</TemplateDefault>
	);
};

export default App;
