import {Navigate, Route, Routes} from 'react-router-dom';

import Main from 'pages/main';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};

export default AppRoutes;