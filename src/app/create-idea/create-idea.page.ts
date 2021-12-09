import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdeasService } from '../ideas.service';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.page.html',
  styleUrls: ['./create-idea.page.scss'],
})
export class CreateIdeaPage implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ideasService: IdeasService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      const { title, description } = this.form.value;
      const newIdea = this.ideasService.create({ title, description });

      if (newIdea) {
        console.log('Idea creada!', newIdea);
        this.router.navigate(['/']);
      }
    } else {
      console.log('hay problemas con el formulario');
    }
  }
}
