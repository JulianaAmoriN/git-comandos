# _Comandos Git_  

Esse repositório tem como obejtivo listar comandos do git, visando facilitar o dia a dia do desenvolvedor. 

#### Comandos mais usados 


`git pull` : atualizar o repositório local com o remoto.

`git pull --all` : atualizar o reposítorio local com o remoto (trás branchs de outras pessoas).

`git push --tags` : subir as tags para o repositório remoto.

`git fetch` : atualiza o repositório local mas não substitui.

`git clone` : criar uma pasta em seu computador com o nome do repositório e clona todos os arquivos localmente.

`git add .` : adicionar todos os arquivos antes de commitá-lo.

`git add <nome do arquivo>` : adicionar um arquivo antes de commitá-lo.

`git commit -m " <menssagem> "` : commit das alterações e insere uma mensagem.

`git push` : enviar os commits para o repositório remoto.

`git checkout -b <nome da branch>` : criar uma nova branch.

`git status` : verificar o status dos arquivos e a branch.

`git checkout -- .` : retornar para as alterações do último commit.

`git checkout -- <nome do arquivo>.` : desfaz a última alteração do arquivo.

`git log` : listar commits realizados.

`git init`: inicializar o git no projeto localmente.

`git commit -am " <menssagem> "` : commit sem a necessidade de adicionar arquivos modificados antes.

`git commit --amen -m " <menssagem> "` : corrigir a mensagem do commit.

`git branch  <nome da branch>` : criar uma branch.

`git checkout  <nome da branch>` : entrar na branch.

`git checkout -b  <nome da branch>` : criar e entrar na branch.

`git marge <nome da branch>` : unir a branch a master.

`git branch -d <nome da branch>` : depois de mergear a branch é uma boa pratica apaga-lá, se for necessário realizar mais alterações criar uma nova branch.

`git marge <nome da branch>`: fazer marge com a master, deve estar na master.

`git branch -m master main` : renomeia a master para main. 

`git remote prune origin` : atualizar as referências do repositório local com remoto.

`git push origin :<nome da branch>` : excluir a branch do repositório remoto.

`git reflog` : ver a linha do tempo do git.

#### Terminal Shell 

`mkdir <nome>` : criar pasta

`pwd` : mostrar endereço atual.

`cd <nome da pasta>` : abrir uma pasta.

`ls` : listar as pastas.

`ls -al` : listar todas as pastas, também as ocultas.


#### Configuração Alias

`git config --global alias.<sigla para abreviar os comandos> " <comandos para serem salvos> " ` : salvar em config uma abreviação para comandos extensos, usando alias.

`git config --global -l `: visualizar os alias salvos em config sem modificar.

`git config --global -e `: visualizar os alias salvos em config com possibilidade de modificar.


#### Diferentes formas de adicionar arquivos

`git add "*.<tipo de arquivo>"`: adicionar todos os arquivos daquele tipo no projeto inteiro.

`git add "*.<tipo de arquivo>"`: adicionar todos os arquivos daquele tipo na pasta.

`git add --all` ou `git add -A`: adicionar todos os arquivos.

`git add <pasta>/`: adicionar todos os arquivos da pasta.

`git add <pasta>/<tipo de arquivos>`: adicionar todos os arquivos da pasta que são de determinado tipo (ex.: .png).

`git add -u` : adicionar apenas arquivos que foram modificados e excluídos.


#### Commits e manipulação de arquivos

`git reset --soft <identificação do commit>` : reverter para o commit selecionado.

`git reset --mixed <identificação do commit>` : apagar o commit da linha do tempo, porém mantem as modificações.

`git reset --hard <identificação do commit>` : apagar as modificações e os commits realizados após o commit que retornamos, ou retorna ao estado do commit identificado.

`git reflog` : mostrar o histórico de tudo que foi feito. 

`git mv <nome do arquivo> <novo nome do arquivo>` : renomear arquivo.

`git rm <nome do arquivo>`: remover arquivo.



#### Git ignore

`git remote -v` : ver os repositórios remotos que temos acesso.

`git remote add upstream <link do repositorio original>` : agregar o reporitório de base do fork para manter o projeto forkado atualizado.

`git pull upstream` : faz o pull com o repositório original do fork.


#### Git ignore

`.gitignore` : arquivo para colocar nomes de arquivos e pastas que não queremos subir para o github.


#### Etiquetas (tags)

`git tag <nome da tag>` : criar tag.

`git tag` : vizualizar todas as tags criadas.

`git tag -d <nome da tag>` : apagar tag.

`git tag -a <nome da tag> <identificação do commit> -m " <menssagem da tag> "` : criar tag e adicionar em determinado commit.

`git show <nome da tag>` : vizualizar informações do commit com a tag.

`git push --tags`


#### WIP (Working in Progress)

`git stash` : guardada as alterações localmente "de forma oculta" em uma área temporal.

`git stash pop` : extrai as modificações do stash para continuar mexendo.

`git stash list` : mostra se existe algum elemento em stash.

`git stash drop` : apagar a lista de stash.

`git stash apply` : restaura o último registro em stash.

`git show stash stash@{<número do stash>}` : mostrar as modificações de cada stash.

`git stash save "<mensagem sobre o stage>"` : guardada as alterações localmente "de forma oculta" em uma área temporal com uma mensagem para descrição.

`git stash clear` : apaga todo que está em stage permanentemente.

#### Git Rabase

`git rebase master` : ataualizará a branch com a master, deve estar dentro da branch.

`git rebase -i HEAD~<quantidade de commits>` : abre menu interativo.

`(squash)` : unir dois commits ou mais em um.

`(reword)` : modificar mensagem do commit.

`(edit)` : editar as modificações feitas.

`git reset HEAD^` : permite voltar as alterações sem destruir. 

`git rebas --continue` : após concluir as modificações salva e conclui o rebase edit.

#### Markdown
[Tutorial de Markdown](https://www.markdowntutorial.com/)

[Editor de Markdown](https://dillinger.io/)

[Repositótio com tags Markdown](https://github.com/codarme/lesson-markdown)


#### Contibuições :)

As contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer são ** muito apreciadas **.

    1. Faça um fork do projeto
    2. Crie seu Feature Branch (git checkout -b feature / AmazingFeature)
    3. Faça commit de suas alterações (git commit -m 'Add some AmazingFeature')
    4. Envie para a Branch (git push origin feature / AmazingFeature)
    5. Abra uma solicitação pull


#### Links 

[Guides GitHub](https://guides.github.com/)