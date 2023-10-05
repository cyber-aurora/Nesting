import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../service/properties.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface EmailResponse {
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  property: any;
  comment: string = ''; 

  

  constructor(
    private route: ActivatedRoute,
    private propertiesService: PropertiesService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.propertiesService.getProperty(id).subscribe(
        (propertyDetails: any) => {
          this.property = propertyDetails;
        },
        error => {
          console.error('Error obteniendo detalles de la propiedad:', error);
        }
      );
    });
  }

  

  sendEmail() {
    const emailContent = {
      subject: 'Nuevo comentario sobre la propiedad',
      body: this.comment
    };
  
    const ownerEmail = this.property.ownermail;
    const backendUrl = 'http://localhost:4000/sendmail';
    const url = `${backendUrl}?to=${ownerEmail}&body=${emailContent.body}`;
  
    this.http.post<EmailResponse>(url, {}) // Specify the type for the response
      .subscribe(
        (response) => {
          console.log('Email sent successfully:', response);
  
          // Display alert and navigate back on success
          window.alert(response.message);
          this.goBack();
        },
        (error) => {
          console.error('Error sending email:', error);
  
          // Display alert on error
          window.alert('Error sending email. Please try again.');
        }
      );
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
