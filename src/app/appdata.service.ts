import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class AppdataService {
  url = "http://jsonplaceholder.typicode.com/users";
  
  
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url)
    .pipe(
      map((response) => {
        return response;
      })
    );

  }

  add(item) {
    this.items.push(item);
  }

  delete(item) {
    var del = this.items.indexOf(item);
    this.items.splice(del,1);
  }



  items = [

    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": [
        { "street": "Kulas Light", },
        { "suite": "Apt. 556", },
        { "city": "Gwenborough" }
      ],
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": [
        { "street": "Victor Plains" },
        { "suite": "Suite 879" },
        { "city": "Wisokyburgh" }
      ],
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": [
        { "street": "Douglas Extension" },
        { "suite": "Suite 847" },
        { "city": "McKenziehaven" }
      ],
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": [
        { "street": "Hoeger Mall" },
        { "suite": "Apt. 692" },
        { "city": "London" }
      ],
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": [
        { "street": "Skiles Walks" },
        { "suite": "Suite 351" },
        { "city": "Roscoeview" }
      ],
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC"
      }
    }

  ];// items


  
}// AppdataService class


// interface Users {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   street: string;
//   suite: string;
//   city: string;
// }

// interface UsersResponse {
//   users: Users[];
// }
