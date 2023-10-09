import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Invoice } from '../Models/invoice';
import { InvoiceListComponentComponent } from '../invoice-list-component/invoice-list-component.component';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent implements OnInit {
  IdFacture!: number; // Utilisation de l'assertion non stricte
  active!: boolean; // Utilisation de l'assertion non stricte
  
  invoices : Invoice[] =[];
  constructor(private route: ActivatedRoute, public invoiceListComponent : InvoiceListComponentComponent) {

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
      this.IdFacture = +params.get('id')!;
      this.active = params.get('active') === 'true';
      this.invoices=this.invoiceListComponent.listInvoice;
    });
  }

}
