import { useContext} from 'react';
import AuthContext from './context/authContext';

import UnauthRouter from './routes/unauthRouter';
import AuthRouter from './routes/authRouter';

function App() {

  const {auth} = useContext(AuthContext);
  return (
    <div className="App">
      {auth? <AuthRouter/>: <UnauthRouter/> }
    </div>
  );
}

export default App;
