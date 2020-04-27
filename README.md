# English path
The spaced repetition app for English learning.

## ToDo by features:
- [x] add auth guards for auth protected pages
- [ ] deploy this very first version of the app
- [ ] add sign-up page
- [ ] add an ability to restore auth credentials with email
- [ ] create the basis for database structure (I'll send it later since we need to discuss it beforehand in order to avoid critical mistakes as later it would be quite expensive to fix it)
- [ ] add the page with all decks with CRUD (create-read-update-delete) capability
- [ ] for simplicity, all decks will be public
- [ ] add client only search by title and tags
- [ ] each user can edit only his own decks
- [ ] add the page for deck editing (CRUD for cards)

### ToDo by implementation details:
- [ ] Use github action for google cloud run deploy https://github.com/GoogleCloudPlatform/github-actions/tree/master/example-workflows/cloud-run
- [ ] Remove unused CSS https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
- [ ] nodemailer
https://github.com/ArturJS/ExtEdu-Api/blob/develop/src/components/registration/registration.service.mjs

- [ ] database structure
https://dbdiagram.io/d/5e9fd19f39d18f5553fe00be
suggestion for cards https://github.com/ankidroid/Anki-Android/wiki/Database-Structure

- [ ] learning algorithm
https://www.reddit.com/r/Anki/comments/8ngrjv/srs_algorithm_too_fast/
and https://github.com/ankitects/anki/blob/master/pylib/anki/sched.py