# Quiz

![question mark-kopia](https://user-images.githubusercontent.com/75137091/169134588-2d8c53f2-4ac2-4db2-bacd-5dfa0cda6daa.png)
### [ZAGRAJ](https://quizreactmp.netlify.app)

#### Autorka:
- [Marta Probierz](https://github.com/marta-probierz)

## Cel projektu
Celem projektu było dostarczenie aplikacji „Quiz” pozwalającej użytkownikom na sprawdzenie swojej wiedzy z losowo wybranych kategorii.

## Działanie aplikacji

### Strona główna

Na stronie głównej znajduje się widok przywitania użytkownika, logo, pole, do którego należy wpisać swoje imię, a także przycisk rozpoczynający grę. Przycisk pozostaje nieaktywny do momentu wprowadzenia imienia przez gracza. 

![1](https://user-images.githubusercontent.com/75137091/169090712-c8184730-6452-43ad-9c40-49e5b8052c1e.png)

Dodatkowo została zrealizowana walidacja - pole zmienia swój kolor oraz grafikę w momencie wpisania niepoprawnych lub poprawnych danych. Imię gracza powinno posiadać minimum 3 znaki.

![2](https://user-images.githubusercontent.com/75137091/169090751-11615973-7b86-4eb2-8fbf-ec9a2c9981f2.png)

![3](https://user-images.githubusercontent.com/75137091/169090768-b1758643-8bf3-4194-819a-fb63b0d1e69d.png)

Po wpisaniu imienia, użytkownik zostaje przeniesiony na stronę quizu. Podczas ładowania pytań, gracz może zauważyć napis Let's go wraz ze swoim imieniem oraz loader.

![4](https://user-images.githubusercontent.com/75137091/169091151-830b1f81-87fc-4563-81a8-6b38431adb3b.png)

### Quiz

Użytkownik zostaje przeniesiony na stronę quizu. Można na niej znaleźć kategorię danego pytania, poziom trudności, listę pytań w danej rozgrywce, a także pytanie z możliwymi odpowiedziami. Dane te są pobierane z API. Niżej znajudują się dwa przyciski: I give up (kliknięcie spowoduje przeniesienie na stronę główną) oraz Result (przycisk ten pozostaje nieaktywny do momentu udzielenia odpowiedzi na ostatnie pytanie).

![5](https://user-images.githubusercontent.com/75137091/169105121-a506db24-518e-42ca-aaef-1b36acd7768d.png)

Gracz może wybrać dowolne pytanie z danej rozgrywki, klikając na listę rozwijaną z pytaniami. 

![6](https://user-images.githubusercontent.com/75137091/169128467-4959d5be-a6bf-470b-8518-b5da32ac6b89.png)

W aplikacji została zrealizowana walidacja odpowiedzi. W momencie, gdy użytkownik kliknie w daną odpowiedź i okaże się ona nieprawidłowa, wówczas zmieni się jej kolor na czerwony. Prawidłowa odpowiedź zostanie zaznaczona zielonym kolorem, z kolei pozostałe - szarym. 

![7](https://user-images.githubusercontent.com/75137091/169131799-13ba12eb-c254-4697-ad61-7dec3eeafc6b.png)

Po dotarciu do ostatniego pytania i wybraniu odpowiedź, przycisk Result staje się aktywny. Gracz może w niego kliknąć, po czym zostanie przeniesiony do wyniku gry.

![8](https://user-images.githubusercontent.com/75137091/169132705-22dabb1e-cd8b-407c-a0df-ba54f0979ea4.png)


### Wynik gry

Ostatnia strona quizu to wynik gry. Aplikacja zlicza punkty uzyskane przez gracza, po czym jest on o nich informowany. Niżej znajdują się dwa przycicki: Home oraz Play again. Po kliknięciu w pierwszy przycisk, gracz zostanie przeniesiony na stronę główną. Z kolei kliknięcie drugiego przycisku spowoduje rozpoczęcie nowej gry.

![9](https://user-images.githubusercontent.com/75137091/169103632-810ef868-73ab-49be-9287-2d0149e3a1de.png)


## Responsywność
W projekcie została zrealizowana responsywność stron.

![10](https://user-images.githubusercontent.com/75137091/169072735-ed7d219d-c1de-4890-8486-6c72437591ad.jpg)

![11](https://user-images.githubusercontent.com/75137091/169072748-99201f5b-4132-444c-a65f-0330d8db3108.jpg)

![12](https://user-images.githubusercontent.com/75137091/169072759-1b78ce10-8531-4626-bcc1-7041cc39ddae.jpg)


## API
https://opentdb.com/api.php?amount=5

## Dodatkowe informacje
1. Aplikacja została wdrożona na Netlify.
3. Została również użyta biblioteka Prettier, służąca do formatowania kodu. Niniejsza biblioteka jest świetnym narzędziem, który wyłapuje błędy składni, automatycznie poprawia linie kodu według zdefiniowanej konfiguracji.

## Technologie użyte w projekcie:
1. JSX
2. React
3. Axios
4. i18next
5. Styled-components

## Narzędzia pomocnicze
1. Visual Studio Code
2. Yarn

## Instalacja

#### Uruchomienie projektu:

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Sklonuj repozytorium.
2. Otwórz je w ulubionym edytorze.
3. Zainstaluj zależności za pomocą komendy: yarn.
4. Wystartuj serwer za pomocą komendy: yarn start

Aplikacja będzie dostępna pod adresem: http://localhost:3000/
