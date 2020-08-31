import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apollo: Apollo) { }

  // tslint:disable-next-line: typedef
  login(usernameOrEmail: string, password: string) {
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
