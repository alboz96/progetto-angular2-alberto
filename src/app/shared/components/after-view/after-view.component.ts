import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { Logger2Service } from '../../../services/logger-service/logger2.service';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements  AfterViewChecked, AfterViewInit {
  private prevHero = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  constructor(private logger: Logger2Service) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  comment = '';

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // il metodo tick_then attende un istante perchè la vista è stata già checkata (controllata)
      // Perchè il metodo doSomething() deve aspettare un attimo (tick) prima di aggiornare la variabile comment?
      // Le regole del flusso dati unidirezionale di Angular proibisce di aggiornare la vista dopo che è stata composta.
      // Entrambi questi hooks agiscono dopo che la vista del componente è stata composta (caricata).
      // Angular rilancia un errore se l'hook aggiorna i dati bindati dalla property comment immediatamente.
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    let child = this.viewChild;
    let message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }
  // ...
}