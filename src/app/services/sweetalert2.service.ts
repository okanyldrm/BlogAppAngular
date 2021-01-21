import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class Sweetalert2Service {
  constructor() {}

  fire(message: string) {
    Swal.fire({
      title: message,
      showConfirmButton: false,
      icon: 'success',
    });
  }
  toast(message:string,timerf:number){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: timerf,
      timerProgressBar: true,
      didOpen: (toast) => {
        // toast.addEventListener('mouseenter', Swal.stopTimer)
        // toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      
      icon: 'success',
      title: message,
      background:'red',
      
    })
  }
}
