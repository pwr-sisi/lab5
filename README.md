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

