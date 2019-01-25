import { Component, OnInit } from '@angular/core';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { Lancamento } from 'src/app/models/lancamento';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  	lancamentos: Lancamento[] = [];

  	constructor(private lancamentoService: LancamentoService) { }

  	ngOnInit() {
		this.lancamentoService.getAll().subscribe(lancamentos => {
			this.lancamentos = lancamentos;
		});
	}

}
