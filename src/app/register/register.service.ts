import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs/internal/observable';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apollo: Apollo) { }

  register(obj: {username: string,email: string, password: string}): Observable<any> {
    return this.apollo.mutate<any>({
          mutation: gql`
          mutation {
            register(user: {
                username: "${obj.username}",
                email: "${obj.email}",
                password: "${obj.password}"
            }) {
                _id
                username
                email
            }
          }`
        });
  }
}
