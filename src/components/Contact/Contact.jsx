import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact_wrap}>
      <div className={css.text}>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
