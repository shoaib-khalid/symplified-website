import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { Email } from 'app/core/email/email.types';

@Injectable({
    providedIn: 'root'
})
export class EmailService
{
    private _email: ReplaySubject<Email> = new ReplaySubject<Email>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Send the email
     *
     * @param email
     */
    send(email: Email): Observable<any>
    {
        // TODO: use apiserver as dynamic URL
        const url = "https://api.symplified.it/email-service/v1/email/no-reply/interest";
        // TODO: make this more secure
        // const accessToken = "accessToken";
        // const header = {
        //     headers: new HttpHeaders().set("Authorization", `${accessToken}`),
        // };

        return this._httpClient.post<Email>(url, email).pipe(
            map((response) => {
                this._email.next(response);
                return response;
            })
        );
    }
}
