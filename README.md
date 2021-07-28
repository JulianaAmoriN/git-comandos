# _Comandos Git_  

Esse repositório tem como obejtivo listar comandos do git, visando facilitar o dia a dia do desenvolvedor. 

#### Comandos mais usados 


`git clone` : cria uma pasta em seu computador com o nome do repositório e clona todos os arquivos localmente.

`git add .` : adiciona todos os arquivos antes de commitá-lo.

`git add <nome do arquivo>` : adiciona um arquivo antes de commitá-lo.

`git commit -m " <menssagem> "` : commita um arquivo adicionado e insere uma mensagem.

`git push` : envia os commits para o repositório remoto.

`git checkout -b <nome da branch>` : cria uma nova branch.

`git checkout <nome da branch>` : atalho para a branch.

`git status` : verifica o status dos arquivos e a branch.

`git checkout -- .` : retorna para as alterações do último commit.

`git log` : lista commits realizados.

`git init`: inicializa o git no projeto localmente.

`git commit -am " <menssagem> "` : commit sem a necessidade de adicionar arquivos modificados ante.

`git commit --amen -m " <menssagem> "` : corrigir a mensagem do commit.


#### Terminal Shell 

`cd <nome da pasta>` : abre uma pasta.

`ls` : lista as pastas.

`ls -al` : lista todas as pastas, também as ocultas.


#### Configuração Alias

`git config --global alias.<sigla para abreviar os comandos> " <comandos para serem salvos> " ` : salvar em config uma abreviação para comandos extensos, usando alias.

`git config --global -l `: visualiza os alias salvos em config sem modificar.

`git config --global -e `: visualiza os alias salvos em config com possibilidade de modificar.


#### Diferentes formas de adicionar arquivos

`git add "*.<tipo de arquivo>"`: adiciona todos os arquivos daquele tipo no projeto inteiro.

`git add "*.<tipo de arquivo>"`: adiciona todos os arquivos daquele tipo na pasta.

`git add --all` ou `git add -A`: adiciona todos os arquivos.

`git add <pasta>/`: adiciona todos os arquivos da pasta.

`git add <pasta>/<tipo de arquivos>`: adiciona todos os arquivos da pasta que são de determinado tipo (ex.: .png).


####