import { NgModule } from "@angular/core";
import { ReplaceSubstringPipe } from "./replaceSubstring.pipe";

@NgModule({
    // To enable use .html
    declarations: [ 
        ReplaceSubstringPipe
    ],
    // To enable use for global
    exports: [
        ReplaceSubstringPipe
    ],
    // To enable use for ts
    providers: [
        ReplaceSubstringPipe
    ]
})
export class ReplaceSubstringPipeModule {}