import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.page.html',
  styleUrls: ['./ideas.page.scss'],
})
export class IdeasPage implements OnInit {
  ideas = [
    {
      title: 'Crear aplicación de ideas',
      description:
        'Veniam do cillum magna laborum exercitation aliqua culpa nisi velit quis reprehenderit.',
      image: '/assets/images/1.jpeg',
    },
    {
      title: 'Consejos de arquitectura',
      description:
        'Aliqua nisi adipisicing mollit excepteur adipisicing cupidatat eu irure cupidatat.',
      image: '/assets/images/2.jpeg',
    },
    {
      title: 'Aplicación con Tailwind',
      description: 'Cupidatat eu irure cupidatat.',
      image: '/assets/images/3.jpeg',
    },
    {
      title: 'Aplicación con Strapi',
      description:
        'Veniam do cillum magna laborum exercitation aliqua culpa nisi velit quis reprehenderit.',
      image: '/assets/images/4.jpeg',
    },
    {
      title: 'Frontend con NextJS',
      description:
        'Aliqua nisi adipisicing mollit excepteur adipisicing cupidatat eu irure cupidatat.',
      image: '/assets/images/5.jpeg',
    },
    {
      title: 'Crear aplicación de ideas',
      description:
        'Veniam do cillum magna laborum exercitation aliqua culpa nisi velit quis reprehenderit.',
      image: '/assets/images/1.jpeg',
    },
    {
      title: 'Consejos de arquitectura',
      description:
        'Aliqua nisi adipisicing mollit excepteur adipisicing cupidatat eu irure cupidatat.',
      image: '/assets/images/2.jpeg',
    },
    {
      title: 'Aplicación con Tailwind',
      description: 'Cupidatat eu irure cupidatat.',
      image: '/assets/images/3.jpeg',
    },
    {
      title: 'Aplicación con Strapi',
      description:
        'Veniam do cillum magna laborum exercitation aliqua culpa nisi velit quis reprehenderit.',
      image: '/assets/images/4.jpeg',
    },
    {
      title: 'Frontend con NextJS',
      description:
        'Aliqua nisi adipisicing mollit excepteur adipisicing cupidatat eu irure cupidatat.',
      image: '/assets/images/5.jpeg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToCreateIdea() {
    this.router.navigate(['/create']);
  }
}
