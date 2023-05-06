import React, { useState } from 'react';
import './SellForm.module.css'

function FormPage() {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [authorAddress, setAuthorAddress] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Book Name:', bookName);
    console.log('Author/Publication:', authorName);
    console.log('Description:', description);
    console.log('Image:', image);
    console.log('Author Address:', authorAddress);
    console.log('Contact Details:', contactDetails);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <h1>Sell</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Book Name:
          <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
        </label>
        <br />
        <label>
          Author Name:
          <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Upload Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Author Address:
          <textarea value={authorAddress} onChange={(e) => setAuthorAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Contact Details:
          <input type="text" value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;

