# Git - Migration from TFVC

There are several approaches to migrate from TFVC to Git.

## Basic approach

First, we need to make sure we are consistent on TFVC, means all pending changes are checked in, fixes are merged backed. The Development and Main branch should have the same state.

### Where

As with the migration we create a master branch on Git, we recommend to start the migration **from the Main** branch version.

### History

Next question is about the history. We have an option to keep the history until t-180 days. We (and also Microsoft) recommends to **not keep any history** on migration. In our case it's also the case as we can keep the history by keeping the tfvc branches there.

### Old repository

After the migration make sure to put the **tfvc main/development branches** as **read-only**. [Put TFVS Branch as read-only][tfvsbranchreadonly]
If we don't care about the old versions, we can even delete it to avoid confusion.

### Perform the migration

On the repositories there is an option to import a repository. By default it shows to import from Git but it can be changed to TFVC. Next we need to select the preferences for the history, finally let's hit the migration.

### Fixes after the migration

If we need to fix something a version which was created earlier than the migration then we need to fix on the TFVC HF_xxxx branch but we won't merge it back as anyways the Main is read-only. But! We also need to integrate this change to the Git repository as well. Probably this will be just created as a new hotfix branch and merged to master.

## Advanced migration

If we are not satisfied with the history limitation (180 days) or you'd like to migrate all the related branches as well, we can use the [git-tfs.exe][gittfs]. Although this need careful planning and testing. This will be never really our case, just to keep here for the records. We prefer to start from the last point in time and continue from there with Git.

## After the migration

There are a few things we need to take care after the migration:

1. Replace tfignore with gitignore.
2. Change the builds pointing to Git. Although this is easy, we recommend to create new YAML based builds and releases. As now the yaml cd pipelines are not available (Azure DevOps 2019), in this case we can repoint the existing releases to the new artifact or create a new release definition.

[tfvsbranchreadonly]: http://factoryapps.flex.com/home/solutions/technote/16705
[gittfs]: https://github.com/git-tfs/git-tfs