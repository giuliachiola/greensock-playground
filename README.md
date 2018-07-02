# Frontend + Pattern Library (basato su patternlab-php)

Pattern library per il progetto.

## Requisiti

- [composer](https://getcomposer.org/) - setup: https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx
- [npm](https://www.npmjs.com/) - setup: https://www.npmjs.com/package/npm
- [bower](https://bower.io/) - setup: `npm install -g bower`
- [grunt](http://gruntjs.com/) - setup: `npm install -g grunt-cli`


## Installazione

Una volta scaricato il repository, dalla root eseguire in sequenza:

- `composer install`  installa patternlab-php core e dipendenze
- `npm install`       installa moduli vari utilizzati dalla toolchain basata su grunt
- `bower install`     installa alcuni moduli css/js di terze parti
- Assicurarsi di avere nella root del progetto `.editorconfig` e `.gitignore` come riportati sotto
- Utilizzare Git Flow
- Leggere la coding convention generica, in caso di contrasto con quella generica ha la priorità quella del progetto.

## Build

Per generare una build del progetto:

- `grunt`        genera il progetto in modalità "dev", attivando il server locale e il live-reload sulle modifiche
- `grunt build`  genera il progetto in modalità "dist" con ottimizzazione dell'output nella directory `public`
