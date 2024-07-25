import { Message } from '../../../entities/message/model';
import { $api } from '../../../shared/api/http-client';

export const fetchMessages = async (): Promise<Message[]> => {
    const res = await $api.get<Message[]>('/messages');
    return res.data;
};

export const postMessage = async (message: string): Promise<void> => {
    await $api.post('/messages', { message: message });
};
