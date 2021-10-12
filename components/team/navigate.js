import styles from '../../styles/local/components/team.module.css'

export function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <img onClick={props.onClick} src="images/left-arrow2.svg" alt="previous" className={["arrow arrow--left", styles.arrowLeft].join(" ")+ disabeld} />
    )
}
export function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <img onClick={props.onClick} src="images/right-arrow2.svg" alt="next" className={["arrow arrow--right ", styles.arrowRight].join(" ")+ disabeld} />
    )
}