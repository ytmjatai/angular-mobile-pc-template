import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public loading = false;
  title0: string;
  title1: string;
  emailText: string;
  inputEmail = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit = async (e) => {
    // try {
    //   this.loading = true;
    //   const m: AccountLoginModel = {email: this.emailText};
    //   await this.authService.lookupServer(m);

    //   await this.dataSvc.setEmail(this.emailText);
    //   // alert('Please check email to reset your password.', 'Forgot password');
    // } catch (reject) {
    //   this.loading = false;
    //   console.error(reject);
    //   if ( reject.status !== 403) {
    //       const result2 = alert('Something went wrong.', 'Error');
    //   }
    //   return;
    // }

    // this.loading = false;
    // const result = alert('Please check email to reset your password.', 'Forgot password');
    // result.then((dialogResult) => {
    //   history.back();
    // });
    // this.toast.showToast(
    //   'An message have been set to your email, please check.',
    //   'success',
    //   2000
    // );
    // e.preventDefault();

  }

  public onCancel() {
    history.back();
  }

}
