# SiSI - Lab 5

# Laboratorium 5. Budowa API

Do wykonania ćwiczeń z laboratorium potrzebujesz zainstalowanych aplikacji: VirtualBox i Vagrant. Obie aplikacje istnieją w wersjach dla systemów Linux, Windows, Mac.

Po pobraniu repozytorium uruchom maszynę vagranta: vagrant up. Gdy maszyna zakończy proces uruchamiania w wyświetlonym przez VirtualBox okinie maszyny wirtualnej zaloguj się na konto vagrant używając hasła vagrant.

W ramach ćwiczenia zapoznasz się z fremeworkiem Express/Node.js napisanym w języku JavaScript, który często jest wykorzystywany do tworzenia API wykorzystywanych przez aplikacje mobilne.

## Uruchomienie serwera webowego

1. Uruchom maszynę Vagrant, połącz się z nią przez SSH i przejdź do folderu `vagrant` używając poleceń:
   ```
   D:\> vagrant up
   D:\> vagrant ssh
   vagrant@vagrant:~$ cd /vagrant
   vagrant@vagrant:/vagrant$ pwd
   ```
   Polecenie pwd wyświetla folder w którym się znajdujesz.
2. Uruchom najprostszy program wyświetlający komunikat na konsoli:
   ```
   nodejs start.js
   ```
3. Uruchom najprostszy serwer WWW:
   ```
   nodejs simplewebserver.js
   ```
   Sprawdź czy możesz obejrzeć efekt działania serwera pod adresem `http://localhost:3000`. Ponieważ port 3000 jest przekierowany z maszyny wirtualnej do komputera, strona powinna dać się otworzyć zarówno w przeglądarce w komputerze jak i w przeglądarce w maszynie wirtualnej. 
4. Zakończ działanie serwera naciskając `Ctrl+C`.

## Serwer WWW wykorzystujący moduł Express

1. Uruchom serwer wykorzystujący moduł express:
   ```
   nodejs expresswebserver.js
   ```
   Sprawdź w przeglądarce czy serwer działa. Zatrzymaj serwer.
2. Porównaj kod serwera z tego i poprzedniego przykładu.

## Serwer WWW udostępniający strony statyczne (ręcznie)

Przedstawiony w przykładzie serwer WWW udostępnia pliki z folderu `static`.

1. Przejdź do folderu `5.1`, zainstaluj potrzebne zależności i uruchom aplikację:
   ```
   cd 5.1
   npm intall --no-bin-links
   npm start
   ```
   Zwróć uwagę na plik `package.json` opisujący konfigurację aplikacji. Dzięki temu plikowi uruchamiasz serwer poleceniem `npm start` a nie `nodejs app.js`.
2. Otwórz w przeglądarce stronę `http://localhost:3000/index.html`, a następnie `http://localhost:3000/file.txt`. Porównaj efekt.
3. Zwróć uwagę na trzy funkcje middleware kolejno: 
   1. wypisującą adres przeglądarki w konsoli, 
   2. wysyłający istniejący plik do przeglądarki,
   3. obsługujący błąd braku pliku.
4. Zakończ działanie serwera naciskając `Ctrl+C`.

## Serwer WWW udostępniający strony statyczne (middleware)

Serwer przedstawiony w tym zadaniu działa tak samo jak poprzedni, ale komunikaty o zapytaniach są wypisywane przez moduł `morgan`, a pliki statyczne są udostępniane przez funkcję modułu `express`.

1. Przejdź do folderu `5.2`, zainstaluj potrzebne zależności i uruchom aplikację w taki sam sposób jak poprzednio.
2. Dodaj do katalogu `static` własny plik i sprawdź czy plik jest widoczny z przeglądarki.
3. Porównaj kod aplikacji z kodem poprzedniej aplikacji. 

## Serwer WWW wykorzystujący routing

Nowa wersja serwera WWW obsługuje różne zapytania, np. `/user/33` i `/user/35/picture` przy użyciu różnych funkcji, czyli realizauje tzw. routing.

