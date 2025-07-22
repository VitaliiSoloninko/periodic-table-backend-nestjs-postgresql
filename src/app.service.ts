import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getElements() {
    return [
      { id: 1, name: 'Hydrogen' },
      { id: 2, name: 'Helium' },
    ];
  }
}
