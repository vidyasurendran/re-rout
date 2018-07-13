import React from 'react'
import {
    Route,
    Link
} from 'react-router-dom'

const Store = ({ match }) =>
    <div className="jumbotron">
        <h1 className="display-3">Store</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul>
                        <li><Link to={`${match.url}/html`}>HTML</Link></li>
                        <li><Link to={`${match.url}/css`}>CSS</Link></li>
                        <li><Link to={`${match.url}/react`}>React</Link></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <Route path={`${match.path}/html`} render={() => <h1>HTML by Ducket book</h1>} />
                    <Route path={`${match.path}/css`} render={() => <h1>CSS by Racheal Andrews</h1>} />
                    <Route path={`${match.path}/react`} render={() => <h1>React by Fullstack.io book</h1>} />
                </div>
            </div>
        </div>
    </div>

export default Store