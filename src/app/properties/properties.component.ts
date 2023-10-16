import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Property } from '../models/property.model';



@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: any[] = [];
  newProperty: any = {}; // Declare the newProperty property

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.apiService.getProperties().subscribe(
      (data: any[]) => {
        this.properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createProperty(propertyForm: any) {
    this.apiService.createProperty(this.newProperty).subscribe(
      (response) => {
        propertyForm.reset();
        this.newProperty = {}; // Reset the newProperty object
        this.loadProperties();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProperty(property: any) {
    this.apiService.updateProperty(property.PropertyId, property).subscribe(
      (response) => {
        this.loadProperties();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteProperty(propertyId: number) {
    if (confirm('Are you sure you want to delete this property?')) {
      this.apiService.deleteProperty(propertyId).subscribe(
        (response) => {
          this.loadProperties();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
