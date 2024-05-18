import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Beneficiario } from '../dto/beneficiario';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  infoMenorForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpServiceService) {
    this.infoMenorForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      fechaNacimiento: [''],
      identificacion: [''],
      nacimiento: [''],
      indice: [''],
      region: [''],
      estado: ['']
    });
  }


  save() {
    
    let formValue = this.infoMenorForm.value;

    let beneficiario = new Beneficiario(
      formValue.nombre,
      formValue.apellido,
      formValue.fechaNacimiento,
      formValue.identificacion,
      formValue.nacimiento,
      formValue.indice,
      formValue.region,
      formValue.estado
    );

    this.httpService.saveBeneficiario(beneficiario);
    
    

  }
}
