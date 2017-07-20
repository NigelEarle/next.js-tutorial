import Layout from '../comps/MyLayout.js';
import Link from 'next/link';

const PostLink = (props) => (
  <div>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </div>
)

export default () => (
  <Layout>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
);
