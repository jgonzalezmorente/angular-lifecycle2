import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
    //* Propósito: Inicializar el componente o directiva después de que Angular ha establecido las propiedades de entrada (@Input) por primera vez. 
    //* Es un lugar adecuado para realizar tareas de inicialización que dependen de las propiedades de entrada.
    //* Momento: Se llama una vez, después del primer ngOnChanges (si hay propiedades de entrada).    
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {    
    //* Propósito: Responder cuando Angular establece o actualiza las propiedades de entrada (@Input). 
    //* Recibe un objeto SimpleChanges que contiene los valores actuales y anteriores de las propiedades.
    //* Momento: Se llama antes de ngOnInit y cada vez que cambian una o más propiedades de entrada.   
    console.log({ changes });
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    //* Propósito: Detectar y actuar sobre cambios que Angular no puede o no detectará por sí mismo. Se utiliza para implementar la detección de cambios personalizada.
    //* Momento: Se llama inmediatamente después de ngOnChanges en cada ciclo de detección de cambios, y después de ngOnInit en el primer ciclo.    
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    //* Propósito: Ejecutar lógica después de que Angular proyecta contenido externo en la vista del componente.
    //* Momento: Se llama una vez, después del primer ngDoCheck.    
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    //* Propósito: Ejecutar lógica después de que Angular verifica el contenido proyectado (si ha habido cambios en el contenido proyectado) en el componente.
    //* Momento: Se llama después de ngAfterContentInit y en cada ciclo de detección de cambios posterior.    
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    //* Propósito: Ejecutar lógica después de que Angular inicializa las vistas (plantillas HTML) del componente y las vistas hijas.
    //* Momento: Se llama una vez, después del primer ngAfterContentChecked.    
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    //* Propósito: Ejecutar lógica después de que Angular verifica las vistas del componente y las vistas hijas.
    //* Momento: Se llama después de ngAfterViewInit y en cada ciclo de detección de cambios posterior.   
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    //* Propósito: Limpiar cualquier recurso utilizado por el componente o directiva antes de que Angular lo destruya. 
    //* Ideal para desuscribirse de observables y eliminar manejadores de eventos para evitar fugas de memoria.
    //* Momento: Se llama inmediatamente antes de que Angular destruya el componente o directiva.    
    console.log('ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice++;
  }
}
