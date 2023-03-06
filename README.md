# Wolt's Front-End Assignment
This is the **front-end** assignment for the [software engineering 2023](https://careers.wolt.com/en/jobs/software-engineering-intern-summer-2023/26c3bff#apply-now).

> Check the assignment instructions [here](./README/front-end.md)

You can [see it live here!](https://lifebalance.github.io/wolt/)

## Installing Project Dependencies
It's enough with running:
```
npm i
```

> I use [Vite](https://vitejs.dev/) to build and serve the app locally:

## Serving
You can start the [development server](https://vitejs.dev/guide/cli.html#dev-server) with:
```
npm run dev
```

Or if you prefer, you can [build](https://vitejs.dev/guide/cli.html#build) the project:
```
npm run build
```

Then use vite's [preview](https://vitejs.dev/guide/cli.html#vite-preview) feature, which basically **builds** the project, and starts a local server with the React bundled app:
```
npm run preview
```

## About the implementation
I'm aware of libraries such as  or [Formik](https://formik.org/) and [yup](https://github.com/jquense/yup) to handle form validation. Actually in my last school project I used [Reac Hook Form](https://react-hook-form.com/) and [zod](https://zod.dev/) for managing my forms. But in this assignment, I wanted to use as much vanilla TypeScript as possible (still getting practice with it).

## To deploy
To deploy the build to GitHub pages we must:

1. ``npm run build``
2. ``git add dist -f`` (the ``-f`` flag must be used because the ``dist`` folder is in ``.gitignore``)
3. ``git commit -m 'Add build'``
4. ``git subtree push --prefix dist origin gh-pages`` (in Fedora we must ``sudo dnf install git-subtree``)

After a few minutes our page should be available.
