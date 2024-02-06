import styles from "./ItemListContainer.module.css"

export const ItemListContainer = ({greeting}) => {
    return (
        <>
        <div className={`${styles.Cuerpo}`}>{greeting}</div>
        </>
    )
}