import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'app/core/email/email.service';

@Component({
    selector     : 'landing-contact-us',
    templateUrl  : './contact-us.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingContactUsComponent implements OnInit
{
    info: { email: string; phonenumber: string; address: string;};
    emailForm : FormGroup;

    isLoading: boolean = false;
    isComplete: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _emailService: EmailService
    )
    {   
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngOnInit(): void {

        // SYMplified information
        this.info = {
            email: "ask@symplified.biz",
            phonenumber: "+6013 363 9668",
            address: "Unit S-14-09, Level 14, First Subang Jalan SS15/4G, 47500 Subang Jaya, Selangor, Malaysia"
        };

        // Create the form
        this.emailForm = this._formBuilder.group({
            name        : ['', Validators.required],
            email       : ['', [Validators.required,Validators.email]],
            contactNo   : ['', [Validators.required, Validators.minLength(12)]],
            companyName : [''],
            industry    : ['']
        });

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Method to send email
     */
    sendEmail(): void {
        // Set loading to true
        this.isLoading = true;

        const { name, email, contactNo, companyName, industry } = this.emailForm.value;
        this._emailService.send({ name, email, contactNo, companyName, industry })
            .subscribe((response) => {
                if (response) {
                    // Set complete to true
                    this.isComplete = true;
                }

                // Set loading to false
                this.isLoading = false;
            });
    }

}
