import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AlertService, UserService} from '../_services';

@Component({templateUrl: 'registerPlayer.component.html'})
export class RegisterPlayerComponent implements OnInit {
  registerPlayerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.registerPlayerForm = this.formBuilder.group({
      playerName: ['', Validators.required],
      playerSkill: ['', Validators.required],
      playerLevel: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerPlayerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerPlayerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.create(this.registerPlayerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
