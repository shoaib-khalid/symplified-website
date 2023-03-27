import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { landingRoutes } from 'app/modules/landing/landing.routing';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { LandingFnBComponent } from 'app/modules/landing/solutions/fnb/fnb.component';
import { LandingAboutUsComponent } from 'app/modules/landing/about-us/about-us.component';
import { LandingPricingComponent } from 'app/modules/landing/pricing/pricing.component';
import { LandingWhySymplifiedComponent } from 'app/modules/landing/why-symplified/why-symplified.component';
import { LandingRetailComponent } from 'app/modules/landing/solutions/retail/retail.component';
import { LandingServicesComponent } from 'app/modules/landing/solutions/services/services.component';
import { LandingContactUsComponent } from 'app/modules/landing/contact-us/contact-us.component';
import { LandingTermAndConditionComponent } from 'app/modules/landing/legal/terms-and-conditions/terms-and-conditions.component';
import { LandingRefundPolicyComponent } from 'app/modules/landing/legal/refund-policy/refund-policy.component';
import { LandingPrivacyPolicyComponent } from 'app/modules/landing/legal/privacy-policy/privacy-policy.component';

@NgModule({
    declarations: [
        LandingHomeComponent,
        LandingAboutUsComponent,
        LandingContactUsComponent,
        LandingPricingComponent,
        LandingWhySymplifiedComponent,
        LandingFnBComponent,
        LandingRetailComponent,
        LandingServicesComponent,
        LandingPrivacyPolicyComponent,
        LandingRefundPolicyComponent,
        LandingTermAndConditionComponent
    ],
    imports     : [
        RouterModule.forChild(landingRoutes),
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule
    ]
})
export class LandingModule
{
}
