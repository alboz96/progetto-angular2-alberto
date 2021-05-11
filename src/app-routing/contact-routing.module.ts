import { RouterModule } from "@angular/router";
// import { ContactComponent } from "../shared/components/contact/contact.component";
import { NgModule } from "@angular/core";
import { NgGuida118Component } from "../app/components/guida-parte-11/ng-guida-11-8/ng-guida-11-8.component";

//quando atterro su questo modulo il path e' gia' localhost:4200/esempio18 , quindi basta farlo matchare con '' per caricarlo con quel path
const routes = [{ path: '', component: NgGuida118Component }];
const CONTACT_ROUTING_CONFIG = RouterModule.forChild(routes);

@NgModule({
    imports: [CONTACT_ROUTING_CONFIG],
    exports: [RouterModule]
  })
  export class ContactRoutingModule {}