import {
  ApolloProvider,
  // useQuery
} from "@apollo/react-hooks";
import ApolloClient from "apollo-boost"; //  { gql }
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "https://metaphysics-production.artsy.net",
});

// const POPULAR_ARTISTS = gql`
//   {
//     popular_artists {
//       artists {
//         name
//       }
//     }
//   }
// `;

// const PopularArtists = () => {
//   const { loading, error, data } = useQuery(POPULAR_ARTISTS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.popular_artists.artists.map((artist) => (
//     <div key={artist.name}>
//       <p>artist: {artist.name}</p>
//       <p>category: {artist.name}</p>
//     </div>
//   ));
// };

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <App />
      {/* <PopularArtists /> */}
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
