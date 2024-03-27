import { useEffect, useState } from 'react';
import ContactInfo from './ContactInfo.jsx';
import './App.css'
import './index.css'



function App() {
  const [contacts, setContacts] = useState([])
  const API_URL = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    const getContacts = async () => {

      const response = await fetch(API_URL);
      const jsonObject = await response.json();
      setContacts(jsonObject)
    }
    getContacts();

  }, [])
  console.log(contacts)



  return (
    <>
      <h1>Contact List:</h1>
      <section className='section'>
      <ContactInfo individual={contacts} />
      </section>
      
    </>
  )


}

export default App
