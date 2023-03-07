# Electron Quick Start - vanillaJS ![CodeQL](https://github.com/heliomarpm/electron-quick-start/actions/workflows/codeql-analysis.yml/badge.svg) ![Publish](https://github.com/heliomarpm/electron-quick-start/actions/workflows/publish.yml/badge.svg) 

<p align="center">
  <!-- Ko-fi -->
<!--   <a href="https://ko-fi.com/heliomarpm">
    <img alt="ko-fi url" src="https://img.shields.io/badge/support%20on-kofi-1C1E26?style=for-the-badge&labelColor=1C1E26&color=B181F1"/>
  </a> -->
  <!-- Version -->
  <a href="https://github.com/heliomarpm/electron-quick-start/releases">
     <img alt="releases url" src="https://img.shields.io/github/v/release/heliomarpm/electron-quick-start?style=for-the-badge&labelColor=1C1E26&color=F28BA9"/>
  </a>  
  <!-- License -->
  <a href="https://github.com/heliomarpm/electron-quick-start/blob/main/LICENSE">
    <img alt="license url" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=61ffca"/>
  </a>
</p>


Clone and run for a quick way to see Electron in action.

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/latest/tutorial/quick-start) within the Electron documentation.

A basic Electron application needs just these files:

package.json - Points to the app's main file and lists its details and dependencies.
main.js - Starts the app and creates a browser window to render HTML. This is the app's main process.
index.html - A web page to render. This is the app's renderer process.
preload.js - A content script that runs before the renderer process loads.
You can learn more about each of these components in depth within the [Tutorial](https://electronjs.org/docs/latest/tutorial/tutorial-prerequisites).


<p align="center">
  <a href="#electron-app">
    <img alt="preview" src="https://raw.githubusercontent.com/heliomarpm/screenshots/main/electron-quick-start.png" >
  </a>
</p>

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/heliomarpm/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
-- or --
# Run the app mode develop
npm run dev
```

> **Note**: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


# Releasing
> **Note**: to be able to perform `auto-updates` you will need a `code signed app`, for this purpose you will need to configure it by yourself, so check the [electron-builder](https://www.electron.build/code-signing) and [action-electron-builder](https://github.com/samuelmeuli/action-electron-builder#code-signing) docs please to get know how to do this.

To release your app on a GitHub release with `Windows`, `Mac` and `Linux` binaries, you can perform the following commands:

```bash
git pull
npm run make:release
```

> **Note**: Script for make release is contribution by @daltonmenezes


## Dev Dependencies

- [electron](https://ghub.io/electron): Build cross platform desktop apps with JavaScript, HTML, and CSS
- [electron-builder](https://ghub.io/electron-builder): A complete solution to package and build a ready for distribution Electron app for MacOS, Windows and Linux with “auto update” support out of the box
- [open](https://ghub.io/open): Open stuff like URLs, files, executables. Cross-platform.
- [semver](https://ghub.io/semver): The semantic version parser used by npm.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation

# Contributing
> **Note**: contributions are always welcome, but always **ask first**, — please — before work on a PR.

That said, there's a bunch of ways you can contribute to this project, like by:

- :beetle: Reporting a bug
- :page_facing_up: Improving this documentation
- :rotating_light: Sharing this project and recommending it to your friends
- :dollar: Supporting this project on GitHub Sponsors or Ko-fi
- :star2: Giving a star on this repository


## License

[MIT © Heliomar P. Marques](https://github.com/heliomarpm/electron-quick-start/blob/main/LICENSE)