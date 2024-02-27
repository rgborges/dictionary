export class WordsResponse {
      public word: string = '';
      public phonetic: string = '';
      public phonetics: Array<Phonetics> = [];
      public origin: string = '';
      public meanings: Array<Meanings> = [];
}

export class Phonetics {
      public text: string = '';
      public audio: string = '';
}

export class Meanings {
      public partOfSpeech: string = '';
      public definitions: Array<Definitions> = [];
}
export class Definitions {
      public definition: string = '';
      public example: string = '';
      public synonyms: Array<any> = [];
      public antonyms: Array<any> = [];
}