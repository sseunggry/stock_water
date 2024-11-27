import {BrowserRouter} from 'react-router-dom';

import './assets/styles/common.scss';
import './assets/styles/content.scss';
import Routes from './routes/AppRoutes';

function App() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default App;
