import './App.scss';
import Approach from './components/Approach.js';
import WorksHome from './components/WorksHome.js';
import ClientsHome from './components/ClientsHome.js';
import ThinkHome from './components/ThinkHome.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function PageHome() {                
  return (
    <div>
        <Approach />
        <WorksHome />
        <ClientsHome />
        <ThinkHome />
    </div>
  );
}

export default PageHome;