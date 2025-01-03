import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';
import { Logger2Service } from '../../../services/logger-service/logger2.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent` (ovvero my-child)
  @ContentChild(ChildComponent) contentChild: ChildComponent;

  constructor(private logger: Logger2Service) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    //NON devo attendere l'attimo (tick), per cambiare il contenuto nell'afterContent
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
  // ...
}
