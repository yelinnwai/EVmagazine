body {
    margin: 40px;
  }

  .wrapper {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 100px 100px 100px;
      background-color: #fff;
      color: #444;
    }

    .box {
      background-color: #444;
      color: #fff;
      border-radius: 5px;
      padding: 20px;
      font-size: 150%;

    }

    .a {
      grid-column: 1 / 3;
      grid-row: 1;
    }
    .b {
      grid-column: 3 ;
      grid-row: 1 / 3;
    }
    .c {
      grid-column: 1 ;
      grid-row: 2 ;
    }
    .d {
      grid-column: 2;
      grid-row: 2;
    }


  Resources
