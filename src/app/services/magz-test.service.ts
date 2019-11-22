import { Injectable } from '@angular/core';

// providedIn: 'root' would make this service available for the whole application.
// Angular would create a single, shared instance of the Service, and inject it into
// any class that asks for it.
@Injectable()
export class NameService {
  constructor() {}
}
