import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trainings = [
      {
        id: 1,
        name: 'Szkolenie z zakresu BHP',
        date: '2018-04-01',
        shortDescription: 'Dlaczego szkolenia BHP są niezbędne dla Twojej firmy? Zgodnie z Kodeksem Pracy na każdej polskiej firmie spoczywa obowiązek zaznajomienia pracownika, który nie posiada wiedzy i kwalifikacji, z przepisami z zakresu bezpieczeństwa i higieny pracy.',
        description: 'Dlaczego szkolenia BHP są niezbędne dla Twojej firmy? Zgodnie z Kodeksem Pracy na każdej polskiej firmie spoczywa obowiązek zaznajomienia pracownika, który nie posiada wiedzy i kwalifikacji, z przepisami z zakresu bezpieczeństwa i higieny pracy. Bardzo istotne jest, aby zarówno pracodawcy jak i pracownicy mieli świadomość niebezpieczeństw, które mogą pojawić się podczas wykonywania codziennych obowiązków.\n' +
        '\n' +
        'Dopilnowanie obowiązku szkoleń BHP spoczywa na pracodawcy. Gdy nie dostosuje się on do odgórnych zaleceń, odpowiedzialność za wszelkie wypadki w miejscu pracy i ich skutki ponosi pracodawca. W konsekwencji firma może popaść w poważne problemy finansowe.\n' +
        '\n' +
        'Celem szkolenia BHP jest wpojenie pracownikom zasad organizacji bezpiecznego miejsca pracy oraz zminimalizowanie zagrożeń z nią związanych, a także uniknięcie nieprzyjemnych skutków prawno-finansowych związanych z niedotrzymaniem obowiązku.\n' +
        '\n' +
        'Szkolenia BHP Center chronią Twoją firmę i pracowników.',
        image: 'bhp.jpg',
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
        description: 'Z projektami mamy do czynienia codziennie, gdyż projekty to sposób na osiągnięcie zamierzonych celów. Projekt realizujemy budując dom, wprowadzając nowy produkt na rynek lub otwierając nowy oddział firmy. Bez względu na to, czy są to duże przedsięwzięcia, czy też złożone operacje, projekt to wysiłek podejmowany z myślą o realizacji celu w ograniczonym czasie i przy skończonych zasobach.\n' +
        '\n' +
        'Szkolenie z Podstaw Zarządzania Projektami prezentuje podstawy najlepszych, sprawdzonych metod zarządzania projektami, które w znacznej mierze ułatwiają prowadzenie projektu, zwiększając szanse na osiągnięcie sukcesu i założonego celu, a także pomagają w kontrolowany sposób prowadzić projekt. Szkolenie to jest propozycją dla osób zarówno realizujących projekty, jak również dla osób bez doświadczenia, które dopiero przygotowują się do zarządzania swoim pierwszym przedsięwzięciem. Jednocześnie szkolenie to jest dobrą propozycja dla osób, które chcą zajmować się lub zajmują się zawodowo zarządzaniem projektami i w planie mają poznanie bardziej zaawansowanych metodyk, sposobów i standardów zarządzania projektami takich jak PRINCE2, PMI/PMBoK czy IPMA.\n' +
        '\n',
        image: 'project_management.jpg',
        rateOne: 2,
        rateTwo: 1,
        rateThree: 4,
        rateFour: 2,
        rateFive: 0,
      },
      {
        id: 3,
        name: 'Web components',
        date: '2018-04-12',
        shortDescription: 'Na szkoleniu bardzo szybko nauczysz się tworzyć własne komponenty webowe. \n' +
        'Dowiesz się czym są "Web Components" oraz jak zacząć używać technologii wchodzących w ich skład już dzisiaj. Stworzysz również aplikację internetową, dzięki której usystematyzujesz wiedzę w kontekście rzeczywistego projektu.',
        description: 'Web Components to zbiór kilku świetnych specyfikacji, które w odpowiedni sposób połączone całkowicie zmieniają reguły gry, jeśli chodzi o tworzenie nowoczesnych i skalowalnych witryn oraz aplikacji internetowych. Wiele wskazuje na to, że za jakiś czas, tworzenie wyżej wymienionych będzie jeszcze prostsze, a wszystko to dzięki stworzonym przez społeczność komponentom, które łatwo się ze sobą łączą i nie przyprawiają o ból głowy nawet osoby początkujące. Warto już teraz zainteresować się tematem i być świadkiem rewolucyjnych zmian w branży, które właśnie powoli odbywają się na naszych oczach. W warsztacie tym dowiesz się wszystkiego co jest niezbędne by zrozumieć istotę Web Components, a także zacząć tworzyć własne komponenty!',
        image: 'web_components.svg',
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
        shortDescription: 'Uczestnik będzie posiadał ugruntowaną wiedzę dotyczącą statystycznej analizy danych i uczenia maszynowego (również deep learning), popartą realnymi projektami zrealizowanymi w trakcie zajęć.',
        description: 'W branży finansowej "badacz danych" analizuje dane o transakcjach bankowych i wspomaga podejmowanie decyzji kredytowych, np. wykrywanie nadużyć (fraud detection) umożliwia zidentyfikowanie najbardziej podejrzanych operacji i przekazanie ich do dalszej analizy. W marketingu analizuje zachowania użytkowników na stronach internetowych, np. sklepów online. Pozwala to między innymi na tworzenie coraz doskonalszych systemów rekomendacyjnych, wskazujących klientowi produkty, które z dużym prawdopodobieństwem jest skłonny kupić, nawet jeśli ich aktywnie nie szuka. Innym obszarem jest śledzenie widoczności i opinii o marce w Internecie. W sprzedaży Data Scientist analizuje dane, co umożliwia przewidywanie trendów sprzedażowych, czy segmentację klientów. Pozwala to na podejmowanie decyzji wpływających na strategię firmy w zakresie oferty produktowej, czy funkcjonowanie działu handlowego. Więcej na temat zawodu badacza danych znajdziesz na naszym blogu.',
        image: 'big_data.jpg',
        rateOne: 4,
        rateTwo: 3,
        rateThree: 6,
        rateFour: 2,
        rateFive: 7,
      },
      {
        id: 5,
        name: 'Kurs Pythona',
        date: '2018-10-24',
        shortDescription: 'Uczestnicy szkolenia zapoznają się z programowaniem w języku Python oraz biblioteką standardową tegoż języka.',
        description: 'Uczestnicy szkolenia zapoznają się z programowaniem w języku Python oraz biblioteką standardową tegoż języka. Na zajęciach prezentowane są koncepcje programowania proceduralnego, obiektowego i niektóre elementy programowania funkcyjnego. Celem zajęć jest stworzenie solidnych podstaw dla świadomego stosowania języka i samodzielnego pogłębiania wiedzy i nabytych umiejętności. \n' +
        'Słuchacze poznają różnorodne aspekty stosu technologicznego języka Python, jego charakter i to co sam twórca Python\'a określa jako jego "Zen". Szczególny nacisk kładziemy na zapoznanie się z dobrymi praktykami oraz zasadami pragmatycznego programowania.\n' +
        'Szkolenie odpowiada potrzebom początkujących programistów, którzy znają absolutne podstawy innych języków programowania (pojęcie zmiennej, pętli, instrukcji warunkowej) oraz programistów zaawansowanych, którzy chcą poznać język Python i używać go w przyszłości w sposób produktywny.\n' +
        'Jako narzędzi wspierających używamy IDE Eclipse oraz NetBeans. Nie jest to jednak narzucane słuchaczom. Prezentowane są te elementy narzędzi, które umożliwiają szybszą naukę lub diagnostykę błędów. Na zajęciach posługujemy się technologiami otwartymi z pełnym dostępem do kodu źródłowego.\n' +
        '\n' +
        'Zajęcia prowadzone są przez doświadczonych praktyków, którzy na co dzień używają języka Python w rozbudowanych projektach. Oprócz doświadczenia związanego z uczestniczeniem w projektach, posiadają także długoletnie doświadczenie w prowadzeniu zajęć poparte odpowiednimi certyfikatami.',
        image: 'python.jpg',
        rateOne: 2,
        rateTwo: 3,
        rateThree: 4,
        rateFour: 6,
        rateFive: 7,
      },
      {
        id: 6,
        name: 'Kurs C++',
        date: '2018-11-30',
        shortDescription: 'Język C++ wykorzystywany jest do tworzenia różnorodnych aplikacji od systemów operacyjnych po gry komputerowe.',
        description: 'Język C++ wykorzystywany jest do tworzenia różnorodnych aplikacji od systemów operacyjnych po gry komputerowe. Programista C++ działający w obszarze Internetu Rzeczy (IoT) może zajmowac się m.in. budowaniem rozwiązań wykorzystujących niewielkie komputery oraz różnorodne czujniki, na przykład prezentujące temperaturę oraz czas na tablicach świetlnych w mieście, prezentujących trasę przejazdu w autobusie czy zapowiedzi głosowe przystanków. C++ Developer zajmuje się także tworzeniem i oprogramowaniem urządzeń ułatwiających codzienne życie na przykład dla inteligentnych budynków. Mogą one wchodzić w interakcję z użytkownikiem rozumiejąc jego polecenia (zamiana mowy na tekst, interpretacja polecenia) oraz wykonywać zlecone zadania (na przykład udzielenie informacji o aktualnej pogodzie, włączenie światła w mieszkaniu, podniesienie żaluzji czy włączenie klimatyzacji).',
        image: 'cpp.png',
        rateOne: 2,
        rateTwo: 4,
        rateThree: 2,
        rateFour: 5,
        rateFive: 1,
      },
      {
        id: 7,
        name: 'Zaawansowany Javascript',
        date: '2017-01-04',
        shortDescription: 'Szkolenie przeznaczone jest dla programistów i projektantów JavaScript pragnących poszerzyć swoje umiejętności o zagadnienia zaawansowane, popularne biblioteki, wzorce, najlepsze praktyki i architektury.',
        description: 'Celem szkolenia jest zapoznanie uczestników z teoretycznymi oraz praktycznymi zagadnieniami technologii HTML 5, JavaScript oraz frameworkiem AngularJS, umożliwiające efektywne tworzenie aplikacji webowych.\n' +
        '\n' +
        'Osoby, które ukończą szkolenie dowiedzą się jak:\n' +
        '\n' +
        'tworzyć strony i formularze w HTML 5, także w sposób umożliwiający przenośność,\n' +
        'stosować style CSS 3 do formatowania stron i tworzenia efektów graficznych,\n' +
        'korzystać z zaawansowanych funkcjonalności HTML 5 takich jak operacje na plikach, drag & drop, komunikacja z serwerem lub osadzanie multimediów,\n' +
        'tworzyć dowolne efekty graficzne dzięki nowym elementom HTML 5,\n' +
        'stosować język JavaScript do rozwiązywania popularnych problemów,\n' +
        'zaimplementować architekturę Model-View-Controller w aplikacji webowej dzięki użyciu AngularJS.\n' +
        'Powyższa wiedza umożliwi uczestnikom na samodzielne tworzenie zaawansowanych interfejsów aplikacji webowych stosując popularne standardy.',
        image: 'advanced_javascript.png',
        rateOne: 4,
        rateTwo: 2,
        rateThree: 3,
        rateFour: 4,
        rateFive: 2,
      },
      {
        id: 8,
        name: 'Wydajność baz danych',
        date: '2017-06-23',
        shortDescription: 'Pragniemy zaoferować Państwu kompletny pakiet szkoleń autorskich dotyczący technologii Baz Danych Oracle. Został on zaplanowany na podstawie naszych wieloletnich doświadczeń merytorycznych i dydaktycznych',
        description: 'Kim jesteśmy\n' +
        'Jesteśmy zespołem specjalistów i instruktorów zajmujących się od kilkunastu lat szkoleniami z zakresu Baz Danych Oracle. Dzięki bogatemu doświadczeniu zdobytemu przy realizacji dużych projektów informatycznych i edukacyjnych oraz zdolnościom dydaktycznym, możemy się pochwalić najlepszą w Polsce grupą certyfikowanych trenerów, którzy gotowi są do przekazania Państwu swojej bogatej, praktycznej wiedzy w trakcie przygotowanych przez nas szkoleń autorskich.\n' +
        '\n' +
        'Co oferujemy\n' +
        'Pragniemy zaoferować Państwu kompletny pakiet szkoleń autorskich dotyczący technologii Baz Danych Oracle. Został on zaplanowany na podstawie naszych wieloletnich doświadczeń merytorycznych i dydaktycznych w taki sposób, aby zapewnić uczestnikom pełne spektrum wiedzy na temat Bazy Danych Oracle w każdym obszarze potrzebnym Programistom, Projektantom, Administratorom aplikacji i Użytkownikom końcowym [oferta poniżej].\n' +
        'Oprócz standardowych szkoleń z oferty jesteśmy w stanie dostarczyć każdą inną wiedzę o bazach danych Oracle. Przygotujemy szkolenia dedykowane, których program zostanie ustalony w trakcie analizy Państwa potrzeb.\n' +
        '\n' +
        'Skąd się wzięliśmy\n' +
        'Zespoły realizatorskie to instruktorzy, którzy wiele lat pracowali w zespołach projektowych czołowych firm z branży IT, zdobywając wiedzę merytoryczną oraz praktyczne doświadczenia. Następnie wykorzystując swoje zdolności dydaktyczne związali się z firmami edukacyjnymi oferując własne szkolenia oraz prowadząc szkolenia autoryzowane przez Oracle.\n' +
        '\n' +
        'Nasze cele\n' +
        'Dotychczasowe opinie zebrane od wielu tysięcy osobiście przeszkolonych w wielu firmach osób upoważniają nas do twierdzenia, że szkolenia prowadzone przez nas są najlepsze na polskim rynku. Niemniej pragniemy skonsolidować nasze dotychczasowe działania, aby jeszcze lepiej sprostać wyzwaniom, jakie będą stawiać przed nami klienci. To Państwa zadowolenie, referencje i chęć powrotu na kolejne szkolenia jest dla nas najważniejsza.',
        image: 'database_performance.png',
        rateOne: 4,
        rateTwo: 3,
        rateThree: 5,
        rateFour: 6,
        rateFive: 1,
      },
      {
        id: 9,
        name: 'Kontrola jakości',
        date: '2017-02-12',
        shortDescription: 'Kontrola jakości jest nieodłącznym elementem towarzyszącym zasadom organizacji w większości przedsiębiorstw. ',
        description: 'Kontrola jakości jest nieodłącznym elementem towarzyszącym zasadom organizacji w większości przedsiębiorstw. Potocznie, kontrola jakości postrzegana jest jako prosty proces, związany z eliminowaniem produktów niezgodnych i zatrzymywaniem ich przed dostarczeniem do klienta. Należy jednak podkreślić, iż w nowocześnie zarządzanym przedsiębiorstwie, kontrola jakości nie ma już wiele wspólnego z brakarstwem. Cena szkolenia obejmuje: \n' +
        '- udział w szkoleniu, \n' +
        '- materiały w formie papierowej, segregator, notatnik, długopis\n' +
        '- bezpłatny dostęp do elektronicznych materiałów szkoleniowych w systemie Biblioteka TQMsoft,  \n' +
        '- certyfikat uczestnictwa w szkoleniu, \n' +
        '- możliwość bezpłatnych 3-miesięcznych konsultacji po szkoleniu, które realizowane są poprzez Panel Konsultacyjny, \n' +
        '- obiady, przerwy kawowe oraz słodki poczęstunek, \n' +
        '- na życzenie - pomoc w rezerwacji hotelu',
        image: 'quality_control.jpg',
        rateOne: 5,
        rateTwo: 4,
        rateThree: 1,
        rateFour: 2,
        rateFive: 4,
      },
      {
        id: 10,
        name: 'Scala - programowanie obiektowo-funkcyjne',
        date: '2017-01-17',
        shortDescription: 'Szkolenie zostało opracowane z myślą o uczestnikach posiadających doświadczenie programistyczne w językach wywodzących się z C++ (Java, C#, PHP).',
        description: '\n' +
        'Szkolenie zostało opracowane z myślą o uczestnikach posiadających doświadczenie programistyczne w językach wywodzących się z C++ (Java, C#, PHP).\n' +
        '\n' +
        'Podczas szkolenia nie poruszamy nieistotnych zagadnień, które rozpraszają początkujących\n' +
        '\n' +
        'Skupiamy się na technikach przygotowujących do tworzenia aplikacji enterprise/webowych.\n' +
        '\n' +
        'Podczas szkolenia w naturalny sposób zostały plecione narzędzia codziennej pracy oraz najlepsze praktyki tworzenia czytelnego, rozszerzalnego i testowalnego kodu.\n' +
        '\n' +
        'Program został rozszerzony o najbardziej popularne frameworki: Testowanie, DSL, REST, Web.',
        image: 'scala.png',
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
      {id: 5, userId: 5, trainingId: 3},
      {id: 6, userId: 2, trainingId: 5},
      {id: 7, userId: 3, trainingId: 2},
      {id: 8, userId: 4, trainingId: 2},
      {id: 9, userId: 5, trainingId: 2},
      {id: 10, userId: 2, trainingId: 2},
    ];
    return {trainings, comments, users, enrollments};
  }
}
