import styles from './styles.module.scss'

interface SubscribeButtonPorps {
    princeId:string;
}
export function SubscribeButton({princeId}:SubscribeButtonPorps) {
    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            subscribe now
        </button>
    )
}