import './App.jsx'
import './App.css'

const ContactInfo = ({ individual }) => {
  console.log(individual)
  return (
  <>
    <ul className='ul'> <h2>Name:</h2>
    {
          individual.map((singlePerson) => {
            return <li key={singlePerson.id}>{singlePerson.name}</li>
          })
    }
  </ul> 
  <ul className='ul'><h2>Email:</h2>
    {
          individual.map((singlePerson) => {
            return <li key={singlePerson.id}>{singlePerson.email}</li>
          })
    }
  </ul>
  <ul className='ul'> <h2>Phone:</h2>
    {
          individual.map((singlePerson) => {
            return <li key={singlePerson.id}>{singlePerson.phone}</li>
          })
    }
  </ul>
  </>

  )





 








}

export default ContactInfo