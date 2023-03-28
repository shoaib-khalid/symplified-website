import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'app/core/email/email.service';
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";
@Component({
    selector     : 'landing-why-symplified',
    templateUrl  : './why-symplified.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingWhySymplifiedComponent
{
    faqs: { question: string; answer: string; isOpen: boolean}[] = [];
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

        // FAQs 
        this.faqs = [
            {
                question: "1. What is SYMplified?",
                answer: `<span>SYMplified is your personalised online store to sell your goods and services. It is simple and easy to use.</span>`,
                isOpen: false
            },
            {
                question: "2. What makes SYMplified different from competitors?",
                answer: `<span>SYMplified offers the option of paying as you use (per transaction) with no monthly fee.</span>`,
                isOpen: false
            },
            {
                question: "3. Who should use SYMplified?",
                answer: `<span>SYMplified is suitable for small and medium local businesses who want to maximise their margins.</span>`,
                isOpen: false
            },
            {
                question: "4. How do I sign up for a SYMplified account?",
                answer: `<span>Please email us at <a class="underline text-primary-500" href="mailto:ask@symplified.biz">ask@symplified.biz</a> or contact us via below form.</span>`,
                isOpen: false
            }
        ];

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

    /**
     * Scrolls to the specified section element.
     * @param section - The section element to scroll to.
     */
    scrollToSection(el) {        
        const duration = 600;
        const interval = 5;
        const move = el.scrollTop * interval / duration;
        observableInterval(interval).pipe(
          scan((acc, curr) => acc - move, el.scrollTop),
          tap(position => el.scrollTop = position),
          takeWhile(val => val > 0)).subscribe();
    }
}
