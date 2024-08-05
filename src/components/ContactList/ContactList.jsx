import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

const ContactList = ({data, deleteContact}) => {
    return (<ul className={css.phoneList}>
        {data.map(({name, number, id}) => {
            return <li key={id} className={css.phoneListItem}> <Contact
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}/></li>
        })}
    </ul>)
}

export default ContactList