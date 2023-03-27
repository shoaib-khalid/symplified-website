import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }

    @HostListener('window:scroll', ['$event'])
    getScrollHeight(event) {
        console.log("masask", event);
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        console.log(window.scrollY);
    }

    // @HostListener('document:mousewheel', ['$event'])
    // onDocumentMousewheelEvent(event) {
    //     console.log('on Mouse wheel Event');
    // }
}
