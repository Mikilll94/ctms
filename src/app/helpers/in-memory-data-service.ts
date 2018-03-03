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
        rateOne: 5,
        rateTwo: 3,
        rateThree: 1,
        rateFour: 0,
        rateFive: 3,
      },
      {
        id: 2,
        name: 'Zarządzanie projektami',
        date: '2018-06-03',
        shortDescription: 'Szkolenie z zarządzania zespołem dla menedżerów, kierowników, właścicieli firm, kadr zarządzających i osób aspirujących na stanowiska kierownicze.',
        description: 'Warsztat zakłada naukę przez doświadczenie. Nagrywamy na kamerę przykładowe sytuacje szefowskie. Ich wspólna analiza pozwala na wypracowanie efektywnych narzędzi komunikacyjnych menedżera. Zwieńczeniem jest trening nowych umiejętności ze wsparciem trenerów. Indywidualne ćwiczenia umożliwiają dostosowanie narzędzi do realiów uczestników.',
        rateOne: 2,
        rateTwo: 1,
        rateThree: 4,
        rateFour: 2,
        rateFive: 0,
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
        rateOne: 3,
        rateTwo: 1,
        rateThree: 2,
        rateFour: 1,
        rateFive: 0,
      },
      {
        id: 4,
        name: 'Szkolenie z Big Data',
        date: '2018-07-20',
        shortDescription: 'Przykładowy opis 4',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        rateOne: 4,
        rateTwo: 3,
        rateThree: 6,
        rateFour: 2,
        rateFive: 7,
      },
      {
        id: 5,
        name: 'Przyspieszony kurs Pythona',
        date: '2018-10-24',
        shortDescription: 'Przykładowy opis 5',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        rateOne: 2,
        rateTwo: 3,
        rateThree: 4,
        rateFour: 6,
        rateFive: 7,
      },
      {
        id: 6,
        name: 'Zarządzanie projektami od zera',
        date: '2018-11-30',
        shortDescription: 'Przykładowy opis 6',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        rateOne: 2,
        rateTwo: 4,
        rateThree: 2,
        rateFour: 5,
        rateFive: 1,
      },
      {
        id: 7,
        name: 'Praktyczny Javascript',
        date: '2017-01-04',
        shortDescription: 'Przykładowy opis 7',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        rateOne: 4,
        rateTwo: 2,
        rateThree: 3,
        rateFour: 4,
        rateFive: 2,
      },
      {
        id: 8,
        name: 'Database performance',
        date: '2017-06-23',
        shortDescription: 'Przykładowy opis 8',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        rateOne: 4,
        rateTwo: 3,
        rateThree: 5,
        rateFour: 6,
        rateFive: 1,
      },
      {
        id: 9,
        name: 'Zarządzanie jakością w przedsiębiorstwie',
        date: '2017-02-12',
        shortDescription: 'Przykładowy opis 9',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        rateOne: 5,
        rateTwo: 4,
        rateThree: 1,
        rateFour: 2,
        rateFive: 4,
      },
      {
        id: 10,
        name: 'Scala w praktyce',
        date: '2017-01-17',
        shortDescription: 'Przykładowy opis 10',
        description: 'Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis. Długi opis.',
        rateOne: 3,
        rateTwo: 5,
        rateThree: 2,
        rateFour: 1,
        rateFive: 2,
      }
    ];
    const comments = [
      {
        id: 1,
        author: 'Paweł Nowak',
        content: 'Bardzo bogata wiedza, doskonale przygotowane slajdy, szkolenie niezbędne dla pracy zawodowej.',
        postingDate: '2014-01-28',
        trainingId: 1,
      },
      {
        id: 2,
        author: 'Ewa Pawlak',
        content: '100% wymagań = praktyczna formuła + ogromna wiedza + doświadczenie prowadzącego + praktyczny przekaz. Świetnie przygotowane materiały.',
        postingDate: '2015-12-23',
        trainingId: 1,
      },
      {
        id: 3,
        author: 'Andrejlll',
        content: 'Pierwszy raz spotykam się z kreatywną zabawą na szkoleniu twardym :-)',
        postingDate: '2016-12-07',
        trainingId: 2,
      },
      {
        id: 4,
        author: 'chris',
        content: 'Wykłady super! Pozytywne reakcje prowadzącego na pytania ze strony uczestników.',
        trainingDd: 3,
      }
    ];
    const users = [
      {id: 1, firstName: 'Mikołaj', lastName: 'Waśniewski'},
      {id: 2, firstName: 'Jan', lastName: 'Kowalski'},
      {id: 3, firstName: 'Anna', lastName: 'Nowak'},
      {id: 4, firstName: 'Adam', lastName: 'Mickiewicz'},
      {id: 5, firstName: 'Juliusz', lastName: 'Słowacki'},
    ];
    const enrollments = [
      {id: 1, userId: 1, trainingId: 1},
      {id: 2, userId: 1, trainingId: 2},
      {id: 3, userId: 1, trainingId: 3},
      {id: 4, userId: 2, trainingId: 1},
      {id: 5, userId: 2, trainingId: 3},
      {id: 6, userId: 2, trainingId: 5},
      {id: 7, userId: 3, trainingId: 2},
      {id: 8, userId: 4, trainingId: 2},
    ];
    return {trainings, comments, users, enrollments};
  }
}
