import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker'; 
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton'; 
import { AutoCompleteModule } from 'primeng/autocomplete'; 

interface Airport {
  city: string;
  code: string;
}

@Component({
  selector: 'app-vuelos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule, 
    InputNumberModule,
    CardModule,
    SelectButtonModule,
    AutoCompleteModule, 
  ],
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {
  
  // PROPIEDAD: Para controlar el estado del header (fijo/encogido)
  isSticky: boolean = false; 

  // Listener para el evento scroll de la ventana
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Si el scroll vertical es mayor a 50px, activa el estado 'sticky'
    this.isSticky = window.scrollY > 50; 
  }
  
  ngOnInit() {
    // Inicializa el estado al cargar la página
    this.onScroll(); 
  }

  // --- El resto de tu código de lógica se mantiene igual ---

  cities: Airport[] = [
    { city: 'Bogotá', code: 'BOG' }, 
    { city: 'Medellín (Rionegro)', code: 'MDE' },
    { city: 'Cali', code: 'CLO' }, 
    { city: 'Cartagena', code: 'CTG' }, 
    { city: 'Barranquilla', code: 'BAQ' }, 
    { city: 'Pereira', code: 'PEI' }, 
    { city: 'Santa Marta', code: 'SMR' }, 
  ];
  
  selectedFrom: Airport | null = { city: 'Bogotá', code: 'BOG' }; 
  selectedTo: Airport | null = null;
  filteredCities: Airport[] = [];
  tripType = 'idaVuelta'; 
  departDate: Date | null = new Date(); 
  returnDate: Date | null = null;
  passengers = 1;

  destinos = [
    { nombre: 'Bogotá (BOG)', precio: '$150 USD', imagen: 'https://placehold.co/250x150/e00000/ffffff?text=BOGOTA' },
    { nombre: 'Medellín (MDE)', precio: '$120 USD', imagen: 'https://placehold.co/250x150/333333/ffffff?text=MEDELLIN' },
    { nombre: 'Miami (MIA)', precio: '$400 USD', imagen: 'https://placehold.co/250x150/008cff/ffffff?text=MIAMI' },
  ];

  filterCities(event: any) {
    let query = event.query;
    this.filteredCities = this.cities.filter(city => 
      city.city.toLowerCase().includes(query.toLowerCase()) || 
      city.code.toLowerCase().includes(query.toLowerCase())
    );
  }

  searchFlights() {
    const origin = this.selectedFrom ? `${this.selectedFrom.city} (${this.selectedFrom.code})` : 'N/A';
    const destination = this.selectedTo ? `${this.selectedTo.city} (${this.selectedTo.code})` : 'N/A';
    console.log(`Búsqueda iniciada desde ${origin} a ${destination}`);
  }
}
