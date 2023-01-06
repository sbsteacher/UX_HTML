import Home from "./routes/Home"
import Detail from './routes/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default 
function MovieApp() {
    return (
        <Router>
            <Routes>                
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    ); 
}