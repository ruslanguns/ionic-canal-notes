import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.page.html',
  styleUrls: ['./ideas.page.scss'],
})
export class IdeasPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToCreateIdea() {
    this.router.navigate(['/create']);
  }
}
