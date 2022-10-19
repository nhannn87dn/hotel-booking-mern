import styles from "./SingleMessage.module.css";
import { IoTrash } from "react-icons/io5";

function SingleMessage() {
  const onDeleteHandle = (id) => {
    console.log(id);
  };
  return (
    <div className="box box_border">
      <div className="hd">
        <h4 className="box_title">
          <span className="contact_name">John Doe</span>
          <span className={styles.contact_email}>jdoe@hotmail.com</span>
          <span className={styles.contact_email}>0988 777 666</span>
        </h4>
        <div className="extra extra_right">
          <span className={styles.contact_date}>22-12-2022 08:33:11</span>
          <button
            type="button"
            className='btn_ghost'
            onClick={(e) => {
                e.preventDefault();
                onDeleteHandle(123);
            }}
          >
            <IoTrash />
          </button>
        </div>
      </div>
      <div className="bd">
        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia
          odit qui facere asperiores reiciendis distinctio id corporis! Sunt
          temporibus ab nam vitae magnam? Exercitationem nobis rerum repellat
          aliquid architecto.
        </p>
      </div>
    </div>
  );
}

export default SingleMessage;
