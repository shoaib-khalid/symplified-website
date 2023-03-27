import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'landing-contact-us',
    templateUrl  : './contact-us.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingContactUsComponent
{
    info: { email: string; phonenumber: string; address: string;};

    /**
     * Constructor
     */
    constructor()
    {
        this.info = {
            email: "ask@symplified.biz",
            phonenumber: "+6013 363 9668",
            address: "Unit S-14-09, Level 14, First Subang Jalan SS15/4G, 47500 Subang Jaya, Selangor, Malaysia"
        };
    }
}
