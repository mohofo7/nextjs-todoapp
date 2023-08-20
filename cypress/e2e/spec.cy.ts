describe('spec', () => {
  it('add todo', () => {
    cy.visit('localhost:3000')
    const input = cy.get('input[data-test="title"]');
    input.type('test')
    const submit = cy.get('button[data-test="submit"]');
    submit.click();
    const item = cy.get('div[data-test="list-item"] .chakra-text');
    item.should('have.text', 'test');
  })
  it('remove todo', () => {
    cy.visit('localhost:3000')
    const input = cy.get('input[data-test="title"]');
    input.type('test')
    const submit = cy.get('button[data-test="submit"]');
    submit.click();
    const deleteBtn = cy.get('button[data-test="delete-btn"]');
    deleteBtn.click();
    cy.get('div[data-test="list-item"] .chakra-text').should('not.exist');
  })
  it('update todo', () => {
    cy.visit('localhost:3000', {
      onBeforeLoad(win) {
        cy.stub(win, 'prompt').returns('random text to test')
      }
    })
    const input = cy.get('input[data-test="title"]');
    input.type('test')
    const submit = cy.get('button[data-test="submit"]');
    submit.click();
    const item = cy.get('div[data-test="list-item"] .chakra-text');
    item.dblclick().then(() => {
      item.should('have.text', 'random text to test');
    })
  })
  it('remove all todo', () => {
    cy.visit('localhost:3000')
    const input = cy.get('input[data-test="title"]');
    const submit = cy.get('button[data-test="submit"]');
    const clear = cy.get('button[data-test="clear"]');
    input.type('test')
    submit.click();
    clear.click();
    input.type('test 2')
    submit.click();
    const removeAll = cy.get('button[data-test="remove-all"]');
    removeAll.should('exist');
    clear.click();
    input.type('test 3')
    submit.click();
    removeAll.click();
    cy.get('div[data-test="list-item"] .chakra-text').should('not.exist');
  })
})