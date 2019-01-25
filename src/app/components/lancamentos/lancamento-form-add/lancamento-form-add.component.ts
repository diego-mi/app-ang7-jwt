import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-lancamento-form-add',
  templateUrl: './lancamento-form-add.component.html',
  styleUrls: ['./lancamento-form-add.component.scss']
})
export class LancamentoFormAddComponent implements OnInit {
  lancamentoForm: FormGroup;
  categorias: Categoria[] = [];
  
  constructor(private formBuilder: FormBuilder, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.lancamentoForm = this.formBuilder.group({
      categoriaId: ['', Validators.required],
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      data: ['', Validators.required],
      prioridade: ['', Validators.required],
      tipo: ['', Validators.required],
      situacao: ['', Validators.required],
      tipoOperacao: ['', Validators.required]
    });

    this.categoriaService.getAll().subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  onSubmit() {
  }

}
