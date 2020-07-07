import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { alert } from 'devextreme/ui/dialog';
import { AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  public loading = false;
  title0: string;
  title1: string;
  emailText: string;
  inputEmail = false;
  constructor(
    private route: ActivatedRoute,
    private dataSvc: DataService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.title0 = this.route.snapshot.paramMap.get('title0');
    this.title1 = this.route.snapshot.paramMap.get('title1');
    this.inputEmail = !!this.route.snapshot.paramMap.get('email');
    if (this.inputEmail) {
      this.emailText = this.route.snapshot.paramMap.get('email');
    }
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
