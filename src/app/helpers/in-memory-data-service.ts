import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trainings = [
      {
        id: 1,
        name: 'Szkolenie z zakresu BHP',
        date: '2018-04-01',
        shortDescription: 'Dlaczego szkolenia BHP są niezbędne dla Twojej firmy? Zgodnie z Kodeksem Pracy na każdej polskiej firmie spoczywa obowiązek zaznajomienia pracownika, który nie posiada wiedzy i kwalifikacji, z przepisami z zakresu bezpieczeństwa i higieny pracy.',
        description: 'Dlaczego szkolenia BHP są niezbędne dla Twojej firmy? Zgodnie z Kodeksem Pracy na każdej polskiej firmie spoczywa obowiązek zaznajomienia pracownika, który nie posiada wiedzy i kwalifikacji, z przepisami z zakresu bezpieczeństwa i higieny pracy. Bardzo istotne jest, aby zarówno pracodawcy jak i pracownicy mieli świadomość niebezpieczeństw , które mogą pojawić się podczas wykonywania codziennych obowiązków.\n' +
        '\n' +
        'Dopilnowanie obowiązku szkoleń BHP spoczywa na pracodawcy. Gdy nie dostosuje się on do odgórnych zaleceń, odpowiedzialność za wszelkie wypadki w miejscu pracy i ich skutki ponosi pracodawca. W konsekwencji firma może popaść w poważne problemy finansowe.\n' +
        '\n' +
        'Celem szkolenia BHP jest wpojenie pracownikom zasad organizacji bezpiecznego miejsca pracy oraz zminimalizowanie zagrożeń z nią związanych, a także uniknięcie nieprzyjemnych skutków prawno-finansowych związanych z niedotrzymaniem obowiązku.\n' +
        '\n' +
        'Szkolenia BHP Center chronią Twoją firmę i pracowników.',
        comments: [
          {
            author: 'Paweł Nowak',
            content: 'Bardzo bogata wiedza, doskonale przygotowane slajdy, szkolenie niezbędne dla pracy zawodowej.',
            postingDate: '2014-01-28'
          },
          {
            author: 'Ewa Pawlak',
            content: '100% wymagań = praktyczna formuła + ogromna wiedza + doświadczenie prowadzącego + praktyczny przekaz. Świetnie przygotowane materiały.',
            postingDate: '2015-12-23',
          },
        ]
      },
      {
        id: 2,
        name: 'Zarządzanie projektami',
        date: '2018-06-03',
        shortDescription: 'Szkolenie z zarządzania zespołem dla menedżerów, kierowników, właścicieli firm, kadr zarządzających i osób aspirujących na stanowiska kierownicze.',
        description: 'Warsztat zakłada naukę przez doświadczenie. Nagrywamy na kamerę przykładowe sytuacje szefowskie. Ich wspólna analiza pozwala na wypracowanie efektywnych narzędzi komunikacyjnych menedżera. Zwieńczeniem jest trening nowych umiejętności ze wsparciem trenerów. Indywidualne ćwiczenia umożliwiają dostosowanie narzędzi do realiów uczestników.',
        comments: [
          {
            author: 'Andrejlll',
            content: 'Pierwszy raz spotykam się z kreatywną zabawą na szkoleniu twardym :-)',
            postingDate: '2016-12-07',
          }
        ],
      },
      {
        id: 3,
        name: 'Kurs samoobrony - Krav Maga',
        date: '2018-04-12',
        shortDescription: 'Kursy i szkolenia z samoobrony w systemie krav maga. Zajęcia prowadzi instruktor z międzynarodowymi uprawnieniami Leszek Sady wydanymi przez największą organizację krav maga na świecie.',
        description: '\n' +
        'Kursy i szkolenia z samoobrony w systemie krav maga. Zajęcia prowadzi instruktor z międzynarodowymi uprawnieniami Leszek Sady wydanymi przez największą organizację krav maga na świecie. \n' +
        '\n' +
        'Krav maga jest najskuteczniejszym systemem samoobrony i walki wręcz. Bazuje na naturalnych odruchach przez co nauka jest bardzo szybka. System ten łączy różne sztuki walki a z każdego z nich bierze najskuteczniejsze techniki.',
        comments: [
          {
            author: 'chris',
            content: 'Wykłady super! Pozytywne reakcje prowadzącego na pytania ze strony uczestników.',
            training_id: 3,
          }
        ],
      },
      {
        id: 4,
        name: 'Szkolenie z Big Data',
        date: '2018-07-20',
        shortDescription: 'Przykładowy opis 4',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 5,
        name: 'Przyspieszony kurs Pythona',
        date: '2018-10-24',
        shortDescription: 'Przykładowy opis 5',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 6,
        name: 'Zarządzanie projektami od zera',
        date: '2018-11-30',
        shortDescription: 'Przykładowy opis 6',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 7,
        name: 'Praktyczny Javascript',
        date: '2017-01-04',
        shortDescription: 'Przykładowy opis 7',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 8,
        name: 'Database performance',
        date: '2017-06-23',
        shortDescription: 'Przykładowy opis 8',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 9,
        name: 'Zarządzanie jakością w przedsiębiorstwie',
        date: '2017-02-12',
        shortDescription: 'Przykładowy opis 9',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      },
      {
        id: 10,
        name: 'Scala w praktyce',
        date: '2017-01-17',
        shortDescription: 'Przykładowy opis 10',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        comments: [],
      }
    ];
    return {trainings};
  }
}
