import { $api } from '../../../shared/api/http-client';
import { Message } from '../../../entities/messagelist/model';

export const fetchMessages = async (): Promise<Message[]> => {
    const res = await $api.get<Message[]>('/messages');
    return res.data;
};

export const postMessage = async (message: string): Promise<void> => {
    await $api.post('/messages', { message: message });
};
