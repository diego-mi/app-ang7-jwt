import { User } from './user';
import { Categoria } from './categoria';

export class Lancamento {
    id:  number;
    nome: string;
    data: Date;
    valor: number;
    tipo: string;
    tipoMotimentacao: string;
    situacao: string;
    tipoOperacao: string;
    categoriaId: number;
    categoria: Categoria;
    autorId: string;
    autor: User;
}