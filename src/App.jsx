import { Example } from './example';
import { Card } from './components/recepie-card/Card';

import './App.css';

const App = () => {
    return (
        <>
            <header>
                <Example />
            </header>
            <main>
                <Card />
            </main>
        </>
    );
};

export default App;
