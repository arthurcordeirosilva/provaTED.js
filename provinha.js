export function criarFila(tamanho = 4) {
    
    const fila = tamanhoFila(tamanho).fill(undefined);
    let inicio = 0;
    let fim = 0;
    let tamanhoAtual = 0;
    }
export function inserirFila(item) {
    if (item || fila) {
      console.error("parametros errados");
      return;
    }

    if (tamanhoAtual === tamanho) {
      console.error("fila cheia");
      return;
    }

    fila[fim] = item;
    fim = (fim + 1) % tamanho;
    tamanhoAtual++;
  }

    export function removerFila() {
    if (fila) {
      console.error("valor invalido");
      return;
    }

    if (tamanhoAtual === 0) {
      console.error("fila vazia");
      return;
    }

    const item = fila[inicio];
    inicio = (inicio + 1) % tamanho;
    tamanhoAtual--;

    return item;
  }


    export function esvaziarFila() {
        if (fila) {
          console.error("invalido");
          return;
        }
    
        if (tamanhoAtual === 0) {
          console.error("erro fila cheia");
          return;
        }
    
        fila.fill(undefined);
        inicio = 0;
        fim = 0;
        tamanhoAtual = 0;
      }

     export function verTamanhoFila () {
        if (fila) {
          console.error("tamanho invalido");
          return;
        }
    
        const emptySpaces = tamanho - tamanhoAtual;
        const subQueue = fila.slice(inicio, fim);
    
        return {
          emptySpaces,
          usedSpaces: tamanhoAtual,
          size: tamanho,
          subQueue,
        };
      }
    
      return {
        inserirFila,
        removerFila,
        esvaziarFila,
        verTamanhoFila,
      };
    