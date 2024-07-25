import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchMessages, postMessage } from '../api';

export const useMessages: any = () => {
    const queryClient = useQueryClient();

    const { data: messages = [], refetch } = useQuery({
        queryKey: ['messages'],
        queryFn: fetchMessages,
    });

    const mutation = useMutation<void, Error, string>({
        mutationFn: postMessage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['messages'] });
        },
    });

    return { messages, mutation, refetch };
};
