import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Chat } from '../models/chat.model';

@Injectable()
export class ChatService {

    private basePath: string = '/messages';

    constructor(
        private db: AngularFireDatabase,
        private http: HttpClient
    ) { }

    getIp(): Observable<{ip: string}> {
        return this.http.get<{ip: string}>(`https://api.ipify.org?format=json`);
    }

    send(chat: Chat): void {
        this.db.list(`${this.basePath}`).push(chat);
    }

    getLast(limit: number): Observable<Chat[]> {
        return this.db.list<Chat>(`${this.basePath}`, ref => ref.orderByKey().limitToLast(limit)).valueChanges();
    }
}