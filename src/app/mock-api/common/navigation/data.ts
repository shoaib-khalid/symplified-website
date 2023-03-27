/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'solutions',
        title   : 'Solutions',
        type    : 'collapsable',
        children: [
            {
                id      : 'solution-fnb',
                title   : 'F&B',
                type    : 'basic',
                icon    : 'mat_outline:fastfood',
                link    : '/solutions/fnb',
            },
            {
                id   : 'solution-retail',
                title: 'Retail',
                type : 'basic',
                icon : 'heroicons_outline:shopping-bag',
                link : '/solutions/retail'
            },
            {
                id   : 'solution-services',
                title: 'Services',
                type : 'basic',
                icon : 'feather:tool',
                link : '/solutions/services'
            }
        ],
        icon : 'heroicons_outline:light-bulb',
        link : '/example'
    },
    {
        id   : 'why-symplified',
        title: 'Why SYMplified',
        type : 'basic',
        icon : 'heroicons_outline:question-mark-circle',
        link : '/why-symplified'
    },
    {
        id   : 'about-us',
        title: 'About Us',
        type : 'basic',
        icon : 'heroicons_outline:information-circle',
        link : '/about-us'
    },
    // {
    //     id   : 'pricing',
    //     title: 'Pricing',
    //     type : 'basic',
    //     icon : 'price_check',
    //     link : '/pricing'
    // }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'solutions',
        title: 'Solutions',
        type : 'collapsable',
        children: [
            {
                id      : 'solution-fnb',
                title   : 'F&B',
                type    : 'basic',
                icon    : 'mat_outline:fastfood',
                link    : '/solutions/fnb',
            },
            {
                id   : 'solution-retail',
                title: 'Retail',
                type : 'basic',
                icon : 'heroicons_outline:shopping-bag',
                link : '/solutions/retail'
            },
            {
                id   : 'solution-services',
                title: 'Services',
                type : 'basic',
                icon : 'feather:tool',
                link : '/solutions/services'
            }
        ],
        icon : 'heroicons_outline:light-bulb',
        link : '/example'
    },
    {
        id   : 'contact-us',
        title: 'Contact Us',
        type : 'basic',
        icon : 'mat_outline:contact_mail',
        link : '/contact-us'
    },
    // {
    //     id   : 'why-symplified',
    //     title: 'Why SYMplified',
    //     type : 'basic',
    //     icon : 'heroicons_outline:question-mark-circle',
    //     link : '/why-symplified'
    // },
    {
        id   : 'about-us',
        title: 'About Us',
        type : 'basic',
        icon : 'heroicons_outline:information-circle',
        link : '/about-us'
    },
    // {
    //     id   : 'pricing',
    //     title: 'Pricing',
    //     type : 'basic',
    //     icon : 'price_check',
    //     link : '/pricing'
    // }
];
