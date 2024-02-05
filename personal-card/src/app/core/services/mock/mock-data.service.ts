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
        grade: 'Middle+ Angular Developer, TeamLead',
        period: 'JUN 2023 - PRESENT',
        description: 'Leading a team of Angular developers, ensuring project goals are met and deadlines are adhered to.\n' +
          'Making technical decisions and determining application architecture based on requirements and business needs.\n' +
          'Participating in planning and task allocation within the team, ensuring an even workload and development of team members.\n' +
          'Interacting with management and other departments to ensure effective project execution and achievement of business goals.',
        instruments: ['']
      },
      {
        id: 1,
        role: 'Angular Developer',
        grade: 'Middle Angular Developer',
        period: 'JULY 2022 - JUN 2023',
        description: 'Development of complex user interfaces in Angular using advanced technologies.\n' +
          'Mentoring junior developers and assisting them in learning Angular and advanced development techniques.\n' +
          'Organizing work with APIs and data processing on the frontend.\n' +
          'Implementing best development practices to ensure project efficiency and scalability.',
        instruments: ['']
      },
      {
        id: 2,
        role: 'Angular Developer',
        grade: 'Junior+ Angular Developer',
        period: 'OCT 2021 - JULY 2022',
        description: 'Advanced involvement in developing client applications using Angular.\n' +
          'Interaction with backend developers to integrate the frontend with the server-side.\n' +
          'Debugging and optimizing existing code to improve performance and user experience.\n' +
          'Participation in meetings and discussions to improve application architecture and functionality.',
        instruments: ['']
      },
      {
        id: 3,
        role: 'Angular Developer',
        grade: 'Junior Angular Developer',
        period: 'MAY 2021 - OCT 2021',
        description: 'Development of user interfaces using Angular and TypeScript.\n' +
          'Participation in the development and maintenance of client applications.\n' +
          'Working in a team of developers to achieve project goals.\n' +
          'Testing and debugging code to ensure high performance and reliability.',
        instruments: ['']
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
        description: 'Completed a full redesign of the "Digital Profile" project aimed at improving user experience and functionality. Significant changes have been made to the user interface and system interaction. Updated design, enhanced navigation, optimized registration and login processes. Implemented new features to improve usability and security levels.',
        instruments: ['RXJS', 'TS', 'Angular 16', 'Bootstrap', 'Material', 'Yandex API', 'SCSS', 'HTML']
      },
      {
        id: 1,
        image: 'assets/images/50e49b13366519.56272e588be3c.jpg',
        title: 'Digital Profile (Main)',
        description: 'The "Digital Profile" in Russia is an electronic identification document that collects information about citizens and their interactions with the government and commercial organizations. The project simplifies access to government and commercial services, reduces bureaucratic barriers, and enhances data security. It includes personal data, address, education, and employment information. Provides electronic signatures, reduces paperwork, and speeds up service delivery. The Digital Profile is a key element in digitizing and developing e-government in Russia, contributing to improved service levels for citizens and the creation of transparent mechanisms for interaction.',
        instruments: ['TS', 'HTML', 'SCSS', 'Angular 15', 'Tailwind', 'RXJS', 'Bootstrap']
      },
      {
        id: 2,
        image: 'assets/images/50e49b13366519.56272e588be3c.jpg',
        title: 'Information Security Management System',
        description: 'SUIB RF (Information Security Management System of the Russian Federation) is a comprehensive framework aimed at safeguarding information and digital resources within Russia. It encompasses regulatory development, technical solutions implementation, and professional training in information security. The project ensures high-level protection against unauthorized access, leaks, and cyber threats. It incorporates standards, audit methods, encryption technologies, authentication, and network monitoring to safeguard classified information, commercial data, and personal information. Crucial for national security and economic development, SUIB RF fosters trust in digital services, prevents cyber attacks, and upholds the interests of the state and its citizens in the online sphere.',
        instruments: ['HTML', 'SCSS', 'Angular 16', 'Material', 'RXJS', 'TS', 'Yandex API', 'Bootstrap']
      },
      {
        id: 3,
        image: 'assets/images/50e49b13366519.56272e588be3c.jpg',
        title: 'Land Auctions / Trading Portal of the Moscow Region',
        description: 'The Unified Automated System for Purchasing Management (EASUZ) is a digital platform developed to automate government and municipal procurement processes in Russia. This project facilitates efficient interaction between buyers and trading participants by aggregating information about procurement activities and participating companies into a unified database. Buyers can post information about upcoming procurements, conduct electronic procurement procedures, and manage reporting through the portal. Participation in auctions requires a special electronic signature, ensuring the security and legal validity of documents. EASUZ contributes to the transparency, efficiency, and competitiveness of government procurement processes, reduces bureaucracy, and provides accessibility to information for all stakeholders.',
        instruments: ['Angular 12-16', 'Angular Universal (SSR)', 'HTML', 'SCSS', 'RXJS', 'TS', 'Material', 'Bootstrap']
      },
      {
        id: 4,
        image: 'assets/images/50e49b13366519.56272e588be3c.jpg',
        title: 'Property and Health Insurance (strahovanie.md)',
        description: '"Insurance House" is a modern project developed using the following technologies: FrontEnd - Angular 16, BackEnd - .Net 5.0, ensuring system reliability and performance. Our project offers a wide range of insurance services, including CASCO, OSAGO, Green Card, medical insurance for travelers abroad, accident insurance, as well as property insurance for legal entities and individuals. We provide a convenient personal account for clients, as well as an administrative panel for data management. Our users can utilize a dynamic calculator to estimate insurance costs, making the process of selecting an insurance plan more transparent and convenient. Additionally, our project provides the ability to track the status of current insurance policies: users can find out if payments are being made, the status of review, and other important information. "Insurance House" aims to provide its clients with reliable protection and convenience in using insurance services.',
        instruments: ['Angular 12-16', 'Angular Universal (SSR)', 'HTML', 'SCSS', 'RXJS', 'TS', 'Material', 'Bootstrap']
      },
      {
        id: 5,
        image: 'assets/images/50e49b13366519.56272e588be3c.jpg',
        title: 'Automotive Parts Store (tiravto.md)',
        description: '"TirAvto" is a unique online project offering a wide range of auto parts and accessories for automobiles. Our website is designed for those who value convenience and speed when choosing the necessary parts for their vehicle.We provide customers with a user-friendly interface for searching and ordering parts, including engine components, brake systems, electronics, body parts, and much more. Our catalog is constantly updated to provide our customers with access to the most modern and reliable parts.In addition, "TirAvto" offers fast delivery and professional consultation on all matters related to the selection and installation of auto parts. We strive to become a reliable partner for car owners, providing high-quality products and convenience in using our website.',
        instruments: ['Angular 8', 'HTML', 'SCSS', 'RXJS', 'TS', 'Bootstrap']
      },
      {
        id: 6,
        image: 'assets/images/50e49b13366519.56272e588be3c.jpg',
        title: 'Property and Health Insurance (strahovanie.od.ua)',
        description: '"Synergy Insurance" is an innovative project that offers a wide range of insurance services, including CASCO, OSAGO, medical insurance for travelers abroad, accident insurance, as well as property insurance for legal entities and individuals. Our website features a personal account, an administrative panel, and a dynamic calculator for calculating insurance costs. You can also track the status of your current insurance, including payments and application processing. We strive to provide our clients with reliable protection and convenience in using our insurance services.',
        instruments: ['Angular 12', 'HTML', 'SCSS', 'RXJS', 'TS', 'Bootstrap', 'Material']
      }
    ];
    return of(projects);
  }

}
