import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { LancamentoPrioridadeEnum } from 'src/app/enums/lancamentoPrioridadeEnum';
import { LancamentoTipoEnum } from 'src/app/enums/lancamentoTipo';
import { LancamentoSituacaoEnum } from 'src/app/enums/lancamentoSituacaoEnum';
import { TipoOperacaoEnum } from 'src/app/enums/tipoOperacaoEnum';
import { TipoMovimentacaoEnum } from 'src/app/enums/tipoMovimentacaoEnum';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { Lancamento } from 'src/app/models/lancamento';

@Component({
  selector: 'app-lancamento-form-add',
  templateUrl: './lancamento-form-add.component.html',
  styleUrls: ['./lancamento-form-add.component.scss']
})
export class LancamentoFormAddComponent implements OnInit {
  lancamentoForm: FormGroup;
  categorias: Categoria[] = [];
  submitted = false;
  // prioridades = LancamentoPrioridadeEnum;
  // tipos = LancamentoTipoEnum;
  // situacoes = LancamentoSituacaoEnum;
  // tipoOperacoes = TipoOperacaoEnum;
  // tipoMovimentacoes = TipoMovimentacaoEnum;

  public tipoMovimentacoes = [
    { id: 0, text: 'Categorizar' },
    { id: 1, text: 'Entrada' },
    { id: 2, text: 'Saida' }
  ];

  public tipo = [
    { id: 'lancamento', text: 'Lançamento' },
    { id: 'sublancamento', text: 'SubLançamento' }
  ];

  public tipoOperacoes = [
    { id: 0, text: 'Categorizar' },
    { id: 1, text: 'CartaoCredito' },
    { id: 2, text: 'DebitoEmConta' },
    { id: 3, text: 'Dinheiro' },
    { id: 4, text: 'ValeRefeicao' }
  ];

  public situacoes = [
    { id: 0, text: 'Categorizar' },
    { id: 1, text: 'Aberta' },
    { id: 2, text: 'Fechada' },
  ];

  public prioridades = [
    { id: 0, text: 'Categorizar' },
    { id: 1, text: 'Fixa' },
    { id: 2, text: 'Variavel' },
  ];
  
  constructor(private formBuilder: FormBuilder, private categoriaService: CategoriaService, private lancamentoService: LancamentoService) { }

  ngOnInit() {
    this.lancamentoForm = this.formBuilder.group({
      categoriaId: ['', Validators.required],
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      data: ['', Validators.required],
      // prioridade: ['', Validators.required],
      // tipo: ['', Validators.required],
      situacao: ['', Validators.required],
      tipoOperacao: ['', Validators.required],
      tipoMovimentacao: ['', Validators.required]
    });

    this.categoriaService.getAll().subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  get f() { return this.lancamentoForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.lancamentoForm.invalid) {
      console.log("form invalid");
      console.info("form", this.lancamentoForm);
      this.getFormValidationErrors();

      return;
    }

    let lancamento = new Lancamento();
    lancamento.categoriaId = this.f.categoriaId.value;
    lancamento.nome = this.f.nome.value;
    lancamento.valor = this.f.valor.value;
    lancamento.data = this.f.data.value;
    // lancamento.prioridade = this.f.prioridade.value;
    // lancamento.tipo = this.f.tipo.value;
    lancamento.situacao = this.f.situacao.value;
    lancamento.tipoOperacao = this.f.tipoOperacao.value;
    lancamento.tipoMotimentacao = this.f.tipoMovimentacao.value;

    // this.loading = true;
    this.lancamentoService.add(lancamento)
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          this.submitted = false;
        },
        error => {
          // this.error = error;
          // this.loading = false;
        });
  }

  getFormValidationErrors() {
    Object.keys(this.lancamentoForm.controls).forEach(key => {

      console.log(this.lancamentoForm.get(key).errors);

      const controlErrors: ValidationErrors = this.lancamentoForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

}
