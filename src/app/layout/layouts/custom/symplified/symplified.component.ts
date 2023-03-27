import { Component, OnDestroy, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { FormControl } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config';
import { Scheme } from 'app/core/config/app.config';
import { environment } from 'environments/environment';

@Component({
    selector     : 'symplified-layout',
    templateUrl  : './symplified.component.html',
    encapsulation: ViewEncapsulation.None,
    host: {
        '(window:scroll)': 'getScrollHeight($event)'
    }
})
export class SymplifiedLayoutComponent implements OnInit, OnDestroy, AfterViewInit
{
    offsetFlag: boolean = false;
    info: { social: { facebook: string};};
    isScreenSmall: boolean;
    isDarkMode: FormControl<boolean> = new FormControl(false);
    navigation: Navigation;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    public version: string = environment.appVersion;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseConfigService: FuseConfigService
    )
    {
        this.info = { social : { facebook : "https://www.facebook.com/SYMplified.biz" }};
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number
    {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        // Subscribe to navigation data
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;                
            });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {
                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });

        this.isDarkMode.valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((isDarkMode: boolean) => {
                this.setScheme(isDarkMode ? 'dark' : 'light')
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    ngAfterViewInit(): void
    {
        window.addEventListener('scroll', () => {
            console.log('scroll event fired');
          });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    /**
     * Set the scheme on the config
     *
     * @param scheme
     */
    setScheme(scheme: Scheme): void
    {
        this._fuseConfigService.config = {scheme};
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

    /**
     * Triggered when the user scrolls the scrollable div.
     * @param event - The scroll event object.
     * Calculates the scroll position and element height, and checks if the scroll has reached half of the div's height.
     */
    onScroll(event: any) {
        const scrollPosition = event.target.scrollTop;
        const elementHeight = event.target.clientHeight;
        const halfElementHeight = elementHeight / 3;
    
        if (scrollPosition > halfElementHeight) {
            this.offsetFlag = true;
        } else {
            this.offsetFlag = false;
        }
    }
}
