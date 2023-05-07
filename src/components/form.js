import styles from "../styles/Form.module.css";

export default function Form({ addHome }) {
  return (
    <>
      <form action="/" method="post" className={styles.form}>
        <div className={styles.inputgroup}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="name"
            placeholder="XYZ Apartment - Delhi"
            required
          />
        </div>
        <div className={styles.inputgroup}>
          <label>Description</label>
          <textarea
            name="description"
            id="msg"
            cols="30"
            rows="10"
            required
            placeholder="Lorem ipsum dolor sit..."
          ></textarea>
        </div>
        <div className={styles.inputgroup}>
          <label>Price</label>
          <input
            name="price"
            type="number"
            min="0"
            label="Price per night"
            placeholder="100"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <label>Guests</label>
          <input
            name="guests"
            type="number"
            min="0"
            label="Price per night"
            placeholder="2"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <label>Beds</label>
          <input
            name="beds"
            type="number"
            min="0"
            label="Price per night"
            placeholder="1"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <label>Baths</label>
          <input
            name="baths"
            type="number"
            min="0"
            label="Price per night"
            placeholder="1"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <button type="submit" onSubmit={addHome} className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
