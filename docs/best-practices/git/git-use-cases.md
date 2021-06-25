# Git - Use cases

We collect a few exercises to help learning.

## First steps

Please follow the **Git - Getting started** [guide][gitgettingstarted].

The goal of this is to have a basic understanding and try that with:

1. Git command line
2. Visual Studio
3. Visual Studio Code.

Please always try to learn from the command line up, that will help a lot to understand, also later there are cases which is more easy to solve with a Git CLI.

## Branching

We follow **trunk based model** (using feature branches). Another very popular approach is GitFlow where there are nice extensions to use that.

### Why not GitFlow?

GitFlow is overly complex (although still a great approach), just question yourself, why you need extensions for Visual Studio to use this?  
Another problem with GitFlow is that it doesn't support fixing older releases. They have created the "support" branches for this but that never matured.

Also if you compare the two approach, you will clearly see the difference. As always, start simple and if that doesn't enough, evolve your flow.

Want to know more? Check this [guide][gitflow].

## Understand PR merges and parallel developments

We focus on Azure DevOps approach. [Let's read][prwithrebase] and understand the possible options (even though this could be limited in our repos). To help with that you can follow this exercise.

1. Create an empty Git repository
2. Create a yaml CI build for that from Azure DevOps UI (no problem if there is no code there yet)
3. Upload a hello-world C# application (feature branch -> Pull Request (PR) -> master), 2 builds should kick-in unless otherwise specified.
4. Create a new feature branch and do some changes on the code, push to the server but **don’t PR to the master yet**
5. Create another feature from master or hotfix branch and do conflicting changes there.
6. Now you can try to resolve this. Either doing merges on your local or rebasing. You can try both to see. Maybe in the other scenario you can keep the both feature branches on your local, PR one to master and then continue the other one and do a rebase on master to grasp the latest changes. This is to simulate what happens if someone else is also working on the code.
7. When completing the code you can see how the different merge strategies work there. I won't go into the details here as you can check this on the linked article. Make sure to always check the commit history to see the difference.

[gitgettingstarted]: git-getting-started.md
[gitflow]: https://www.toptal.com/software/trunk-based-development-git-flow
[prwithrebase]: https://devblogs.microsoft.com/devops/pull-requests-with-rebase/