1. Przejdź do folderu `5.3`, zainstaluj potrzebne zależności i uruchom aplikację w taki sam sposób jak poprzednio.
2. Zwróć uwagę że middleware instalowane przez funkcję `use`: `app.use(morgan('short'));` działa dla każdego wywołania, zaś middleware (funkcje) związane z routingiem, jak np. `app.get("/user/:id", function(req, res, next)...` działają tylko jeśli wywołanie przeglądarki pasuje do wzorca, np. `http://localhost:3000/user/3`. Wypróbuj następujące adresy:
   1. `http://localhost:3000/user/3` 
   2. `http://localhost:3000/user/-3` 
   3. `http://localhost:3000/user/5/picture` 
   4. `http://localhost:3000/user/-6/picture`
   5. `http://localhost:3000/user/inny` 
3. Do pliku `app.js` dopisz własną trasę z funkcję obsługi, np. dla ścieżki `/product`.

## Serwer WWW z wydzielonym modułem routingu

W przedstawionym przykładzie moduł zawierający funkcje obsługi routingu został wydzielony i przeniesiony do podfolderu `routes`.

1. Przejdź do folderu `5.4`, zainstaluj potrzebne zależności i uruchom aplikację w taki sam sposób jak poprzednio.
2. Obejrzyj plik `app.js`. Zwróć uwagę jak instalowany jest moduł `api_module` i jak podłączany jest zawarty w module middleware do aplikacji: `app.use(...)`.
3. Obejrzyj plik `routes/api_module.js`. Zwróć uwagę na ścieżkę pod którą jest podłączana funkcja: `/:id`. Ponieważ cały moduł jest podłączony pod ścieżkę `/user` (w pliku `app.js`), teraz używamy tylko pozostałej części ścieżki.
4. Dopisz do modułu `api_module.js` funkcję która będzie obsługiwać adres: `http://localhost:3000/user/34/picture` - możesz wykorzystać kod z poprzedniego przykładu.

## Serwer udostępniający RESTful API

Przykład różni się od poprzednich tym, że dane które są wysyłane z przeglądarki do serwera i z powrotem mają postać danych w formacie JSON. Ponieważ przeglądarka WWW może wykonywać tylko zapytania GET, do testowania API wykorzystamy program `curl` oraz wtyczkę `RESTED` przeglądarki Firefox.

1. Przejdź do folderu `5.5`, zainstaluj potrzebne zależności i uruchom aplikację w taki sam sposób jak poprzednio.
2. Otwórz okno `GIT bash` lub `Bash` i wypróbuj działanie następujących poleceń:
   1.  `curl -v http://localhost:3000/v1/user/3`
   2.  `curl -v -X DELETE http://localhost:3000/v1/user/3`
   3.  `curl -v -X PUT http://localhost:3000/v1/user/3 -v -H "Content-Type: application/json" -d '{"name":"Wojtek"}'` lub (jeśli korzystasz z okna CMD w systemie Windows): `curl -v -X PUT http://localhost:3000/v1/user/3 -v -H "Content-Type: application/json" -d "{""name"":""Wojtek""}"`
     
        Opcja `-v` wyświetla nagłówki przesłane do i od serwera, opcja `-X` określa typ zapytania (przy czym domyślnym typem zapytania jest `GET`), opcja `-H` określa format przesyłanych danych, a `-d` opisuje dane wysyłane z zapytaniem.
   4. Zainstaluj w przeglądarce Firefox wtyczkę RESTED. Uruchom ją klikając ikonkę `</>` na pasku przeglądarki. Ustaw następujące opcje:
      - typ zapytania: POST, adres `localhost:3000/v1/user/3`
      - nagłówki (Headers): `Content-Type` -> `application/json`
      - Request body: Type -> `JSON`, parametr: `name` -> `Wojtek`
    Gdy klikniesz przycisk `Send request` na ekranie powinna pojawić się odpwiedź serwera: kod 200 OK i dane w formacie JSON.  
    5. Zwróć uwagę, że moduł `api1.js` wykorzystuje moduł `body-parser`, żeby wypakować dane przesłane w formacie JSON.
    6. Zwróć uwagę, że do przesłania odpowiedzi używamy nowej funkcji `res.json()` zamiast `res.send()` jak we wcześniejszych przykładach.
    7. Dodaj nową wersję API: `v2`. Możesz skopiować istniejący moduł `v1` przerabiając go np. tak, aby w zwracanym wyniku dodawał pole `"version":"2"`. Teraz aplikacja powinna odpowiadać na zapytania typu `http://localhost:3000/v1/user/3` jak i `http://localhost:3000/v2/user/3`




 
