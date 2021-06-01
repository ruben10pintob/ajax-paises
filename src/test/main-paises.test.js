import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing'; // eslint-disable-line import/no-extraneous-dependencies
import '../main-buttom';
import sinon from 'sinon';


suite('ComponentLit', () => {
  let el;
 
  teardown(() => fixtureCleanup());
 
  setup(async () => {
    el = await fixture(html`<paises-app></paises-app>`);
    await el.updateComplete;
  });
 
  test('instantiating properties works', () => {
    assert.equal(el.enviar, 'https://restcountries.eu/rest/v2/region/europe');
   });

   test('function click paises', () => {
    const spy = sinon.spy();
    let button = el.shadowRoot.querySelector('button');
    button.click();

    let paises = await el.loadRequest();
        document.dispatchEvent(new CustomEvent('peticion-paises', {
            bubbles: true,
            composed: true,
            detail: {data: paises}
        }))

    el.addEventListener('peticion-paises', spy);
    assert.isTrue(spy.called);
    
    
   });

 
});