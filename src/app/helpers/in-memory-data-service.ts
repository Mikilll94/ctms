import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trainings = [
      {
        id: 1,
        name: 'Szkolenie z zakresu BHP',
        shortDescription: 'Przykładowy opis 1',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [
          {
            author: 'Paweł Nowak',
            content: 'Bardzo bogata wiedza, doskonale przygotowane slajdy, szkolenie niezbędne dla pracy zawodowej.',
          },
          {
            author: 'Ewa Pawlak',
            content: '100% wymagań = praktyczna formuła + ogromna wiedza + doświadczenie prowadzącego + praktyczny przekaz. Świetnie przygotowane materiały.',
          },
        ]
      },
      {
        id: 2,
        name: 'Szkolenie z zarządzania',
        shortDescription: 'Przykładowy opis 2',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [
          {
            author: 'Andrejlll',
            content: ',,Pierwszy raz spotykam się z kreatywną zabawą na szkoleniu twardym :-)',
          }
        ],
      },
      {
        id: 3,
        name: 'Kurs samoobrony',
        shortDescription: 'Przykładowy opis 3',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [
          {
            id: 4,
            author: 'chris',
            content: ',,Wykłady super! Pozytywne reakcje prowadzącego na pytania ze strony uczestników.',
            training_id: 3,
          }
        ],
      },
      {
        id: 4,
        name: 'Szkolenie z Big Data',
        shortDescription: 'Przykładowy opis 4',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 5,
        name: 'Przyspieszony kurs Pythona',
        shortDescription: 'Przykładowy opis 5',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 6,
        name: 'Zarządzanie projektami od zera',
        shortDescription: 'Przykładowy opis 6',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 7,
        name: 'Praktyczny Javascript',
        shortDescription: 'Przykładowy opis 7',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 8,
        name: 'Database performance',
        shortDescription: 'Przykładowy opis 8',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 9,
        name: 'Zarządzanie jakością w przedsiębiorstwie',
        shortDescription: 'Przykładowy opis 9',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 10,
        name: 'Scala w praktyce',
        shortDescription: 'Przykładowy opis 10',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      }
    ];
    return {trainings};
  }
}
