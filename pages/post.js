import Layout from '../comps/MyLayout.js';
import fetch from 'isomorphic-fetch';

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/[/]?p/g, '')}</p>
    <img src={props.show.image.medium}/>
  </Layout>
);


Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show}`);

  return { show }
}

export default Post
