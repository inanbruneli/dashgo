import {createServer, Factory, Model, Response, ActiveModelSerializer} from 'miragejs';
import { faker } from '@faker-js/faker';

type User = {
  name: string;
  email: string;
  create_at: string;
}

export function makeServer(){
  console.log(faker.name)
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },

    models:{
      user: Model.extend<Partial<User>>({})
    },

    factories:{
      user: Factory.extend({
        name() {          
          return  faker.name.findName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt(){
          return faker.date.recent(10);
        },
      })
    },

    seeds(server){
      server.createList('user', 200);
    },

		routes() {
			this.namespace = "api";
			this.timing = 750;

			this.get("/users", function (schema, request) {
        console.log(request.queryParams)
				const { page = 1, per_page = 10 } = request.queryParams;

				const pageAsNumber = Number(page);
				const perPageAsNumber = Number(per_page);

				const total = schema.all("user").length;

				const pageStart = (pageAsNumber - 1) * perPageAsNumber;
				const pageEnd = pageStart + perPageAsNumber;

				let users = this.serialize(schema.all("user")).users.slice(pageStart, pageEnd);
        users = users.sort(function(a, b) { 
          return a.id - b.id  ||  a.name.localeCompare(b.name);
        });

				return new Response(200, { "x-total-count": String(total) }, { users });
			});

      this.get('/users/:id');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}