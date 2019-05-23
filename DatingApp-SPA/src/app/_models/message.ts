export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: string; // senderKnownAs
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnownAs: string; // recipientKnownAs
    recipientPhotoUrl: string;
    content: string;
    isRead: string;
    dateRead: Date;
    messageSent: Date;
}
