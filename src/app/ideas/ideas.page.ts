import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ideaTags } from '../idea.interface';
import { IdeasService } from '../core/services/ideas.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.page.html',
  styleUrls: ['./ideas.page.scss'],
})
export class IdeasPage {
  ideas$ = this.ideasService.getAll();
  ideaTags = ideaTags;

  constructor(private router: Router, private ideasService: IdeasService) {}

  goToCreateIdea() {
    this.router.navigate(['/create']);
  }
}
