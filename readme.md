<h1 align="center">
  <!-- <img src="https://user-images.githubusercontent.com/13087389/126053559-d4c7d080-0ad3-4deb-83dd-2a52b209e5f2.png" width="128" /> -->
  <br> Electron Quick Start - vanillaJS

  ![CodeQL](https://github.com/heliomarpm/electron-quick-start/actions/workflows/codeql-analysis.yml/badge.svg) ![Publish](https://github.com/heliomarpm/electron-quick-start/actions/workflows/publish.yml/badge.svg) <a href="https://navto.me/heliomarpm" target="_blank"><img src="https://navto.me/assets/navigatetome-brand.png" width="32"/></a>

</h1>

<p align="center">
  <!-- PayPal -->
  <a href="https://bit.ly/support-heliomarpm" target="_blank" rel="noopener noreferrer">
    <img alt="paypal url" src="https://img.shields.io/badge/donate%20on-paypal-1C1E26?style=for-the-badge&labelColor=1C1E26&color=0475fe"/>
  </a>
  <!-- Ko-fi -->
  <a href="https://ko-fi.com/heliomarpm" target="_blank" rel="noopener noreferrer">
    <img alt="kofi url" src="https://img.shields.io/badge/kofi-1C1E26?style=for-the-badge&labelColor=1C1E26&color=ff5f5f"/>
  </a>
  <!-- LiberaPay -->  
  <a href="https://liberapay.com/heliomarpm" target="_blank" rel="noopener noreferrer">
     <img alt="liberapay url" src="https://img.shields.io/badge/liberapay-1C1E26?style=for-the-badge&labelColor=1C1E26&color=f6c915"/>
  </a>
  <!-- Version -->
  <a href="https://github.com/heliomarpm/electron-quick-start/releases" target="_blank" rel="noopener noreferrer">
     <img alt="releases url" src="https://img.shields.io/github/v/release/heliomarpm/electron-quick-start?style=for-the-badge&labelColor=1C1E26&color=2ea043"/>
  </a>  
  <!-- License -->
  <a href="https://github.com/heliomarpm/electron-quick-start/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
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

Please make sure to read the [Contributing Guide](https://github.com/heliomarpm/electron-quick-start/blob/master/docs/CONTRIBUTING.md) before making a pull request.


Thank you to all the people who already contributed to project!

<a href="https://github.com/heliomarpm/electron-quick-start/graphs/contributors" target="_blank">
  <img src="https://contrib.rocks/image?repo=heliomarpm/electron-quick-start" />
</a>

###### Made with [contrib.rocks](https://contrib.rocks).

That said, there's a bunch of ways you can contribute to this project, like by:

- :beetle: Reporting a bug
- :page_facing_up: Improving this documentation
- :rotating_light: Sharing this project and recommending it to your friends
- :dollar: Supporting this project on GitHub Sponsors or Ko-fi
- :star2: Giving a star on this repository


## Donate

If you appreciate that, please consider donating to the Developer.

<p align="center">
  <!-- PayPal -->
  <a href="https://bit.ly/paypal-udeler" target="_blank" rel="noopener noreferrer">
    <img alt="paypal url" src="https://img.shields.io/badge/donate%20on-paypal-1C1E26?style=for-the-badge&labelColor=1C1E26&color=0475fe"/>
  </a>
  <!-- Ko-fi -->
  <a href="https://ko-fi.com/heliomarpm" target="_blank" rel="noopener noreferrer">
    <img alt="kofi url" src="https://img.shields.io/badge/kofi-1C1E26?style=for-the-badge&labelColor=1C1E26&color=ff5f5f"/>
  </a>
  <!-- LiberaPay -->  
  <a href="https://liberapay.com/heliomarpm" target="_blank" rel="noopener noreferrer">
     <img alt="liberapay url" src="https://img.shields.io/badge/liberapay-1C1E26?style=for-the-badge&labelColor=1C1E26&color=f6c915"/>
  </a>  
  <!-- GitHub Sponsors -->
  <a href="https://github.com/sponsors/heliomarpm" target="_blank" rel="noopener noreferrer">
    <img alt="github sponsors url" src="https://img.shields.io/badge/GitHub%20-Sponsor-1C1E26?style=for-the-badge&labelColor=1C1E26&color=db61a2"/>
  </a>
</p>

## License

[MIT © Heliomar P. Marques](https://github.com/heliomarpm/electron-quick-start/blob/main/LICENSE)
