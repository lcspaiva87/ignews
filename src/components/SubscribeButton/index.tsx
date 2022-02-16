import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router';
import { getStripeJs } from '../../pages/api/stripe-js';
import { api } from '../../services/api';
import styles from './styles.module.scss'

interface SubscribeButtonPorps {
    princeId: string;
}
export function SubscribeButton({ princeId }: SubscribeButtonPorps) {
    const [session] = useSession();
    const router = useRouter()
    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }
        if(session.activeSubscription){
            router.push('/posts')
            return;
        }
        //criar checkout session
        try {
            const response = await api.post('/subscribe');

            const { sessionId } = response.data;

            const stripe = await getStripeJs();

            await stripe.redirectToCheckout({
                sessionId
            });
        } catch (err) {
            console.log("err:", err)
            alert(err.message)
        }
    }
    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            subscribe now
        </button>
    )
}