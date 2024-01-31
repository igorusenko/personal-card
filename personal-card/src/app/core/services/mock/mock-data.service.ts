import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {IExperience} from "../../interfaces/experience.interface";
import {IProject} from "../../interfaces/projects.interface";

@Injectable({
  providedIn: 'root'
})

export class MockDataService {

  constructor() {

  }

  getExperience(): Observable<Array<IExperience>> {
    const experience: Array<IExperience> = [
      {
        id: 0,
        role: 'Angular Developer',
        grade: 'Middle+ Angular Developer',
        period: '6 months',
        description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
      },
      {
        id: 1,
        role: 'Angular Developer',
        grade: 'Middle+ Angular Developer',
        period: '6 months',
        description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
      },
      {
        id: 2,
        role: 'Angular Developer',
        grade: 'Middle+ Angular Developer',
        period: '6 months',
        description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
      },
      {
        id: 3,
        role: 'Angular Developer',
        grade: 'Middle+ Angular Developer',
        period: '6 months',
        description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
      },

    ];
    return of(experience);
  }

  getProjects(): Observable<Array<IProject>> {
    const projects: Array<IProject> = [
      {
        id: 0,
        image: 'assets/images/50e49b13366519.56272e588be3c.jpg',
        title: 'Digital Profile (Redesign)',
        description: 'Video course that teaches how to build a web app with the Spotify Web API.\n' +
          '                  Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled\n' +
          '                  Components, and more.'
      },
      {
        id: 1,
        image: 'assets/images/50e49b13366519.56272e588be3c.jpg',
        title: 'Digital Profile (Redesign)',
        description: 'Video course that teaches how to build a web app with the Spotify Web API.\n' +
          '                  Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled\n' +
          '                  Components, and more.'
      },
      {
        id: 2,
        image: 'assets/images/50e49b13366519.56272e588be3c.jpg',
        title: 'Digital Profile (Redesign)',
        description: 'Video course that teaches how to build a web app with the Spotify Web API.\n' +
          '                  Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled\n' +
          '                  Components, and more.'
      }
    ];
    return of(projects);
  }

}
