'use client';
import React, { useEffect, useState } from "react";
import styles from './index.module.scss';
import { db } from '../../../Kmplus_web/functions/firebaseconfig'; // adjust path
import { get, ref, remove, update } from "firebase/database";
// import { Pencil, Trash2 } from 'lucide-react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


interface Contact {
  id: string;
  name: string;
  email: string;
  address: string;
  zipCode: string;
  state: string;
  contactingAbout: string;
  heardFrom: string;
  message: string;
  submittedAt: string;
}

const Contac_us_Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [editedMessage, setEditedMessage] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      const snapshot = await get(ref(db, 'contacts'));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const contactList: Contact[] = Object.entries(data).map(
          ([id, value]) => ({ id, ...(value as Omit<Contact, 'id'>) })
        );
        setContacts(contactList.reverse());
      }
    };
    fetchContacts();
  }, []);

  const handleDelete = (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this contact?");
    if (confirmDelete) {
      remove(ref(db, `contacts/${id}`))
        .then(() => {
          setContacts((prev) => prev.filter((c) => c.id !== id));
          alert("Deleted successfully.");
        })
        .catch(() => alert("Failed to delete."));
    }
  };

  const handleEditClick = (contact: Contact) => {
    setEditingContact(contact);
    setEditedMessage(contact.message);
  };

  const handleEditSubmit = () => {
    if (!editingContact) return;

    update(ref(db, `contacts/${editingContact.id}`), {
      message: editedMessage,
    })
      .then(() => {
        setContacts((prev) =>
          prev.map((c) =>
            c.id === editingContact.id ? { ...c, message: editedMessage } : c
          )
        );
        alert("Updated successfully.");
        setEditingContact(null);
        setEditedMessage('');
      })
      .catch(() => alert("Update failed."));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Form Submissions</h2>
      {contacts.length === 0 ? (
        <p className={styles.empty}>No submissions found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Submitted At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>{new Date(contact.submittedAt).toLocaleString()}</td>
                <td className={styles.actions}>
                  <button
                    className={styles.iconButton}
                    onClick={() => handleEditClick(contact)}
                  >
                    <EditIcon sx={{fontSize:18}} />
                  </button>
                  <button
                    className={styles.iconButton}
                    onClick={() => handleDelete(contact.id)}
                  >
                    <DeleteIcon sx={{color:"red",fontSize:18}} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Popup */}
      {editingContact && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Edit Message</h3>
            <textarea
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              className={styles.input}
            />
            <div className={styles.modalActions}>
              <button onClick={handleEditSubmit} className={styles.saveBtn}>
                Save
              </button>
              <button onClick={() => setEditingContact(null)} className={styles.cancelBtn}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contac_us_Admin;