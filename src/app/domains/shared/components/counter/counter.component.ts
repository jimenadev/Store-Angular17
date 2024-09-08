import { Component, Input, signal, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0
  @Input({required: true}) message: string = ''

  counter = signal(0);

  counterRef: number | undefined;

  constructor(){
    //NO ASYNC
    // before render
    // Una vez
  }

  ngOnChanges(changes: SimpleChange){
    // before and during render
  }

  ngOnInit(){
    // after render
    // una vez
    // async, then, subs

  }

  ngAfterViewInit(){
    // after render
    // hijos ya fueron renderizados
  }

  ngOnDestroy(){

  }

  doSomething(){
    
  }

}
