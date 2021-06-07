# Contributing to dogecoin.com
Welcome! Any changes made to this repository will reflect on the official website - dogecoin.com

This document explains the practical process and guidelines for contributing.
There are repository "maintainers" who are responsible for merging pull requests as well as a "lead maintainer" who is responsible for the release cycle, overall merging, moderation and appointment of maintainers.

# Contributor Workflow
The website is maintained using the "contributor workflow" where everyone without exception contributes patch proposals using "pull requests". This facilitates social contribution, easy testing and peer review.

To contribute a patch, the workflow is as follows:

* Fork repository
* Create topic branch
* Commit patches

Please refer to the [Git manual](https://git-scm.com/doc) for more information about Git.

* Push changes to your fork
* Create pull request

If a pull request is specifically not to be considered for merging (yet) please prefix the title with [WIP] or use Tasks Lists in the body of the pull request to indicate tasks are pending.

The body of the pull request should contain enough description about what the patch does together with any justification/reasoning. You should include references to any discussions (for example other tickets or mailing list discussions).

At this stage one should expect comments and review from other contributors. You can add more commits to your pull request by committing them locally and pushing to your fork until you have satisfied all feedback.

# Squashing Commits
If your pull request is accepted for merging, you may be asked by a maintainer to squash and or rebase your commits before it will be merged. The basic squashing workflow is shown below.

```
git checkout your_branch_name
git rebase -i HEAD~n
# n is normally the number of commits in the pull
# set commits from 'pick' to 'squash', save and quit
# on the next screen, edit/refine commit messages
# save and quit
git push -f # (force push to GitHub)
``` 

If you have problems with squashing (or other workflows with git), you can alternatively enable "Allow edits from maintainers" in the right GitHub sidebar and ask for help in the pull request.

Please refrain from creating several pull requests for the same change. Use the pull request that is already open (or was created earlier) to amend changes. This preserves the discussion and review that happened earlier for the respective change set.

The length of time required for peer review is unpredictable and will vary from pull request to pull request.

Project maintainers aim for a quick turnaround on refactoring pull requests, so where possible keep them short, uncomplex and easy to verify.

# Peer Review

Anyone may participate in peer review which is expressed by comments in the pull request. Typically reviewers will review the code for obvious errors, as well as test out the patch set and opine on the technical merits of the patch. Project maintainers take into account the peer review when determining if there is consensus to merge a pull request (remember that discussions may have been spread out over GitHub, mailing list and IRC discussions). The following language is used within pull-request comments:

* ACK means "I have tested the code and I agree it should be merged";
* NACK means "I disagree this should be merged", and must be accompanied by sound technical justification (or in certain cases of copyright/patent/licensing issues, legal justification). NACKs without accompanying reasoning may be disregarded;
* utACK means "I have not tested the code, but I have reviewed it and it looks OK, I agree it can be merged";
Concept ACK means "I agree in the general principle of this pull request";
* Nit refers to trivial, often non-blocking issues.

Reviewers should include the commit hash which they reviewed in their comments.

Project maintainers reserve the right to weigh the opinions of peer reviewers using common sense judgement and also may weight based on meritocracy: Those that have demonstrated a deeper commitment and understanding towards the project (over time) or have clear domain expertise may naturally have more weight, as one would expect in all walks of life.

# Getting Started 
* [Contributing to dogecoin.com (Docker Guide)](https://github.com/dogecoin/dogecoin.com/blob/gh-pages/getting-started/contribute_docker.md)
* [Contributing to dogecoin.com (Linux Guide)](https://github.com/dogecoin/dogecoin.com/blob/gh-pages/getting-started/contribute_linux.md)
* [Contributing to dogecoin.com (OSX Guide)](https://github.com/dogecoin/dogecoin.com/blob/gh-pages/getting-started/contribute_osx.md)
* [Contributing to dogecoin.com (Windows Guide)](https://github.com/dogecoin/dogecoin.com/blob/gh-pages/getting-started/contribute_windows.md)