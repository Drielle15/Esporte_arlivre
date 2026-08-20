import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CorridaService } from '../../service/corrida/corrida-service';
import { Corrida } from '../../models/Corrida';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {

  corrida: Corrida = new Corrida();

  constructor(private corridaService: CorridaService) {}

  salvar() {

    console.log('CLICOU EM CADASTRAR');
    console.log(this.corrida);

    this.corridaService.salvarCorrida(this.corrida).subscribe({

      next: (resposta) => {

        console.log('SALVO COM SUCESSO:', resposta);

        alert('Corrida cadastrada com sucesso!');

        this.corrida = new Corrida();
      },

      error: (erro) => {

        console.error('ERRO AO SALVAR:', erro);

        alert('Erro ao cadastrar corrida. Veja o console.');

      }

    });
  }
}