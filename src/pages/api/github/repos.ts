import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const fetchRepos = async () => {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    cache: new InMemoryCache(),
  });

  const GITHUB_REPOS = gql`
    query {
      user(login: "JvPelai") {
        repositories(
          first: 80
          orderBy: { field: CREATED_AT, direction: DESC }
          privacy: PUBLIC
          isFork: false
        ) {
          nodes {
            name
            url
            description
            languages(first: 4,orderBy: {field: SIZE, direction: DESC}){
              nodes{
                id
                color
                name
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GITHUB_REPOS,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const repos = data.user.repositories.nodes.filter((r: any) => r.description);
  return { repos };
};

export { fetchRepos };
