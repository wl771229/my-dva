import dva from 'dva';
import './index.css';
import routers from './routers'
import models from './models'

import createHistory from 'history/createBrowserHistory';
const app = dva({
  history: createHistory(),
});


// 2. Plugins
// app.use({});

// 3. Model
app.model(models);

// 4. Router
app.router(routers);

// 5. Start
app.start('#root');

export default createHistory;
