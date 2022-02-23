import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userData } from 'src/app/shared/interfaces/userData';
import { UserDataService } from 'src/app/shared/services/userData/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() userData?: userData;
  form!: FormGroup;
  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(
        this.userDataService.getData().username,
        Validators.required
      ),
      email: new FormControl(
        { value: this.userDataService.getData().email, disabled: true },
        [Validators.required, Validators.email]
      ),
      age: new FormControl(
        this.userDataService.getData().age,
        Validators.required
      ),
    });
  }

  updateUserData() {
    if (this.form.status === 'VALID') {
      this.userDataService.setData({
        username: this.form.get('username')?.value,
        email: this.form.get('email')?.value,
        age: this.form.get('age')?.value,
      });
      this.form
        .get('username')
        ?.setValue(this.userDataService.getData().username);
      this.form.get('email')?.setValue(this.userDataService.getData().email);
      this.form.get('age')?.setValue(+this.userDataService.getData().age);
      alert('Data saved successfully')
    }
  }
}
