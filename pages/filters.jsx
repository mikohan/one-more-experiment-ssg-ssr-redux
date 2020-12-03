import Nav from '../components/nav';

export default function Filters(props) {
  return (
    <div>
      <Nav />
      <h1>Filters Page</h1>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
  );
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getStaticProps() {
  // Note that in this case we're returning the state directly, without creating
  // the store first (like in /pages/ssr.js), this approach can be better and easier
  return {
    revalidate: 10,
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        light: false,
      },
    },
  };
}

