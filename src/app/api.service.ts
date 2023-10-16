import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from './models/property.model';
import { Agent } from './models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:7244/api';

  constructor(private http: HttpClient) { }

  getAgents(): Observable<any[]> {
    return this.http.get<Agent[]>(`${this.baseUrl}/agents`);
  }

  createAgent(agent: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/agents`, agent);
  }

  updateAgent(id: number, agent: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/agents/${id}`, agent);
  }

  deleteAgent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/agents/${id}`);
  }

  getProperties(): Observable<any[]> {
    return this.http.get<Property[]>(`${this.baseUrl}/properties`);
  }

  createProperty(property: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/properties`, property);
  }

  updateProperty(id: number, property: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/properties/${id}`, property);
  }

  deleteProperty(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/properties/${id}`);
  }

  getPropertiesByAvailability(avail: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/properties/avail/${avail}`);
  }
}
