import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs/internal/observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apollo: Apollo) { }

  login(usernameOrEmail: string, password: string): Observable<ApolloQueryResult<unknown>> {
    return this.apollo
        .watchQuery({
          query: gql`
          {
            login (usernameOrEmail: "${usernameOrEmail}", password: "${password}") {
                jwtToken{
                    token
                }
                user {
                    _id
                    username
                    email
                }
            }
          }`
        })
        .valueChanges;
  }
}
