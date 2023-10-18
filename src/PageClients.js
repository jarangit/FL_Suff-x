import './App.scss';
import ListClient from './components/ListClient.js';
import AppHeader from './components/AppHeader';


function PageClients() {                
  return (
    <div>
        <AppHeader />
         <ListClient />
    </div>
  );
}

export default PageClients;
