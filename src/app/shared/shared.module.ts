import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplaceSubstringPipeModule } from './pipes/replaceSubstring/replaceSubstring.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReplaceSubstringPipeModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReplaceSubstringPipeModule
    ]
})
export class SharedModule
{
}
