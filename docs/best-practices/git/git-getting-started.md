# Git

How we get started with Git?

## Prerequisites

Needless to say, we need Git (for Windows) installed. This could be downloaded from the [Git site](gitsite) or can be installed with Visual Studio 2019 (Visual Studio Installer -> Modify -> Individual components -> Git for Windows).

## Understand the basics

We should try to complete the same from command line and IDE as well (VS or VS Code).

What you should understand:

1. Basic git commands (status, add, fetch, pull, push, branch, checkout). [Cheatsheet][cheatsheet]
2. Workflow (branching) concepts (focus on feature branches).
3. Pull request, review process, how to merge the PR, how to resolve feedback.

## Azure Devops

We also need to see a few things here:

1. Get familiar with the repo tile (branches, commits, PR, etc.)
2. Create repo, upload source code, differences (tfignore->gitignore, etc.)
3. YAML builds (create yaml builds instead of classic UI)
4. version tags

## How to get started

Follow these articles, instead of Bitbucket we use our own Azure Devops instance.

1. [Learn Git with Bitbucket Cloud][learngit]
2. [Learn about code review in Bitbucket Cloud][learncodereview]
3. [Learn Branching with Bitbucket Cloud][learnbranching]
4. [git syncing][gitsyncing]
5. [Getting Started with Git and Azure DevOps: The Ultimate Guide][basicgitandazuredevops]
6. [Learn Git Branching][learngitbranching]

## Recommended Pluralsight Training

If you want to learn the concept behind Git, these two trainings by Paolo Perrota will help you to achieve that (Pluralsight access required):

[How Git Works][howgitworks]

[Mastering Git][masteringgit]

## Use Cases

After you gone through the tutorials, you could check few use cases [here][gitusecases].

## Migration from TFVC

Please check [here][migratefromtfvc] for approaches to migrate from TFVC to Git.

[cheatsheet]: https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet
[learngit]: https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud
[learncodereview]: https://www.atlassian.com/git/tutorials/learn-about-code-review-in-bitbucket-cloud
[learnbranching]: https://www.atlassian.com/git/tutorials/learn-branching-with-bitbucket-cloud
[gitsyncing]: https://www.atlassian.com/git/tutorials/syncing
[basicgitandazuredevops]: https://blog.cloudskills.io/getting-started-with-git-and-azure-devops-the-ultimate-guide/
[learngitbranching]: https://learngitbranching.js.org/
[gitusecases]: git-use-cases.md
[migratefromtfvc]: git-migration-from-tfvc.md

[masteringgit]: https://app.pluralsight.com/library/courses/master-git/table-of-contents
[howgitworks]: https://app.pluralsight.com/library/courses/how-git-works/table-of-contents

[gitsite]: https://git-scm.com/downloads
