# Lyricist

The backend programs built for Bard

## Tooling

Because this is a TypeScript project, we're using
[`ts-node-dev`](https://github.com/whitecolor/ts-node-dev)
to compile the packages as we write them. To start the system, just run
`yarn dev`.

We also use [Prettier](https://prettier.io). There's a `.prettierrc` file in
this repo containing the configuration for that, and if you have the VSCode
extensions installed, we also have `editor.formatOnSave` set to true in the
workspace config file &amp; the `editor.defaultFormatter` set to use Prettier.

We _also_ include a Docker Compose file and Dockerfiles for each package, which
are easy to use. The easiest way to use them would be to run
`docker-compose up -d`, but you _can_ build each package individually with the
`docker build . -f packages/<package-name>/Dockerfile -t package-name` command.
