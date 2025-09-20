import React from "react";
import Contact1 from "@/assets/Contact1.svg";
import User4 from "@/assets/User4.svg";
import User2 from "@/assets/User2.svg";
import User5 from "@/assets/User5.svg";
import User1 from "@/assets/User1.svg";
import User3 from "@/assets/User3.svg";

const contacts = [
  { key: "c1", name: "Natali Craig", avatar: Contact1 },
  { key: "c2", name: "Drew Cano", avatar: User4 },
  { key: "c3", name: "Orlando Diggs", avatar: User2 },
  { key: "c4", name: "Andi Lane", avatar: User5 },
  { key: "c5", name: "Kate Morrison", avatar: User1 },
  { key: "c6", name: "Koray Okumus", avatar: User3 },
];

const Contacts = () => {
  return (
    <section className="rs-card">
      <h3 className="rs-title">Contacts</h3>
      <ul className="contacts-list">
        {contacts.map((c) => (
          <li key={c.key} className="contact-item">
            <img src={c.avatar} alt="" width={24} height={24} />
            <div className="contact-name">{c.name}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
