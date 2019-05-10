# SiSI - Lab 5

# Laboratorium 5. Budowa API

Do wykonania ćwiczeń z laboratorium potrzebujesz zainstalowanych aplikacji: VirtualBox i Vagrant. Obie aplikacje istnieją w wersjach dla systemów Linux, Windows, Mac.

Po pobraniu repozytorium uruchom maszynę vagranta: vagrant up. Gdy maszyna zakończy proces uruchamiania w wyświetlonym przez VirtualBox okinie maszyny wirtualnej zaloguj się na konto vagrant używając hasła vagrant.

W ramach ćwiczenia zapoznasz się z fremeworkiem Express/Node.js napisanym w języku JavaScript, który często jest wykorzystywany do tworzenia API wykorzystywanych przez aplikacje mobilne.

## Uruchomienie serwera webowego

1. Zaloguj się do maszyny Vagrant. Otwórz konsolę LXTerminal i przejdź do folderu /vagrant: `cd /vagrant` 
2. Uruchom najprostszy program:
   ```
   node start.js
   ```
3. Uruchom najprostszy serwer WWW:
   ```
   node simplewebserver.js
   ```
   Sprawdź czy możesz obejrzeć efekt działania serwera pod adresem `http://localhost:3000`. Ponieważ port 3000 jest przekierowany z maszyny wirtualnej do komputera, strona powinna dać się otworzyć zarówno w przeglądarce w komputerze jak i w przeglądarce w maszynie wirtualnej. 
4. Zakończ działanie serwera naciskając `Ctrl+C`.

## Uruchomienie serwera WWW wykorzystującego moduł Express

1. Zainstaluj moduł `express` wraz z wszystkimi zależnościami:
   ```
   npm install express --no-bin-links
   ```
   Opcja `--no-bin-links` jest konieczna ze względu na brak obsługi łączy symbolicznych w folderach synchronizowanych między maszyną wirtualną i kompterem gospodarzem. W przypadku uruchamiania aplikacji w innych folderach lub bezpośrednio w komputerze nie jest ona wymagana.
2. Uruchom serwer wykorzystujący moduł express:
   ```
   node expresswebserver.js
   ```
   Sprawdź w przeglądarce czy serwer działa.
3. Porównaj kod obu serwerów.

