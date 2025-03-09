import { Router, RouterLink } from '@angular/router';
import { StudentService } from './../../services/students.service';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-students',
  imports: [MatTableModule,MatButtonModule, MatMenuModule, MatIconModule, RouterLink],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students: any
  displayedColumns = ['firstname', 'lastname', 'school', 'action']
  columns = [
    { id: 'firstname', display: 'First Name'},
    { id: 'lastname', display: 'Last Name'},
    { id: 'school', display: 'School'},
    { id: 'action', display: 'Action'},
  ]
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public studentService : StudentService,
    public router : Router,
    private snackBar: MatSnackBar
  ){
    this.getStudents()
  }

  async getStudents(){
    this.students = await this.studentService.getStudentList()
  }

  async rowClick(row: any){
    this.router.navigate([`/students/${row._id}`])
  }

  async deleteStudent(studentId: any){
    const res:any = await this.studentService.deleteStudent(studentId)
    if(res && res.success){
      this.openSnackBar('Student Deleted Successfully')
    }
    await this.getStudents()
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2 * 1000,
    });
  }
}
