import { render } from 'react-dom';

import { One } from 'react-declarative';
import { Container } from '@mui/material';

import { fields } from './out';

const App = () => {
    return (
        <Container>
            <One
                sx={{ p: 1 }}
                outlinePaper
                fields={fields}
            />
        </Container>
    );
}

render(<App />, document.getElementById('root'));
