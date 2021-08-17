import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {
  opCode = 'Enter your opcode';
  operater = new FormControl('');
 
// With classes how we initialise properties when we instantiate an object is via a special class function called a constructor.
  constructor(
    private router: Router
  ) { 

  }

  ngOnInit(): void {
  }

  // This function will naviagte to the another page though the path in router
  // router.navigate(['/path_in_router'])
  // tslint:disable-next-line:no-unused-expression
  goHome(): void{
    this.router.navigate(['']);
  }

  testSwal(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    // tslint:disable-next-line:align
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    });
  }
}
