export interface Message {
    id: number;
    senderId: number;
    senderKnowAs: string; // senderKnownAs
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnowAs: string; // recipientKnownAs
    recipientPhotoUrl: string;
    content: string;
    isRead: string;
    dateRead: Date;
    messageSent: Date;
}
