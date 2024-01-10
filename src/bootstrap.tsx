import { ApolloProvider } from '@apollo/client';
import { App } from 'app';
import { client } from 'app/graphql';
import { ThemeProvider } from 'app/providers';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root not found');
}

const container = createRoot(root);

container.render(
    <ApolloProvider client={client}>
        <Router>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Router>
    </ApolloProvider>,
);
