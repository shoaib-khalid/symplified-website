import { Route } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { LandingPricingComponent } from 'app/modules/landing/pricing/pricing.component';
import { LandingAboutUsComponent } from 'app/modules/landing/about-us/about-us.component';
import { LandingContactUsComponent } from 'app/modules/landing/contact-us/contact-us.component';
import { LandingECommerceComponent } from 'app/modules/landing/solutions/ecommerce/ecommerce.component';
import { LandingFnBComponent } from 'app/modules/landing/solutions/fnb/fnb.component';
import { LandingServicesComponent } from 'app/modules/landing/solutions/services/services.component';
import { LandingWhySymplifiedComponent } from 'app/modules/landing/why-symplified/why-symplified.component';
import { LandingPrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';
import { LandingRefundPolicyComponent } from './legal/refund-policy/refund-policy.component';
import { LandingTermAndConditionComponent } from './legal/terms-and-conditions/terms-and-conditions.component';

export const landingRoutes: Route[] = [
    {
        path     : '',
        component: LandingHomeComponent
    },
    {
        path     : 'pricing',
        component: LandingPricingComponent
    },
    {
        path     : 'about-us',
        component: LandingAboutUsComponent
    },
    {
        path     : 'contact-us',
        component: LandingContactUsComponent
    },
    {
        path     : 'why-symplified',
        component: LandingWhySymplifiedComponent
    },
    {
        path     : 'solutions',
        children : [
            {
                path     : 'fnb',
                component: LandingFnBComponent
            },
            {
                path     : 'ecommerce',
                component: LandingECommerceComponent
            },
            {
                path     : 'services',
                component: LandingServicesComponent
            }
        ]
    },
    {
        path     : 'legal',
        children : [
            {
                path     : 'privacy-policy',
                component: LandingPrivacyPolicyComponent
            },
            {
                path     : 'refund-policy',
                component: LandingRefundPolicyComponent
            },
            {
                path     : 'terms-and-conditions',
                component: LandingTermAndConditionComponent
            }
        ]
    }
];