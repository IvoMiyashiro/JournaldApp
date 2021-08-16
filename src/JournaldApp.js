import GlobalStyles from './styles/01-globalStyles';
import { AppRouter } from './routes/01-AppRouter.js';
import { Provider } from 'react-redux';
import { store } from './redux/store/01-store';

function JournaldApp() {
  return (
    <Provider store={ store }>
      <GlobalStyles />
      <AppRouter />
    </Provider>
  );
}

export default JournaldApp;