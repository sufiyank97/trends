// import { ApolloClient, InMemoryCache, makeVar,createHttpLink } from '@apollo/client';

// // reactive variables
// export const currentUser = makeVar({});
// export const filtersData = makeVar({});

// const client = new ApolloClient({
//   // uri: 'http://82.9.191.18:5000/api/graphql',
//   // uri: 'http://82.9.191.18:8084/api/graphql',
//   link: new createHttpLink(
//     {
//         uri: "http://82.9.191.18:8084/api/graphql"
//     }
// ),
//   cache: new InMemoryCache(),
//   fetchOptions: {
//     mode: 'no-cors',
//   },
// });

// export default client;


import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

// reactive variables
export const currentUser = makeVar({});
export const filtersData = makeVar({});

const client = new ApolloClient({
uri: 'http://82.9.191.18:5000/api/graphql',
cache: new InMemoryCache()
});

export default client;