import styles from "../../styles/Template.module.css";

interface TemplatesProps {
	children: React.ReactElement;
}

const TemplateDefault = ({ children }: TemplatesProps) => {
	return <div className={styles.container}>{children}</div>;
};

export default TemplateDefault;
