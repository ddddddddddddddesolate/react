import ReactDOM from "react-dom";

import { posts } from './posts'

import Feed from './Feed'

ReactDOM.render(<Feed posts={ posts } />, document.getElementById('root'))
