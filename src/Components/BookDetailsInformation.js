import React from 'react'

const BookDetailsInformation = ({title,description,genre,author,releasedAt}) => {
  return (
    <div>
      <h3> The book of the day </h3>
      <ul>
        <li> {title} </li> 
        <li> {description} </li> 
        <li> {genre} </li> 
        <li> {author} </li> 
        <li> {releasedAt} </li>  
      </ul>
    </div>
  )
}

export default BookDetailsInformation
