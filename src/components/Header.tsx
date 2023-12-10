import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavBar from './NavBar'

const Header = () => {
    return (
        <div className="fixed-header position-fixed">
            <div className={'container header-container p-0 '}>
                <div className="jumbotron header-title mb-0 px-3 p-3">
                    <Link to="/">
                        <h2 className="page-title">
                            <i
                                style={{ fontSize: '110%' }}
                            />
                            YMAN NEWS
                        </h2>
                    </Link>
                   
                </div>
                <NavBar />
            </div>
        </div>
    )
}

export default withRouter(Header)
