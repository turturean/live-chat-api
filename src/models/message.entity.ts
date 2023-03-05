export interface CreateMessage {
    userId: number;
    text: string;
}

export class MessageEntity {
    userId: number = 0;
    text: string = '';
    createAt: string = new Date().toUTCString();
    constructor(payload: CreateMessage) {
        this.userId = payload.userId;
        this.text = payload.text;
    }
}
