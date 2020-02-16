import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogComponent} from './blog.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {StoreModule} from '@ngrx/store';
import {blogReducer, featureName} from './blog.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BlogEffects} from './blog.effects';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import {BlogEditorComponent} from './blog-editor/blog-editor.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [BlogComponent, BlogListComponent, BlogEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, blogReducer),
    EffectsModule.forFeature([BlogEffects]),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ]
})
export class BlogModule {
}
