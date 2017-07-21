import Layout from '../comps/MyLayout.js';
import fetch from 'isomorphic-fetch';

const Post = (props) => (
  <Layout>
    <h1 className="showName">{props.show.name}</h1>
    <p className="showSummary">{props.show.summary.replace(/[/]?p/g, '')}</p>
    <img className="showImage" src={props.show.image.medium}/>
    <style jsx global>{`
     .showName, .showSummary{
       font-family: 'Arial';
     }

     .showSummary {
       text-decoration: none;
       color: blue;
     }

     .showImage{
       height: auto;
     }
  `}</style>
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
