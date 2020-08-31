import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

const material = [
    MatButtonModule,
    MatCardModule,
    MatInputModule
];

@NgModule({
    imports: [material],
    exports: [material]
})
export class MaterialModule {}
