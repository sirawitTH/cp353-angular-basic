import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  private ip: string;
  items: Observable<Chat[]>

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getIp()
      .subscribe(res => this.ip = res.ip);
    this.items = this.chatService.getLast(20);
  }

  send(val: string) {
    if (!val) return;
    const chat = new Chat(this.ip, val.trim(), new Date().getTime());
    this.chatService.send(chat);
  }

}
