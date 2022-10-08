# INF1407
Repositório para a disciplina INF1407 - Programação para a Web utilizando javascript

Grupo formado por:  Gabriel Menegon - matrícula: 1920302
                    Henrique Soares - matrícula: 1710466

Penny’s Game

O jogo de Penney, em homenagem ao seu inventor Walter Penney, é um jogo de geração de sequência binária (cara/coroa) entre dois jogadores.

Regras

Inicialmente o jogador escolhe se decide ir em primeiro ou em segundo. Após esta escolha inicial, o primeiro jogador (A) seleciona uma sequência de 3 lançamentos de uma moeda, podendo ser cara ou coroa, e mostra essa sequência ao segundo jogador (B). O jogador B então seleciona outra sequência de cara e coroa do mesmo comprimento. Subsequentemente, uma moeda honesta é lançada até que a sequência do jogador A ou do jogador B apareça como uma sequência consecutiva dos resultados do lançamento da moeda. O jogador cuja sequência aparece primeiro ganha. Lembrando que apenas os três últimos lançamentos serão contabilizados para identificação da sequência escolhida por cada jogador.

Exemplo:	 Cara - H		Coroa - T

Jogador A escolhe H T T		 jogador B escolhe H H T

Sequência obtida pelo lançamento: H T H T H T H T H T H T H H T  
Jogador B ganhou

Desde que sejam usadas sequências de pelo menos três comprimentos, o segundo jogador (B) tem uma vantagem sobre o jogador inicial (A). Isso ocorre porque o jogo não é transitivo, de modo que, para qualquer sequência de três ou mais, pode-se encontrar outra sequência com maior probabilidade de ocorrer primeiro.
