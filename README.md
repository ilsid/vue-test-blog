# Blog Component

## Environment 

- Vue Version: ^3.0.0
- Node Version: v18 (LTS)
- Default Port: 8000

## Functionality Requirements
Develop a Vue.js application that allows users to create, read, update, and delete (CRUD) blog posts. Each blog post should have a title, content, and author.

The component has the following functionalities:

- Filling in the form and clicking the "Save" button should add a new post. If the title, content, or author field is empty, it should show an alert message.
- Clicking the "Edit" button allows you to edit a post.
- Clicking the "Delete" button allows you to delete a post.

## Testing Requirements
The following data-testid attributes are required in the component for the tests to pass:

- When adding a new post, the title in `<input>` should have the data-testid attribute 'new-title'.
- When adding a new post, the content in `<textarea>` should have the data-testid attribute 'new-content'.
- When adding a new post, the author in `<input>` should have the data-testid attribute 'new-author'.
- When editing a post, the title in `<input>` should have the data-testid attribute 'title'.
- When editing a post, the content in `<textarea>` should have the data-testid attribute 'content'.
- When editing a post, the author in `<input>` should have the data-testid attribute 'author'.
- The "Save" button should have the data-testid attribute 'save-button'.
- The "Edit" button should have the data-testid attribute 'edit-button'.
- The "Delete" button should have the data-testid attribute 'delete-button'.

_Note: Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them._
## Project Specifications

**Read Only Files**
- `__tests__/*`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
