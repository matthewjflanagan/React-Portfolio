import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Resume from './Resume'
import Contacts from '../Contacts'

function Contact(props) {
  return (
    <div>
      <Link
        to={`${props.match}`}
        role="button"
        className="btn btn-link bg-light"
      >
        See Resume
      </Link>{' '}
      <Link to="/Contact" role="button" className="btn btn-link bg-light">
        Back
      </Link>
      <Routes>
        <Route exact path={`${props.match}`} component={Resume} />
      </Routes>
      <Contacts />
    </div>
  )
}

export default Contact