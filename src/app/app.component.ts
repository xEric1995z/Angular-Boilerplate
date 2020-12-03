import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular10';
  postForm;
  postsAry: PostData[] = [];
  errorMsg = {
    title: '',
    content: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(5)]],
      content: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.api.getPosts().subscribe(
      (data: any) => {this.postsAry = data.posts},
      error => console.log('Get Error', error)
    )
  }

  _initErrorMsg() {
    this.errorMsg = { title: '', content: '' };
  }

  _formChecking(postData: PostData) {
    this._initErrorMsg();
    const { title, content } = this.postForm.controls;
    if (title.errors) {
      const { required, maxlength } = title.errors;
      if (required) {
        this.errorMsg.title = 'Title is required';
      } else if (maxlength) {
        this.errorMsg.title = 'Cannot exceed 5 chars';       
      }
    }  
    if (content.errors) {
      const { required, minlength } = content.errors;
      if (required) {
        this.errorMsg.content = 'Content is required';
      } else if (minlength) {
        this.errorMsg.content = "Cannot less than 5 chars";
      }
    }  
  }

  onSubmit(postData: PostData) {
    const { title, content } = this.errorMsg;
    this._formChecking(postData);
    if ((title&&content) === '') {
      this.api.addPosts(postData).subscribe(
        data => {
          alert(data.message);
        },
        error => console.log('Post Error', error)
      )
      this.postForm.reset();
    }
  }

}

interface PostData {
  title: String, 
  content: String
}