### FIXME Link/Redirect 问题

一个奇怪的问题，对比本仓库最后两个 commit 。

index.js 此时是这么写的

```
import App from './components/App'
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

let Kid = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
```

那么也就是当 App 被导入的时候，<Router> 没有运行，按说这样是不会有问题的，Link/Redirect 都是应该可以正常工作的。

但是，这跟 Redux 有关系。即使是有上面的 Router 加载的顺序问题，如果没有 redux ，一样 Link 都是工作的。但是加上 redux ，Link 点完，url 会变，但是对应组件不运行，页面也不更新。
