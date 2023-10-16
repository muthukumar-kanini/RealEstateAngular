import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Agent } from '../models/agent.model';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  agents: Agent[] = [];
  newAgent: Agent = {};

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

  createAgent(agentForm: any) {
    this.apiService.createAgent(this.newAgent).subscribe(
      (response) => {
        agentForm.reset();
        this.newAgent = {};
        this.loadAgents();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateAgent(agent: Agent) {
    if (agent.AgentId !== undefined) {
      this.apiService.updateAgent(agent.AgentId, agent).subscribe(
        (response) => {
          this.loadAgents();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('AgentId is undefined');
    }
  }
  

  deleteAgent(agentId: number) {
    if (confirm('Are you sure you want to delete this agent?')) {
      this.apiService.deleteAgent(agentId).subscribe(
        (response) => {
          this.loadAgents();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
