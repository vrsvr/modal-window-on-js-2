const modal = $.modal({
  title: 'Modal window title',
  closable: true,
  content: `
    <p>Lorem ipsum dolor</p>
  `,
  width: '400px',
  footerButtons: [{
    text: 'Ok',
    type: 'primary',
    handler() {
      console.log('Primary btn clicked');
      modal.close();
    }
  }, {
    text: 'Cancel',
    type: 'danger',
    handler() {
      console.log('Danger btn clicked');
      modal.close();
    }
  }, ]
});