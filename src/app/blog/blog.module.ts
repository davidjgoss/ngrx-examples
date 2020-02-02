import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogComponent} from './blog.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {StoreModule} from '@ngrx/store';
import {blogReducer, featureName} from './blog.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BlogEffects} from './blog.effects';

@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, blogReducer),
    EffectsModule.forFeature([BlogEffects])
  ]
})
export class BlogModule {
}
