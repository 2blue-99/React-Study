import type { Contact } from "./Msessenger";

export default function ContactList({
  contacts,
  selectedId,
  dispatch,
}: {
  contacts: Contact[];
  selectedId: number;
  dispatch: React.ActionDispatch<[action: any]>;
}) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                dispatch({
                  type: "changed_selection",
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
