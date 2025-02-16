import axios from 'axios'

export async function createContact({ name, email, phone_number }: { name: string, email: string, phone_number: string }) {
    return axios
        .post("http://localhost:8000/contacts/create/", { name, email, phone_number })
        .then(res => res.data)
}