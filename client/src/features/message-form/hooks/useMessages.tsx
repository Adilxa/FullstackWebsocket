import { useQuery, useMutation, useQueryClient, UseMutationResult, RefetchOptions } from '@tanstack/react-query';
import { fetchMessages, postMessage } from '../api';
import { Message } from '../../../entities/messagelist/model';

type UseMessagesResult = {
    messages: Message[] | string[];
    mutation: UseMutationResult<void, Error, string>;
    refetch: (options?: RefetchOptions) => Promise<any>;
};

export const useMessages = (): UseMessagesResult => {
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
