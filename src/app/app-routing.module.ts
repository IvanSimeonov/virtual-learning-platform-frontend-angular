import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './course-management/course-detail/course-detail.component';
import { CourseListComponent } from './course-management/course-list/course-list.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
