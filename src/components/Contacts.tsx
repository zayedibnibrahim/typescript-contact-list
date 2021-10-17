import React, { useState } from 'react';
import Contact from './Contact';
interface IContact {
    name: string,
    email?: string
}
const Contacts = () => {
        const [contact, setContact] = useState<IContact>({
            name: '',
            email: ''
        })
        const [contactList, setContactList] = useState<IContact[]>([])

        const onSubmit = () => {
            setContactList([...contactList, contact])
            setContact({
                name: '',
                email: ''
            })
        }
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) =>setContact({...contact, [e.target.name]: e.target.value})

    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(conList => conList.email !== email)
        return setContactList(newContactList)
    }


    return (
        <div>
            <h1>Contact List</h1>
            <div className="form">
                <input type="text" value={contact.name} name="name" placeholder="Enter Name" onChange={onChange}/>

                <input type="email" name="email" placeholder="Enter Email" onChange={onChange} value={contact.email}/>

                <button type='submit' onClick={onSubmit}>Submit</button>
            </div>
            {
                contactList.map((con, i) => (
                    <Contact name={con.name} email={con.email} handleRemove={handleRemove} key={i+1}/>
                ))
            }
            
            
        </div>
    );
};

export default Contacts;