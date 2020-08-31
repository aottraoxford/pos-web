import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apollo: Apollo) { }

  // tslint:disable-next-line: typedef
  register(obj: {username: string, email: string, password: string}) {
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
