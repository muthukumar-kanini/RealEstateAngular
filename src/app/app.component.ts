import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Agent } from './models/agent.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  agents: Agent[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadAgents();
  }

  loadAgents() {
    this.apiService.getAgents().subscribe(
      (data: Agent[]) => {
        this.agents = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
