import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismicConfiguration'
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'
export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>ReactJS • 11 de Nov de 2020</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações web e mobile. Pode ser simplesmente integrada a um site usando apenas HTML, CSS e JavaScript.

                            Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.

                            Somando todas essas tecnologias e conceitos, no final deste post vamos ter desenvolvido o app Entregas. Vai ser assim:</p>
                    </a>
                    <a href="#">
                        <time>ReactJS • 11 de Nov de 2020</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações web e mobile. Pode ser simplesmente integrada a um site usando apenas HTML, CSS e JavaScript.

                            Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.

                            Somando todas essas tecnologias e conceitos, no final deste post vamos ter desenvolvido o app Entregas. Vai ser assim:</p>
                    </a>
                    <a href="#">
                        <time>ReactJS • 11 de Nov de 2020</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações web e mobile. Pode ser simplesmente integrada a um site usando apenas HTML, CSS e JavaScript.

                            Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.

                            Somando todas essas tecnologias e conceitos, no final deste post vamos ter desenvolvido o app Entregas. Vai ser assim:</p>
                    </a>
                    <a href="#">
                        <time>ReactJS • 11 de Nov de 2020</time>
                        <strong>Mapas com React usando Leaflet</strong>
                        <p>Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações web e mobile. Pode ser simplesmente integrada a um site usando apenas HTML, CSS e JavaScript.

                            Podemos também integrar a Leaflet ao React com a biblioteca React Leaflet, que tem suporte ao TypeScript sendo bastante simples de utilizar. Ambas serão utilizadas em nossa aplicação de demonstração.

                            Somando todas essas tecnologias e conceitos, no final deste post vamos ter desenvolvido o app Entregas. Vai ser assim:</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ], 
    { fetch: ['publication.title', 'publication.content'], 
    pageSize: 100 })
    console.log("response",response)
    return{
        props:{}
    }
}