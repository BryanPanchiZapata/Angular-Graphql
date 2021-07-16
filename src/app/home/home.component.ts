import { Component, OnInit } from '@angular/core';
import { Apollo, graphql } from 'apollo-angular';

const get_pokemon = graphql`
  query {
    pokemons(first: 500) {
      id
      number
      name
      image
      classification
    }
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .query({
        query: get_pokemon,
      })
      .subscribe(({ data }) => {
        this.data = data;
      });
  }
}
