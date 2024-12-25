import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-ng-guida-10-1",
  templateUrl: "./ng-guida-10-1.component.html",
  styleUrls: ["./ng-guida-10-1.component.css"],
})
export class NgGuida101Component implements OnInit {
  @ViewChild("refTemplateVar")
  refTemplateVar: ElementRef;

  currentHero = {
    name: "Pippo",
  };

  title: String = "Titolo";

  //Path relativo da src
  heroImageUrl =
    "https://github.com/alboz96/progetto-angular2-alberto/blob/main/src/assets/img/angular2typescript.png";

  heroes = [{ name: "Pippo" }, { name: "Pluto" }, { name: "Paperino" }];

  getVal(x: number, y: number): number {
    return x + y;
  }

  stampa(event, heroInput) {
    console.log(event);
    console.log(heroInput);
  }

  constructor() {}

  ngOnInit() {
    console.log("Template Reference variable con ViewChild:");
    console.log(this.refTemplateVar);
  }

  alertFn() {
    alert("FINESTRA ALERT");
  }

  clickMessage($event) {
    console.log($event);
  }
}
