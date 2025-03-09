import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../../services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-student',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
  providers: [StudentService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditStudentComponent {
  studentForm!: FormGroup
  formType: any = null
  studentId: any = null
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public studentService: StudentService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private snackBar: MatSnackBar
  ) {
    this.createFrom()
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (param) => {
      if (param && param['studentId']) {
        this.createFrom()
        if (param['studentId'] == 'add') {
          this.formType = 'add'
        } else {
          this.formType = 'edit'
          this.studentId = param['studentId']
          const student: any = await this.getStudentById(param['studentId'])
          this.studentForm.patchValue(student)
        }
      }
    })
    this.studentForm.valueChanges.subscribe((value) => {
      this.studentForm.markAllAsTouched()
    })
  }

  createFrom() {
    this.studentForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      school: new FormControl('', [Validators.required])
    })
  }

  async submitForm() {
    if (this.formType = 'edit') {
      const res: any = await this.studentService.updateStudent(this.studentId, this.studentForm.value)
      if (res.success) {
        this.openSnackBar('Student Edit Successfully!')
      }
    }
    if (this.formType = 'add') {
      const res: any = await this.studentService.addStudent(this.studentForm.value)
      if (res.success) {
        this.openSnackBar('Student Created Successfully!')
      }
    }
    this.router.navigate(['/students'])
  }

  async getStudentById(studentId: any) {
    return await this.studentService.getStudentById(studentId)
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2 * 1000,
    });
  }
}
