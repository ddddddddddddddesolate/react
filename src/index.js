import ReactDOM from 'react-dom';

import { posts } from './posts'

import Feed from './components/Feed'

ReactDOM.render(<Feed posts={ posts } />, document.getElementById('root'))
