import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing'; // eslint-disable-line import/no-extraneous-dependencies
import '../main-buttom';
 
suite('ComponentLit', () => {
  let el;
 
  teardown(() => fixtureCleanup());
 
  setup(async () => {
    el = await fixture(html`<main-buttom></main-buttom>`);
    await el.updateComplete;
  });
 
  test('instantiating properties works', () => {
    assert.equal(el.enviar, 'Enviar');
    assert.equal(el.borrar, 'Borrar');
    assert.isTrue(el.activo);
    assert.equal(el.cambiar, 'Cambiar');
    assert.isFalse(el.enviado);
    assert.equal(el.inputValue, '');
   });

   test('function cambiar nombre boton', () => {
       let button = el.shadowRoot.querySelector('#buttom-change');
       let valueOld = el.shadowRoot.querySelector('#buttom-change').textContent;
       button.click();
       assert.notEqual(valueOld, el.cambiar);
   });

   test('funcion pintar input', () => {
       let button = el.shadowRoot.querySelector('#button-send');
       let valueOld = el.shadowRoot.querySelector('input');
       button.click();
       assert.notEqual(valueOld, el.inputValue);
       
   });

   
 
});