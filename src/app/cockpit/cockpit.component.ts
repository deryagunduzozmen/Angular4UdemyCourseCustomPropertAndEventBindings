import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated=new EventEmitter<{serverName:string, serverContent:string}>();
@Output() bluePrintCreated=new EventEmitter<{serverName:string, serverContent:string}>();
newServerName = '';
newServerContent = '';

  onAddServer(){
    this.serverCreated.emit(
      {serverName:this.newServerName,
      serverContent:this.newServerContent}
      )
  }
  onAddBlueprint(){
this.bluePrintCreated.emit(
  {serverName:this.newServerName,
  serverContent:this.newServerContent}
  )
}

  constructor() { }

  ngOnInit() {
  }

}
