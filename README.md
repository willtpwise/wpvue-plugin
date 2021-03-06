# WPVue Plugin

Vue.js, SCSS and JS seed for Wordpress Plugin development. Runs [Webpack 2](https://webpack.js.org/)
with a [BrowserSync](https://browsersync.io/) dev server.

## Getting Started
Clone this repo into a local Wordpress environment's plugin directory

### 1. Local config
Rename `config/local-example.json` to `config/local.json` and update the `proxy`
to the HTTP URL of your local Wordpress install.

E.g.
```json
{
  "proxy": "http://localhost:8000/my-site/"
}
```
Make sure to *include* a trailing slash.

### 2. Install dependencies
Install node dependencies by running `npm install` within the plugins directory

```shell
$ npm install
```

### 3. Install the plugin
From your *Wordpress admin screen* go to `Plugins > Installed Plugins` and [install the plugin](http://www.wpbeginner.com/beginners-guide/step-by-step-guide-to-install-a-wordpress-plugin-for-beginners/)

### 4. Run the developer environment
Run the `dev` command to spin up the development server. Webpack will try to proxy
your PHP server, so make sure MAMP (or whatever you run your local WP install with) is running.

```shell
$ npm run dev
```

## Building for production
To build for production (with minification, hashed URLs, etc) run the `build` command.
Once complete, you can optionally remove the `src` directory from the deployment package.

```shell
$ npm run build
```

Note that both the `dev` command and `build` command make use of the `dist` directory, however
files generated by the `dev` command are not commited to version control (`git`).
