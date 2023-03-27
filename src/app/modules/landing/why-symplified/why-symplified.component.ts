import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'landing-why-symplified',
    templateUrl  : './why-symplified.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingWhySymplifiedComponent
{
    faqs: { question: string; answer: string; isOpen: boolean}[] = [];
    info: { email: string; phonenumber: string; address: string;};

    /**
     * Constructor
     */
    constructor()
    {
        this.faqs = [
            {
                question: "1. What is Symplified?",
                answer: `<span>Symplified is your personalised online store to sell your goods and services. It is simple and easy to use.</span>`,
                isOpen: false
            },
            {
                question: "2. What makes Symplified different from competitors?",
                answer: `<span>Symplified offers the option of paying as you use (per transaction) with no monthly fee.</span>`,
                isOpen: false
            },
            {
                question: "3. Who should use Symplified?",
                answer: `<span>Symplified is suitable for small and medium local businesses who want to maximise their margins.</span>`,
                isOpen: false
            },
            {
                question: "4. How do I sign up for a Symplified account?",
                answer: `<span>Please email us at <a class="underline text-primary-500" href="mailto:ask@symplified.biz">ask@symplified.biz</a> or contact us via this <a class="underline text-primary-500" href="">form</a>.</span>`,
                isOpen: false
            }
        ];

        this.info = {
            email: "ask@symplified.biz",
            phonenumber: "+6013 363 9668",
            address: "Unit S-14-09, Level 14, First Subang Jalan SS15/4G, 47500 Subang Jaya, Selangor, Malaysia"
        };
    }
}
