import Layout from '../comps/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = ({ show }) => (
  <li key={show.id}>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = (props) => (
  <Layout>
    <h1>X-Men TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <PostLink key={show.id} show={show}/>
      ))}
    </ul>
    <style jsx>
      {`
        h1, a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }
        
        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=x-men');
  const data = await res.json();

  console.log('Fetched Data Count:', data.length);

  return {
    shows: data,
  }
}


export default Index;
