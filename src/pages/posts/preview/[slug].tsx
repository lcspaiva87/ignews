import { GetStaticProps } from "next"

import Head from "next/head"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../../services/prismicConfiguration";

import styles from '../post.module.scss'

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  console.log("post",post)
  return (
    <>
      <Head>
        {/* <title>{post.title} | Ignews</title> */}
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          {/* <h1>{post.title}</h1> */}
          {/* <time>{post.updatedAt}</time> */}
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getStaticpaths = () => {
  return {
    paths: [],
    fallback:'blocking'
  }
}

export const getSaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params;


  const prismic = getPrismicClient();

  const response = await prismic.getByUID<any>('publication', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0,3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  };

  return {
    props: {
      post
    }
  }

}