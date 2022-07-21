import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-blog-single-posts-comment',
  templateUrl: './blog-single-posts-comment.component.html',
  styleUrls: ['./blog-single-posts-comment.component.css']
})
export class BlogSinglePostsCommentComponent implements OnInit {

  constructor() { }
  
  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }  

  ngOnInit(): void {
  }

}
