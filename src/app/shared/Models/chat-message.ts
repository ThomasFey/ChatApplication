import { getLocaleDateTimeFormat } from '@angular/common';
export class ChatMessage {
    public message: string;
    public nickname: string;
    public date: Date;
    
    private options = { day: 'numeric', year: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric'};
    
    constructor(nickname: string, message: string, date: Date){
        this.nickname = nickname;
        this.message = message;
        this.date = date;
    }

    public getDate(): string {
        return this.date.toLocaleDateString("de-CH", this.options);
    }

}