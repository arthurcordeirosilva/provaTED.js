import { criarFila, inserirFila, removerFila, esvaziarFila, verTamanhoFila } from "./index.js";

const musicas = ['musica1', 'musica2']

const minhaFila = criarFila();
minhaFila.inserirFila("musical");
minhaFila.inserirFila("musica2");
console.log(minhaFila.verTamanhoFila());