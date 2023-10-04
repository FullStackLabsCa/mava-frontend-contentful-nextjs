import styles from '../styles/Home.module.css';
import { createClient } from 'contentful';

export async function getStaticProps() {
  const client = createClient({
    space: 'r00bzextvdf9',
    accessToken: 'EMvKKbOWRbP03KJbo2JJ_U0NQ6IiN71P3wfAz09oJhQ',
  });

  const response = await client.getEntries({ content_type: 'author' });
  
  const items = response.items.map(item => {
    return {
      id: item.sys.id,
      name: item.fields.name ?? null,
      media: item?.fields?.media ?? null,
      books: item?.fields.books ?? null,
    };
  });

  return {
    props: {
      items,
    },
  };
}

export default function Home({items}) {
  return (
    <div className={styles.container}>
      <main>
       <div>
       {items.map((item) => {
    return (
      <div key={item.id}>
        {item.name}
      </div>
    );
  })}
    </div>
      </main>
    </div>
  )
}
