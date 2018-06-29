
# DEALABS SCRIPING

Création d'une application de scriping avec **Cheerio"** , **request-promise** et **Request-promise**


## Request-promise

**Installation**

Maodule npm:

```bash
> - npm install --save request
> - npm install --save request-promise
> - request is defined as a peer-dependency and thus has to be installed separately.
```



## cheerio

```bash
> - const cheerio = require('cheerio')
> - const $ = cheerio.load('..')

> - $('h2.title').text('Hello there!')
> - $('h2').addClass('welcome')
```

- $.html()
- //=> <h2 class="title welcome">Hello there!</h2>


**Installation**

- `npm install cheerio`

- https://github.com/cheeriojs/cheerio

**Features**

❤ Familiar syntax: cheerio implémente un sous-ensemble de core jQuery. Cheerio supprime toutes les incohérences du DOM et le croupement du navigateur de la bibliothèque jQuery, révélant son API vraiment magnifique.

ϟ Blazingly fast: Cheerio fonctionne avec un modèle DOM très simple et cohérent. Par conséquent, l'analyse, la manipulation et le rendu sont incroyablement efficaces. Les repères préliminaires de bout en bout suggèrent que cheerio est environ 8 fois plus rapide que JSDOM.

❁ Incredibly flexible: Cheerio s'enroule autour de @ FB55 en pardonnant htmlparser2. Cheerio peut analyser presque n'importe quel document HTML ou XML.

## electron

**Cloner et mettre en action rapidement.**

Ceci est une application Electron minimale basée sur le [Guide de démarrage rapide](https://electronjs.org/docs/tutorial/quick-start) dans la documentation Electron.

**Utilisez cette application avec l'application [Electron API Demos](https://electronjs.org/#get-started) pour des exemples de code API pour vous aider à démarrer.**

Une application Electron de base n'a besoin que de ces fichiers:

- `package.json` - pointe vers le fichier principal de l'application et liste ses détails et dépendances.
- `main.js` - Démarre l'application et crée une fenêtre de navigateur pour afficher le code HTML. C'est le ** processus principal ** de l'application.
- `index.html` - Une page web à rendre. C'est le ** processus de rendu de l'application **


Vous pouvez en apprendre plus sur chacun de ces composants dans le [Guide de démarrage rapide](https://electronjs.org/docs/tutorial/quick-start).

## Utilisation

Pour cloner et exécuter ce dépôt, vous aurez besoin de [Git](https://git-scm.com) et [Node.js](https://nodejs.org/en/download/) (qui vient avec [npm ](http://npmjs.com)) installé sur votre ordinateur. De votre ligne de commande:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: Si vous utilisez Linux Bash pour Windows, [voir ce guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou utilisez `node` depuis l'invite de commande.

## Resources elcetron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
