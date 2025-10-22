import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePicker } from 'primeng/datepicker';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Password } from 'primeng/password';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputText,
    AutoCompleteModule,
    DatePicker,
    Button,
    Card,
    Message,
    Password
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  // 🔹 listas originales
  tiposDocumento = [
    { name: 'Cédula de ciudadanía' },
    { name: 'Cédula de extranjería' },
    { name: 'Pasaporte' }
  ];

  paises = [
    { name: 'Colombia' },
    { name: 'México' },
    { name: 'Estados Unidos' }
  ];

  // 🔹 listas filtradas para el autocompletado
  filteredTiposDocumento: any[] = [];
  filteredPaises: any[] = [];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      paisEmisor: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // 🔹 métodos de filtrado requeridos por p-autoComplete
  filterTipoDocumento(event: any) {
    const query = event.query.toLowerCase();
    this.filteredTiposDocumento = this.tiposDocumento.filter(doc =>
      doc.name.toLowerCase().includes(query)
    );
  }

  filterPais(event: any) {
    const query = event.query.toLowerCase();
    this.filteredPaises = this.paises.filter(pais =>
      pais.name.toLowerCase().includes(query)
    );
  }

  // 🔹 envío del formulario
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('✅ Datos de registro:', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
