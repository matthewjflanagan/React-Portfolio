import React from 'react'
import { Link, Route } from 'react-router-dom'
import Resume from '../Resume'
import Contacts from '../../Contacts'

function Contact(props) {
  return (
    <div>
      <Link
        to={`${props.match.url}/Resume`}
        role="button"
        className="btn btn-link bg-light"
      >
        See Resume
      </Link>{' '}
      <Link to="/Contact" role="button" className="btn btn-link bg-light">
        Back
      </Link>
      <Route exact path={`${props.match.url}/Resume`} component={Resume} />
      <Contacts />
    </div>
  )
}

export default Contact