import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class Sweetalert2Service {
  constructor() {}

  fire(message: string) {
    Swal.fire({
      title: message
    });
  }
}
