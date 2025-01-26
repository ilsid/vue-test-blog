import { mount } from '@vue/test-utils';
import Blog from '@/components/Blog.vue';

describe('Blog', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Blog);
  });

  const getByTestId = (id) => {
    return wrapper.find(`[data-testid="${id}"]`);
  };

  it('adds a new post when save button is clicked', async () => {
    await wrapper.setData({ showForm: true });

    const titleInput = getByTestId('new-title');
    const contentInput = getByTestId('new-content');
    const authorInput = getByTestId('new-author');
    const saveButton = getByTestId('save-button');

    titleInput.element.value = 'Test Title';
    titleInput.trigger('input');
    contentInput.element.value = 'Test Content';
    contentInput.trigger('input');
    authorInput.element.value = 'Test Author';
    authorInput.trigger('input');

    await saveButton.trigger('click');

    expect(wrapper.text()).toContain('Test Title');
    expect(wrapper.text()).toContain('Test Content');
    expect(wrapper.text()).toContain('Test Author');
  });

  it('shows alert when title, content, or author is empty', async () => {
    await wrapper.setData({ showForm: true }); 

    const saveButton = getByTestId('save-button');
    const originalAlert = window.alert;
    window.alert = jest.fn();

    await saveButton.trigger('click');
    
    expect(window.alert).toHaveBeenCalled();
    window.alert = originalAlert;
  });
  
  it('edits a post when edit button is clicked', async () => {
  
    // Set initial data with posts
    await wrapper.setData({
      posts: [
        { title: 'Old Title', content: 'Old Content', author: 'Old Author' }
      ]
    });
  
    const editButton = wrapper.find('[data-testid="edit-button"]');
    await editButton.trigger('click');
    
    expect(wrapper.find('[data-testid="title"]').element.value).toBe('Old Title');
    expect(wrapper.find('[data-testid="content"]').element.value).toBe('Old Content');
    expect(wrapper.find('[data-testid="author"]').element.value).toBe('Old Author');

    await wrapper.find('[data-testid="title"]').setValue('New Title');
    await wrapper.find('[data-testid="content"]').setValue('New Content');
    await wrapper.find('[data-testid="author"]').setValue('New Author');
  
    const saveButton = wrapper.find('[data-testid="save-button"]');
    await saveButton.trigger('click');
  
    // Assert that the updated post is reflected correctly
    expect(wrapper.text()).toContain('New Title');
    expect(wrapper.text()).toContain('New Content');
    expect(wrapper.text()).toContain('New Author');
  });


  it('deletes a post when delete button is clicked', async () => {
    await wrapper.setData({
      posts: [
        { title: 'Title to delete', content: 'Content to delete', author: 'Author to delete' }
      ]
    });

    const deleteButton = getByTestId('delete-button');
    await deleteButton.trigger('click');

    expect(wrapper.text()).not.toContain('Title to delete');
  });
});
