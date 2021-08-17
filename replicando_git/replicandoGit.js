//esse arquivo foi criado baseado nessa publicação -> https://gabrieluizramos.com.br/versionamento-e-estrutura-de-dados

const git = {
  head: null,
  stage: [],
  init() {
    return this;
  },
  add(file) {
    this.stage.push(file);

    return this;
  },
  commit(message) {
    if (!this.stage.length) {
      console.log('Nothing to commit');
    } else {
      const prefix = '#';
      const currentHash = this.head ? this.head.hash.replace(prefix, '') : 0;
      const hash = `${prefix}${Number(currentHash) + 1}`;
      const commit = {
        hash,
        message,
        files: this.stage,
        date: new Date(),
        previous: this.head
      };

      this.head = commit;
      this.stage = [];
    }

    return this;
  },
  log() {
    if (!this.head) {
      console.log('No commits yet');
    } else {
      const divider = '-'.repeat(100);
      const newline = '\n';
      const log = [];

      let cursor = this.head;
      while (cursor) {
        const message = [
          `Commit: ${cursor.hash}`,
          `Message: ${cursor.message}`,
          `Date: ${cursor.date}`,
        ].join(newline);

        log.push(message);
        cursor = cursor.previous;
      }

      const history = log.join(`${newline}${divider}${newline}`);
      console.log(history);
    }

    return this;
  },
  status() {
    const status = this.stage.length ? `Changes to commit ${this.stage}` : 'Nothing to commit';
    console.log(status);

    return this;
  }
};

const repo = git.init();
repo
  .status() // Nothing to commit
  .log() // No commits yet
  .commit() // Nothing to commit
  .add('index.html')
  .add('style.css')
  .add('bundle.js')
  .status() // Changes to commit index.html,style.css,bundle.js
  .commit('iniciando o projeto')
  .status() // Nothing to commit
  .add('index2.html')
  .commit('inserindo segundo arquivo HTML')
  .add('style.css')
  .commit('ajustando CSS')
  .status() // Nothing to commit
  .log(); // Exibe histórico de todos os commits

//para rodar o arquivo no terminal escreva: node replicandoGit.js