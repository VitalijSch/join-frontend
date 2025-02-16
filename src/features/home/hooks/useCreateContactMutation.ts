import { useMutation } from '@tanstack/react-query'
import { createContact } from './../services/api/createContact'

export const useCreateContactMutation = (setShowAddContact: (arg0: boolean) => unknown) => {
    const { mutate } = useMutation({
        mutationFn: createContact,
        onSuccess: () => setShowAddContact(false),
        onError: (error: any) => console.error(error)
    })

    return mutate
}
