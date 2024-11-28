import {BrowserRouter} from 'react-router-dom';

import 'styles/common.scss';
import 'styles/content.scss';
import Routes from './routes/AppRoutes';

function App() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default App;
