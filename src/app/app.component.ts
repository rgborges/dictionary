import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Meanings, Phonetics, WordsResponse } from './models/Reponse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dicsearch';
  private mainUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  public englishWord: string = '';
  public dictionaryWords: Array<WordsResponse> = [];
  public wordPainelVisible: boolean;

  public word: string = '';
  public phonetic: string = '';
  public origin: string = '';
  public meanings: Array<Meanings> = [];
  public phonetics: Array<Phonetics> = [];

  constructor(private http: HttpClient) {
    this.wordPainelVisible = false;
  }

  search() {
    let word = this.englishWord;
    let fullUrl = this.mainUrl + word;
    this.http.get<Array<WordsResponse>>(fullUrl).subscribe((response) => {
      let result = response;
      console.log(result);
      if (result.length > 0) {
        this.wordPainelVisible = true;
      }
      for (let r of result) {
        this.phonetic = r.phonetic;
        this.word = r.word;
        this.origin = r.origin;
        this.meanings = r.meanings;
        this.phonetics = r.phonetics;
      }
    });
  }
}



