import css from './Contact.module.css'
import { FaUser, FaPhone } from "react-icons/fa6";


const Contact = ({name, number, id, deleteContact}) => {
  return (
    <>
      <div>
        <div className={css.contactItemWrapper}>
          <FaUser />
          <p>{name}</p>
        </div>  
        <div className={css.contactItemWrapper}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
  
      <button type="button" onClick={() => deleteContact(id)}
      >Delete</button>
    </>
  )
}

export default Contact