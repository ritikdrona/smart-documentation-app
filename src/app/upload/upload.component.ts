import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Image } from '../allinterface';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass']
})
export class UploadComponent implements OnInit {
  uploadedFiles: any[] = [];
  public formdata = new FormData();
  public imagearr: any[] = [];

  constructor(private service: AppServiceService) {
  }

  ngOnInit(): void {
  }
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  save() {
    this.uploadedFiles.forEach(res => this.formdata.append('file', res))
    this.service.postImages(this.formdata).subscribe(res=>{
      this.imagearr = res.file
      console.log(this.imagearr)
    })
  }
  saveConverted(){

  }
}
