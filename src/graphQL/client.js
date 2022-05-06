import { ApolloClient, InMemoryCache } from '@apollo/client'

const cliente = new ApolloClient({
    uri: 'https://precious-egret-37.hasura.app/v1/graphql',
    headers: {'x-hasura-admin-secret': 'nE1oLKxiRjVmkrcFjijKF01hBECooki5jaYeAQCFqX9o8bo3Ydu0F0SOuT34lNwj'},
    cache: new InMemoryCache()
});

export default cliente;