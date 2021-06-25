# Guidelines for documentation

- [Guidelines for documentation](#guidelines-for-documentation)
  - [Generic](#generic)
    - [Links](#links)
    - [Table of Contents](#table-of-contents)
  - [Project](#project)
  - [Repository](#repository)
  - [Solutions, components](#solutions-components)
    - [Structure](#structure)
      - [Images](#images)
  - [How to contribute in the documentation](#how-to-contribute-in-the-documentation)
    - [Azure DevOps web UI](#azure-devops-web-ui)
    - [Visual Studio Code](#visual-studio-code)

## Generic

First and foremost, all documents must be created in **Markdown** format.

As described above the documentation can be on different levels (Project, Repository, Solution). Entry point is always the README.md in each level and in fortunate cases those are linked. This means in each level we need to create documentations and keep those updated on changes!

For folder and file naming we use the **kebab-case** (lowercase, dash separated). Who doesn't like a good kebab? ;-) The only exception to this is the README.md files.

The recommended tools for documentation:

- Visual Studio Code
- Markdown All in One extension
- markdownlint extension

### Links

When using (internal or external) links in your document like **pictures**, other **documents**, **web links**, add the link at the end of the file and don't place directly at the location of appearance, this helps to keep links healthy in case of changes (exception: README.md).

Bad: using bare links:

![Bare link][link-bare]

Bad: using inline-style link:

![Inline-style link][link-inline]

**Good**: reference-style link:

![Reference-style link][link-reference]

![Reference-style link][link-reference2]

### Table of Contents

For longer documents please create a TOC section in the beginning, like in this document. There are multiple extensions for this, as we requested the *Markdown All in One* plugin, it has a feature for that in the Command Palette (F1), **Create Table Of Contents**.

## Project

On the Azure DevOps project landing page there is an *About this project* section where we need to summarize what is this project about, what are the repos available and a link to those documentation. As each project will have a Common repo, we will use it's README.md.

## Repository

Similarly in each repo we need to have a README file which describes the repository. If the repo contains only one solution, this could be the entry point for the documentations, please see below. If there are multiple solutions there this file contains links to the files in that folder.

## Solutions, components

We will separate 2 kinds of documents:

- User guides, FAQ, release notes, placed in the **user** folder
- Technical guides, architecture, getting started for developers, placed in the **developer** folder

Make sure we keep this separation and we don't link across. A user guide shouldn't reference something from the develop as we will publish it later for the users.

How does it look like in the real life? An almost similar example you can check at the [Kubernetes Dashboard GitHub page][k8sdash]

### Structure

- README.md - entry point for the documentation, a summary for our team internally, have the following sections:
  - Badges (build, release, security, etc.)
  - Summary about the solution with a screenshot if applicable
  - Getting Started: how to start with the solution (deploy, access, etc)
  - Documentation: Links for the User and Developer guides (+Common if any).
  - Contribution: how, who to contact, ways of communication
  - Copyright
- /docs/README.md - TOC (in each subfolder)
- /docs/developer/ - developer guides, can contain multiple MD files.
- /docs/user/ - user guides, can contain multiple MD files

#### Images

If you have supporting **images**, please add it under the images folder, like /docs/user/images. Use a meaningful name for the images also, counters are discouraged. Make sure file name extension is in lowercase! (eg: release-environments.png instead of release3.png)

## How to contribute in the documentation

### Azure DevOps web UI

Use this for very small changes (typo, wording, etc.).

### Visual Studio Code

The preferred way of doing it. As in the development environment [guide][de-guide], please use **markdownlint** extension for styling. To use this we need to understand the basic principles of Git and follow a workflow. All commands are available in the Command Palette (F1)

- Git Pull: Get the latest changes from the server. Make sure you run this also before committing (or use auto-pull in VS Code)
- Git Stage (All) Changes: Mark the files for commit. You can also use the Source Control menu at side for these.
- Associate Work Item: link to an Azure DevOps work item.
- Git Commit: commit your change(s) (local!)
- Git Push: send your commit(s) to the server

If working on bigger changes or on a protected branch, first create a feature branch (Git: Create branch from...). Use the same steps as above and when completed use a pull request to merge your changes.

[de-guide]: ../dev-environment/README.md
[link-bare]: ./images/link-bare.png
[link-inline]: ./images/link-inline.png
[link-reference]: ./images/link-reference.png
[link-reference2]: ./images/link-reference-bottom.png
