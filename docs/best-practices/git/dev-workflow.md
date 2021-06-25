# Development Workflow

This guide focuses only for typical feature developments or development-time bug fixes. This is a beginner's guide to get started with a development.

## Cloning

When start to work with a code, first you need to know about repository types:

- **remote**: this is what the server (Azure Repos, Github, etc.) aware and everybody can see that (with proper access).
- **local**: your own version of the repo, if this gets lost, you need to redo it.

So to get started with the development, you need to get the code from the remote repository. There are various approach for that, Azure Repos can help you with that through Visual Studio Code or give you the link. The command is:

```sh
git clone [remote_repo_url]
```

This will clone to your local folder where you issue the command. This is a one-time effort.

## Get latest

When you start with the development make sure to get a latest on master. You need to switch to that branch (if not there yet) and use git pull.

```sh
git checkout master
git pull
```

## Feature branches

Typically we use the below development workflow:

Create new feature branch -> commit your changes -> push to remote repo -> create a pull request -> complete it to merge to (remote) master.

You need to create a new **feature/{feature-name}** or **hotfix/{bug-to-fix}** branch from the master as the naming convention suggest. You need to switch to that, but can be done in one command:

```sh
git checkout -b feature/epic-button
```

## Commit

During development you need to save your changes and you use commit for that. It can be multiple to separate parts of the development, understand this as kind of checkpoints.  
First, you need to add your changes (git add) and then commit (git commit) or do in one shot:

```sh
git commit -am "feat: Epic button is awesome"
```

- -a: refers to 'all', include all changes
- -m: 'message', to define the commit message

### Semantic Commit Messages

To have good commit messages please use the [**Semantic Commit Messages**][commit-msg].

## Push your code

So far you created one or more commits and ready to share that with the world. Also, you wanted to keep it safe and secured on the server. Push comes to the rescue. So far your changes exists only in your local repo and you need to share that with the server (git push).

```sh
git push origin feature/epic-button
```

This will push your feature branch (with commits if made) to the server and you will have the remote version of it (often referred as origin/...). Once remote branch is available further commits can be push only with the git push command.

VS has some more high level commands for this (push, sync, etc.).

## Pull Request

Since master branch is protected, you need to use a pull request to integrate your changes to master. This can be done on the Azure Repos Pull Request page. If you have a chance add a reviewer other than you to review the code.

### Merge options

Merge options are limited by a policy. The currently used ones are:

- Squash merge: use this when there are several commits in your feature branch and you don't want to apply those as separate. 1 merge commit will be created.
- Semi-linear merge: Use this when you want to keep the history as it happened during development.

## Last steps

After you or the reviewer completed the PR it will be merged to master. All you need to do is to update your (local) master with the change and delete the feature branch you used.

```sh
git checkout master #switch to master
git pull #get latest commits
git branch -d feature/epic-button #delete the feature branch
```

[commit-msg]: ./git-standards.md
