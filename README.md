# Practicas

Este proxecto pretende ser unha iniciación a Angular marcando como obxectivo crear unha interface de cliente que consuma os datos de unha ou varias APIs externas e trate a información que estas acheguen.

## Recomendacións do entorno de desenvolvemento

Eu traballo normalmente co IDE lixeiro **Visual Studio Code**, para traballar con Angular pódenselle instalar algúns complementos útiles, os que eu recomendo son:

- **Material Icon Theme**: iconos para o explorador de ficheiros, é útil para diferenciar que tipo de ficheiro se está a editar e para ver a organización dos compoñentes rápidamente <https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme>
- **Angular Snippets**: snipptes (plantillas de código) para as linguaxes que emprega Angular, facilitan o desenvolvemento moito <https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2>
- **Angular Language Service**: axuda a enlazar o código typescript na plantilla html, como o acceso a propiedades de obxectos definidos no primeiro <https://marketplace.visualstudio.com/items?itemName=Angular.ng-template>
- **angular2-inline**: axuda a integrar estilos css <https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline>
- **JavaScript and TypeScript Nightly**: IntelliSense para axudar a autocompletar código <https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next>
- **TypeScript Importer**: sirve para axudar a auto-importar librerías de TypeScript propias ou de terceiros (na cabeceira do documento) <https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter>
- **Nodejs Snippets**: snipptes de NodeJs <https://marketplace.visualstudio.com/items?itemName=piyushvscode.nodejs-snippets>
- **DevTools for Chrome**: sirve para facilitar o debug de código cando se executa no navegador Chrome <https://marketplace.visualstudio.com/items?itemName=codemooseus.vscode-devtools-for-chrome>
- **npm Intellisense**: axuda a importar librerías definidas no ficheiro `package.json` <https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense>
- **Auto Rename Tag**: axuda a renomear ó mesmo tempo a etiqueta de apertura e peche dun xml <https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag>
- **Auto Close Tag**: pecha automáticamente as etiquetas html (ás veces é un coñazo pero en xeral para min é útil, cuestión de gustos) <https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag>

Outras extensións de produtividade:

- **Git Graph**: extensión para ver o histórico do estado de ramas de git <https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph>
- **GitLens — Git supercharged**: permite realizar distintas operacións de git de xeito visual, por exemplo crear e recuperar stash, visitar o histórico de commits dun ficheiro, recuperar un commit concreto... <https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens>
- **Live Share Extension Pack**: extensións para compartir o espacio de traballo do Visual Studio Code a través da rede <https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack>
- **Log File Highlighter**: resaltador de ficheiros log <https://marketplace.visualstudio.com/items?itemName=emilast.LogFileHighlighter>
- **Rainbow Brackets**: resalta con distintas cores cada par de paréntesis e chaves que se abren anidados, facilita ver se che queda algunha sen pechar <https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets>
- **Back & Forth**: sirve para situar o cursor en seccións de código polas que se estivo antes <https://marketplace.visualstudio.com/items?itemName=nick-rudenko.back-n-forth>

## Retos

Nesta sección vou a enunciar unha serie de retos para manexar distintas características de Angular, como o deseño de listas, táboas, formularios e o manexo do layout.

- [Reto 1][reto1]

## Estrutrutura de directorios

Pártese dunha estructura de directorios xa creada para ter unha clasificación dos artefactos en directorios específicos segundo a súa funcionalidade (dentro da ruta do código fonte `src/app/`).

Estes directorios son:

- **components**: neste directorio ubicaranse os compoñentes de Angular que sexan xenéricos para a aplicación
- **helpers**: ficheiros que axuden a facer operacións sobre datos xenéricos como por exemplo o tratamento de datas
- **interfaces**: interfaces comúns que deben cumprir algúns obxectos da aplicación, típicamente os contratos que devolve unha API sempre e cando non devolva un modelo concreto de datos, por exemplo unha lista de obxectos con información sobre a páxinaciónn de datos:

  ```typescript
  // Exemplo de obxecto devolto por unha API
  response = {
    items: [
      obxecto1,
      obxecto2,
      obxecto3,
      ...
    ],
    code: 200,
    page: 2,
    count: 10,
    total: 125
  }

  // Exemplo de interface
  export interface ResponseA {
    items : ObxectoA[], // Clase que define o modelo "ObxectoA"
    code  : Number,     // Código de resposta http
    page  : Number,     // Número de páxina actual
    count : Number,     // Número de items por páxina
    total : Number      // Número total de items que se obteñen coa consulta realizada
  }
  ```

- **models**: clases coas defincións dos modelos cos que traballará a aplicación
- **pages**: compoñentes de Angular que se poidan definir conceptuamente como páxinas completas, estes compoñentes poden estar compostos por compoñentas máis sinxelos, por exemplo:
  - Páxina de inicio, subcompoñentes:
    - Información sobre o usuario
    - Enlaces de interese
  - Páxina de contacto, subcompoñentes:
    - Información sobre o usuario (compoñente reutilizado)
    - Formulario de contacto
  - Páxina de productos, subcompoñentes:
    - Lista de productos
    - Formuario de un producto concreto
  - ...
- **services**: normalmente aquí ubicaranse os servicios globais da aplicación, estes servicios poden ser chamadas a APIs ou servicios para compartir datos entre os distintos compoñente de Angular
- **modules**: este é un directorio especial, este directorio está reservado para incluir nel módulos\*.

> **Nota \***:
> Poderíamos definir un módulo como unha especie de "mini aplicación" idenpendente do resto da aplicación, esto quere dicir que se collemos ese bloque de código e o levamos a outra aplicación debería funcionar exactamente igual que na atual.
>
> Para conseguir ese comportamento cada módulo ten que ter definidos no seu interior todo o necesario para ser funcional, é dicir, os seus modelos, compoñenetes, interfaces, servicios, etc. Esto implica que cada módulo ten unha estructura de directorios como a da aplicación global no seu interior.
>
> Podes atopar [aquí][proxectos-ui-modules] un exemplo sen rematar desta xerarquía de directorios.

## Documentación de NG-CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- Enlaces internos -->
[reto1]:
<doc/reto1/reto1.md>

<!-- Enlaces externos -->
[proxectos-ui-modules]:
<https://github.com/efja/proxectOS-UI/tree/master/src/app/modules>

[api-list]:
<https://github.com/public-apis/public-apis>

[restcountries]:
<https://restcountries.com/>

[covid-19-api]:
<https://github.com/M-Media-Group/Covid-19-API>

[Football-Data.org]:
<https://www.football-data.org/documentation/quickstart>
