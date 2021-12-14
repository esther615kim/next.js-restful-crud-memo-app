# Project overview

to-be-updated

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Stack used

### Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [Unreleased]

[0.0.4] -2021-12-13

- `Fixed` importing next/documnet outside of pages/\_document error https://stackoverflow.com/questions/69061240/nextjs-importing-next-document-outside-of-pages-document-error
- `bug` Unhandled Runtime Error
  Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

Check the render method of `MsgCard`.

[0.0.3] -2021-12-06

- `Added` MsgInput component
- `Changed` MsgList.jsx in order to add MsgInput component
- `bug` Error: MsgList(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
  - tred #1 https://stackoverflow.com/questions/69211200/next-js-error-element-type-is-invalid-expected-a-string-for-built-in-componen

[0.0.2] -2021-12-04

- `Added` message components and message page
- `Changed` README.md
- `Installed` npm install sass
- `Fixed`

### To-dos

- ✅Create message box
- ✅Update new messages
- ✅Edit message box
- Delete message box
- Add server(node.js)
- mobile responsive design

### References

- Next.js built-in-css-support https://nextjs.org/docs/basic-features/built-in-css-support
- Github changelog https://github.blog/changelog/
- changelog format https://keepachangelog.com/en/1.0.0/
  Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
