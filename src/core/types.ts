const TYPES = {
  HttpClient: Symbol.for('HttpClient'),

  ICategoriaRepository: Symbol.for('ICategoriaRepository'),
  ICategoriaService: Symbol.for('ICategoriaService'),

  ICorRepository: Symbol.for('ICorRepository'),
  ICorService: Symbol.for('ICorService'),

  IGradeRepository: Symbol.for('IGradeRepository'),
  IGradeService: Symbol.for('IGradeService'),

  IPrecoRepository: Symbol.for('IPrecoRepository'),
  IPrecoService: Symbol.for('IPrecoService'),

  IProdutoRepository: Symbol.for('IProdutoRepository'),
  IProdutoService: Symbol.for('IProdutoService'),

  ITamanhoRepository: Symbol.for('ITamanhoRepository'),
  ITamanhoService: Symbol.for('ITamanhoService'),
};

export default TYPES;
