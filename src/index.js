class Site {
  constructor() {
    this.boards = [];
  }

  addBoard(board) {
    // 전달받은 보드의 수만큼 반복
    for (let i = 0; i < this.boards.length; i++) {
      // 동일한 이름의 board가 추가되면 에러 보냄
      if (this.boards[i].name === board.name){
        throw new Error('Error')
      }
    }
    board.status = true;
    // Board는 n개 이상 추가
    this.boards.push(board);
  }

  findBoardByName(boardName) {
    // 추가된 Board를 조회
    return this.boards.find((board) => board.name === boardName)
  }
}

class Board {
  constructor(boardName) {
    // 빈 문자열('') 또는 null 값이면 에러 보냄
    if (boardName === null || boardName === ''){
      throw new Error();
    }
    // Board는 name 데이터를 포함
    this.name = boardName;
    this.status = false;
    this.article = [];
  }

  publish(article) {
    var date = new Date();
    //site에 추가된 board 아나면 여기도 추가 못함
    if (this.status === false){
      throw new Error();
    }
    // Article에 ID를 자동 생성해서 부여
    article.id = `${this.name}-${Math.random() * 999999999}`
    // Article에 작성 일자
    article.createdDate = date.toISOString();
    article.status = true;
    this.article.push(article);
  }

  getAllArticles() {
    // Article 목록을 조회
    return this.article;
  }
}

class Article {
  constructor(article) {
    
    this.comment = [];

    if (
      article.subject === null ||
      article.subject === '' ||
      article.content === null ||
      article.content === '' ||
      article.author === null ||
      article.author === '' 
    ){
      throw new Error();
    }
    this.subject = article.subject;
    this.content = article.content;
    this.author = article.author;
    this.status = false;
  }

  reply(comment) {
    var date = new Date();
    // Board에 추가된 Article만 사용
    if (this.status === false){
      throw new Error();
    }
    // Comment에 작성 일자
    comment.createdDate = date.toISOString();
    // Comment 추가
    this.comment.push(comment);
  }

  getAllComments() {
    // Comment 조회
    return this.comment;
  }
}

class Comment {
  constructor(comment) {
    if (
      comment.content === null ||
      comment.content === '' ||
      comment.author === null ||
      comment.author === '' 
    ){
      throw new Error;
    }
    this.content = comment.content;
    this.author = comment.author;
  }
}

module.exports = {
  Site,
  Board,
  Article,
  Comment,
};