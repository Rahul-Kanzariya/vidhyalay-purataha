import { StudentsComponent } from './students.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentService } from '../../services/students.service';

const routes: Routes = [
    {
        path: ':studentId',
        component: EditStudentComponent
    },
    {
        path: '',
        component: StudentsComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    providers: [StudentService]
})
export class StudentsModule { }