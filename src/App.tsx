import { useState } from "react";
import { gql } from "@apollo/client";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/modules/Header/Header";
import { Route, Routes, Link } from "react-router-dom";

// Pages
import NotFound from "./components/pages/404NotFound/NotFound";
import LaunchesPage from "./components/pages/LaunchesPage/LaunchesPage";
import HomePage from "./components/pages/HomePage/HomePage";

// import { ApolloProvider } from "react-apollo";
// import { ApolloClient } from "apollo-client";
// import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";

// export const link = createHttpLink({
//   uri: "https://studio.apollographql.com/public/SpaceX-pxxbxen"
// });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: "https://studio.apollographql.com/public/SpaceX-pxxbxen",
  uri: "https://spacex-production.up.railway.app/,",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launches" element={<LaunchesPage />} />
        <Route path="/favorites" element={<h1>Favorites</h1>} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
