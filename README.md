# Node Environnement

- Node : v12.2
- npm : 6.9.0
- react-native-cli : 2.0.1

# Installation

- `git clone https://github.com/damienassany/code-check-react-native.git`
- `cd code-check-react-native && npm install`
- `react-native link react-native-vector-icons`
- `react-native run-android` ou depuis Xcode ouvrir le fichier `/ios/ecov.xcodeproj` et cliquer sur "Run"

# Ouvrir le Storybook

L'affichage du Storybook est conditionné par une constante définie dans le fichier `index.js` à la racine du projet.

Définissez `SHOW_STORYBOOK` à `true` pour afficher le design system, et lancez l'application.

# Technologies

- [React Native](https://facebook.github.io/react-native/)
- [MobX](https://github.com/mobxjs/mobx)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Storybook for React Native](https://github.com/storybooks/storybook)
- [Storyshots](https://storybook.js.org/docs/testing/structural-testing/)
